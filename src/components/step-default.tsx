import { ChevronRight, Brain } from 'lucide-react';

type WelcomeStepProps = {
    onNext: () => void;
};

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center animate-bounce-in">
                <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center mb-4 animate-pulse">
                        <Brain className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Halo, Penjelajah Pintar! 🚀
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Aku adalah{' '}
                        <span className="font-bold text-purple-600">
                            LogicBot
                        </span>
                        , teman AI yang akan membantu kamu belajar logika dan
                        algoritma dengan seru!
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-6">
                    <p className="text-sm text-gray-700">
                        ✨ Kita akan bermain puzzle
                        <br />
                        🧠 Belajar berpikir sistematis
                        <br />
                        🎯 Menyelesaikan tantangan seru!
                    </p>
                </div>

                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full"
                >
                    Ayo Mulai Petualangan!{' '}
                    <ChevronRight className="inline w-5 h-5 ml-2" />
                </button>
            </div>
        </div>
    );
}
