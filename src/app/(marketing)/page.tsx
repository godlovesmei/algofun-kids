'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Link from 'next/link';
import {
    Sparkles,
    Brain,
    Shield,
    Zap,
    Star,
    ArrowRight,
    Play,
    Users,
    Trophy,
    Heart,
} from 'lucide-react';

export default function Home() {
    const [animationData, setAnimationData] = useState<any>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        fetch('/assets/maskot-algofun.json')
            .then((res) => res.json())
            .then(setAnimationData)
            .catch(console.error);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeInOut
        },
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 30,
                        y: mousePosition.y * 30,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * -20,
                        y: mousePosition.y * -20,
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 15,
                        y: mousePosition.y * 25,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-40"
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <main className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-16 px-6 py-32 lg:flex-row lg:py-20">
                {/* Enhanced Lottie Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                    className="relative"
                >
                    <motion.div
                        animate={floatingAnimation}
                        className="h-80 w-80 relative"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse"></div>

                        {animationData && (
                            <Lottie
                                animationData={animationData}
                                loop
                                className="relative z-10 drop-shadow-2xl"
                            />
                        )}

                        {/* Decorative Elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full"
                            animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>

                {/* Enhanced Text Section */}
                <motion.div
                    className="text-center lg:text-left lg:flex-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Platform Pembelajaran AI Terdepan
                        <Sparkles className="w-4 h-4" />
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight"
                    >
                        Belajar Algoritma
                        <br />
                        <span className="text-yellow-500">Jadi Seru! 🚀</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                        Revolusi pembelajaran logika & algoritma dengan AI yang
                        <span className="font-semibold text-purple-600 dark:text-purple-400">
                            {' '}
                            interaktif
                        </span>
                        ,
                        <span className="font-semibold text-pink-600 dark:text-pink-400">
                            {' '}
                            menyenangkan
                        </span>
                        , dan{' '}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                            penuh inovasi
                        </span>
                        untuk anak SD masa depan.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
                    >
                        <Button
                            asChild
                            variant="super"
                            size="lg"
                            className="group relative overflow-hidden px-8 py-6 text-lg font-bold shadow-2xl"
                        >
                            <Link
                                href="/welcome"
                                className="flex items-center gap-3"
                            >
                                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Mulai
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="default"
                            size="lg"
                            className="px-8 py-6 text-lg font-bold group"
                        >
                            <Link
                                href="/login"
                                className="flex items-center gap-2"
                            >
                                Aku Sudah Punya Akun
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
                    >
                        {[
                            {
                                icon: Users,
                                label: '1000+',
                                desc: 'Anak Bahagia',
                            },
                            {
                                icon: Trophy,
                                label: '98%',
                                desc: 'Tingkat Kepuasan',
                            },
                            {
                                icon: Star,
                                label: '4.9',
                                desc: 'Rating Aplikasi',
                            },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="text-center group cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.desc}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </main>

            {/* Enhanced Features Section */}
            <section className="relative px-6 py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Kenapa AlgoFun Spesial? ✨
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Teknologi terdepan bertemu dengan pendekatan
                            pembelajaran yang revolusioner
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Brain,
                                title: 'AI Pembelajaran Adaptif',
                                desc: 'Sistem cerdas yang memahami gaya belajar unik setiap anak dan menyesuaikan materi secara real-time.',
                                gradient: 'from-purple-500 to-indigo-500',
                            },
                            {
                                icon: Sparkles,
                                title: 'Gamifikasi Imersif',
                                desc: 'Pembelajaran berbasis game dengan reward system, level progression, dan achievement yang memotivasi.',
                                gradient: 'from-pink-500 to-rose-500',
                            },
                            {
                                icon: Shield,
                                title: 'Keamanan Terjamin',
                                desc: 'Platform aman dengan konten terkurasi khusus anak SD, tanpa iklan atau konten tidak pantas.',
                                gradient: 'from-green-500 to-teal-500',
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="group relative"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                                    {/* Gradient Background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                    />

                                    <div
                                        className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg mb-6`}
                                    >
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {feature.desc}
                                    </p>

                                    {/* Decorative corner */}
                                    <div
                                        className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Testimonials */}
            <section className="relative px-6 py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Cerita Sukses Dari Keluarga Indonesia 🏆
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Ribuan keluarga telah merasakan transformasi
                            pembelajaran
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {[
                            {
                                name: 'Bunda Siti Nurhaliza',
                                role: 'Ibu dari Adira (9 tahun)',
                                text: 'Luar biasa! Adira yang tadinya susah fokus belajar, sekarang bisa duduk berjam-jam bermain sambil belajar algoritma. Nilainya juga naik drastis!',
                                rating: 5,
                                image: '👩‍💼',
                            },
                            {
                                name: 'Pak Andi Wijaya',
                                role: 'Ayah dari Kenzo (8 tahun)',
                                text: 'Fitur AI-nya benar-benar personal. Kenzo belajar sesuai kecepatan dia sendiri. Sebagai developer, saya impressed dengan teknologinya.',
                                rating: 5,
                                image: '👨‍💻',
                            },
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                className="group"
                                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8 shadow-2xl group-hover:bg-white/20 transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="text-4xl">
                                            {testimonial.image}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-white/70 text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 text-yellow-400 fill-current"
                                                />
                                            )
                                        )}
                                    </div>

                                    <p className="text-white/90 text-lg leading-relaxed italic">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="relative px-6 py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            style={{
                                left: `${10 + i * 8}%`,
                                top: '20%',
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="relative z-10 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl mb-8"
                    >
                        🚀
                    </motion.div>

                    <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                        Mulai Revolusi Pembelajaran
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            Anak Anda Hari Ini!
                        </span>
                    </h2>

                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Bergabunglah dengan ribuan keluarga yang telah merasakan
                        transformasi pembelajaran yang luar biasa. Gratis untuk
                        bulan pertama!
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold px-12 py-6 text-xl shadow-2xl group"
                        >
                            <Link
                                href="/register"
                                className="flex items-center gap-3"
                            >
                                <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                Daftar Gratis Sekarang
                                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.p
                        className="text-white/60 text-sm mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        ✨ Tanpa kartu kredit • Cancel kapan saja • Jaminan 30
                        hari uang kembali
                    </motion.p>
                </motion.div>
            </section>
        </div>
    );
}
