import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
    ChevronRight,
    ChevronLeft,
    BookOpen,
    Brain,
    Gamepad2,
} from 'lucide-react';

const initialAnswers = {
    grade: '',
    experience: '',
    learningStyle: '',
    interests: '',
    goals: '',
};

type QuestionId = keyof typeof initialAnswers;

type Question = {
    id: QuestionId;
    title: string;
    description: string;
    icon: React.ReactNode;
    options: {
        value: string;
        label: string;
    }[];
};

const OnboardingFlow = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState(initialAnswers);

    const questions: Question[] = [
        {
            id: 'grade',
            title: 'Kelas Berapa Kamu Sekarang?',
            description:
                'Ini membantu kami menyesuaikan materi dengan tingkat pemahaman kamu',
            icon: <BookOpen className="w-6 h-6" />,
            options: [
                { value: 'grade-1', label: 'Kelas 1' },
                { value: 'grade-2', label: 'Kelas 2' },
                { value: 'grade-3', label: 'Kelas 3' },
                { value: 'grade-4', label: 'Kelas 4' },
                { value: 'grade-5', label: 'Kelas 5' },
                { value: 'grade-6', label: 'Kelas 6' },
            ],
        },
        {
            id: 'experience',
            title: 'Apakah Kamu Pernah Belajar Tentang Algoritma?',
            description:
                'Tidak apa-apa jika belum pernah, kami akan mulai dari dasar!',
            icon: <Brain className="w-6 h-6" />,
            options: [
                { value: 'beginner', label: 'Belum pernah sama sekali' },
                { value: 'little', label: 'Pernah sedikit' },
                { value: 'some', label: 'Sudah lumayan tahu' },
                { value: 'good', label: 'Sudah cukup paham' },
            ],
        },
        {
            id: 'learningStyle',
            title: 'Bagaimana Cara Belajar Favorit Kamu?',
            description: 'Pilih yang paling kamu suka untuk belajar hal baru',
            icon: <Gamepad2 className="w-6 h-6" />,
            options: [
                { value: 'visual', label: 'Melihat gambar dan diagram' },
                {
                    value: 'interactive',
                    label: 'Bermain game dan aktivitas interaktif',
                },
                { value: 'story', label: 'Mendengar cerita dan contoh' },
                { value: 'practice', label: 'Langsung praktek dan mencoba' },
            ],
        },
        {
            id: 'interests',
            title: 'Apa yang Paling Kamu Suka?',
            description:
                'Kami akan menyesuaikan contoh-contoh dengan minat kamu',
            icon: <BookOpen className="w-6 h-6" />,
            options: [
                { value: 'animals', label: 'Hewan dan alam' },
                { value: 'sports', label: 'Olahraga dan permainan' },
                { value: 'art', label: 'Seni dan kreativitas' },
                { value: 'science', label: 'Sains dan eksperimen' },
                { value: 'adventure', label: 'Petualangan dan cerita' },
            ],
        },
        {
            id: 'goals',
            title: 'Apa yang Ingin Kamu Capai?',
            description:
                'Tujuan belajar kamu akan membantu kami memberikan materi yang tepat',
            icon: <Brain className="w-6 h-6" />,
            options: [
                {
                    value: 'problem-solving',
                    label: 'Belajar memecahkan masalah',
                },
                {
                    value: 'logical-thinking',
                    label: 'Meningkatkan cara berpikir logis',
                },
                {
                    value: 'programming-basics',
                    label: 'Dasar-dasar pemrograman',
                },
                { value: 'math-skills', label: 'Kemampuan matematika' },
                { value: 'creativity', label: 'Kreativitas dalam berpikir' },
            ],
        },
    ];

    const handleAnswerChange = (questionId: QuestionId, value: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleComplete();
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleComplete = () => {
        // Here you would typically send the answers to your backend
        console.log('Onboarding completed with answers:', answers);
        alert(
            'Selamat! Profil belajar kamu sudah siap. Mari mulai petualangan belajar algoritma!'
        );
    };

    const currentQuestion = questions[currentStep];
    const progress = ((currentStep + 1) / questions.length) * 100;
    const canProceed = answers[currentQuestion.id] !== '';

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Selamat Datang di Aplikasi Belajar Algoritma!
                    </h1>
                    <p className="text-gray-600">
                        Mari kenalan dulu supaya kami bisa memberikan materi
                        yang tepat untuk kamu
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>
                            Langkah {currentStep + 1} dari {questions.length}
                        </span>
                        <span>{Math.round(progress)}% selesai</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                </div>

                {/* Question Card */}
                <Card className="mb-8 shadow-lg">
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                {currentQuestion.icon}
                            </div>
                            <div>
                                <CardTitle className="text-xl text-gray-900">
                                    {currentQuestion.title}
                                </CardTitle>
                            </div>
                        </div>
                        <CardDescription className="text-gray-600">
                            {currentQuestion.description}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <RadioGroup
                            value={answers[currentQuestion.id]}
                            onValueChange={(value) =>
                                handleAnswerChange(currentQuestion.id, value)
                            }
                            className="space-y-3"
                        >
                            {currentQuestion.options.map((option) => (
                                <div
                                    key={option.value}
                                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                                    onClick={() =>
                                        handleAnswerChange(
                                            currentQuestion.id,
                                            option.value
                                        )
                                    }
                                >
                                    <RadioGroupItem
                                        value={option.value}
                                        id={option.value}
                                    />
                                    <Label
                                        htmlFor={option.value}
                                        className="flex-1 cursor-pointer text-gray-800"
                                    >
                                        {option.label}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </CardContent>

                    <CardFooter className="flex justify-between pt-6">
                        <Button
                            variant="default"
                            onClick={handlePrevious}
                            disabled={currentStep === 0}
                            className="flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Sebelumnya
                        </Button>

                        <Button
                            onClick={handleNext}
                            disabled={!canProceed}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                        >
                            {currentStep === questions.length - 1
                                ? 'Selesai'
                                : 'Selanjutnya'}
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </CardFooter>
                </Card>

                {/* Fun Encouragement */}
                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        🚀 Siap-siap untuk petualangan seru belajar algoritma
                        dan logika!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OnboardingFlow;
