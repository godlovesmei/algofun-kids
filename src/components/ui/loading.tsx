import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Custom CSS/Framer Motion Loaders
const SpinnerLoader = () => (
    <div className="flex items-center justify-center">
        <motion.div
            className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
    </div>
);

const DotsLoader = () => (
    <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                className="w-4 h-4 bg-blue-500 rounded-full"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                }}
            />
        ))}
    </div>
);

const PulseLoader = () => (
    <div className="relative">
        <motion.div
            className="w-12 h-12 bg-purple-500 rounded-full"
            animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
            }}
        />
        <motion.div
            className="absolute inset-0 w-12 h-12 bg-purple-400 rounded-full"
            animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.3,
            }}
        />
    </div>
);

const WaveLoader = () => (
    <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="w-2 h-8 bg-gradient-to-t from-pink-400 to-purple-500 rounded-full"
                animate={{
                    scaleY: [1, 2, 1],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                }}
            />
        ))}
    </div>
);

const CircleProgressLoader = ({ progress = 75 }) => (
    <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-gray-200"
            />
            <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-blue-500"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                style={{
                    strokeDasharray: '175.929',
                    strokeDashoffset: '175.929',
                }}
            />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-blue-500">
                {progress}%
            </span>
        </div>
    </div>
);

// 2. Lottie Loader Component
const LottieLoader = ({
    animationUrl = '/animations/loading.json',
    size = 120,
}) => {
    const [animationData, setAnimationData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulasi load Lottie animation
        const timer = setTimeout(() => {
            // Di real app, ini akan fetch actual Lottie file
            setAnimationData({
                // Mock animation data
                mock: true,
            });
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [animationUrl]);

    if (loading) {
        return <SpinnerLoader />;
    }

    return (
        <div className="flex items-center justify-center">
            <div
                style={{ width: size, height: size }}
                className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl animate-bounce"
            >
                🚀
            </div>
        </div>
    );
};

// 3. Full Screen Loader Overlay
const FullScreenLoader = ({ isLoading, children, loaderType = 'pulse' }) => {
    const loaderComponents = {
        spinner: <SpinnerLoader />,
        dots: <DotsLoader />,
        pulse: <PulseLoader />,
        wave: <WaveLoader />,
        lottie: <LottieLoader />,
    };

    return (
        <div className="relative">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                    >
                        <div className="text-center">
                            {loaderComponents[loaderType]}
                            <motion.p
                                className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                Memuat konten amazing... ✨
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </div>
    );
};

// 4. Loading Button
const LoadingButton = ({ loading, children, onClick, ...props }) => (
    <button
        onClick={onClick}
        disabled={loading}
        className="relative px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        {...props}
    >
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center justify-center"
                >
                    <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                    <span className="ml-2">Loading...</span>
                </motion.div>
            ) : (
                <motion.span
                    key="content"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                >
                    {children}
                </motion.span>
            )}
        </AnimatePresence>
    </button>
);

// 5. Demo Component
export default function LoaderDemo() {
    const [fullScreenLoading, setFullScreenLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const triggerFullScreenLoader = () => {
        setFullScreenLoading(true);
        // Simulasi loading
        setTimeout(() => {
            setFullScreenLoading(false);
        }, 3000);
    };

    const triggerButtonLoader = () => {
        setButtonLoading(true);
        setTimeout(() => {
            setButtonLoading(false);
        }, 2000);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 0;
                return prev + 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <FullScreenLoader isLoading={fullScreenLoading} loaderType="lottie">
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        🎨 Loading Components Demo
                    </h1>

                    {/* Basic Loaders */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            Basic Loaders
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h3 className="font-medium mb-4">Spinner</h3>
                                <SpinnerLoader />
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h3 className="font-medium mb-4">Dots</h3>
                                <DotsLoader />
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h3 className="font-medium mb-4">Pulse</h3>
                                <PulseLoader />
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h3 className="font-medium mb-4">Wave</h3>
                                <WaveLoader />
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h3 className="font-medium mb-4">
                                    Circle Progress
                                </h3>
                                <CircleProgressLoader progress={progress} />
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h3 className="font-medium mb-4">
                                    Lottie (Mock)
                                </h3>
                                <LottieLoader />
                            </div>
                        </div>
                    </section>

                    {/* Interactive Examples */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            Interactive Examples
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h3 className="font-medium mb-4">
                                    Full Screen Loader
                                </h3>
                                <button
                                    onClick={triggerFullScreenLoader}
                                    className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                                >
                                    Trigger Full Screen Loading
                                </button>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h3 className="font-medium mb-4">
                                    Loading Button
                                </h3>
                                <LoadingButton
                                    loading={buttonLoading}
                                    onClick={triggerButtonLoader}
                                >
                                    Click Me!
                                </LoadingButton>
                            </div>
                        </div>
                    </section>

                    {/* Usage Instructions */}
                    <section className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">
                            📝 Cara Pakai dengan Lottie
                        </h2>
                        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
                            {`// 1. Install lottie-react
npm install lottie-react

// 2. Import & gunakan
import Lottie from 'lottie-react';
import loadingAnimation from '/public/animations/loading.json';

const MyLoader = () => (
  <div className="flex justify-center">
    <Lottie 
      animationData={loadingAnimation} 
      loop 
      style={{ width: 150, height: 150 }}
    />
  </div>
);`}
                        </div>
                        <p className="mt-4 text-gray-600">
                            💡 <strong>Tips:</strong> Download animasi Lottie
                            gratis dari{' '}
                            <a
                                href="https://lottiefiles.com"
                                className="text-blue-500 hover:underline"
                            >
                                LottieFiles.com
                            </a>{' '}
                            lalu taruh di folder{' '}
                            <code className="bg-gray-100 px-2 py-1 rounded">
                                public/animations/
                            </code>
                        </p>
                    </section>
                </div>
            </div>
        </FullScreenLoader>
    );
}
