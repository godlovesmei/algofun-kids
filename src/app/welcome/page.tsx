'use client';

import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Contoh pertanyaan & opsi
const question = {
    avatar: '/duo.png', // ganti ke asset kamu
    text: 'Bagaimana kamu mendengar tentang aplikasi ini?',
    options: [
        { icon: '📺', label: 'TV' },
        { icon: '🧑‍🤝‍🧑', label: 'Teman/Keluarga' },
        { icon: '🎶', label: 'TikTok' },
        { icon: '📸', label: 'Instagram/Facebook' },
        { icon: '▶️', label: 'YouTube' },
        { icon: '📰', label: 'Artikel/Blog' },
        { icon: '🔍', label: 'Google Search' },
        { icon: '…', label: 'Lainnya' },
    ],
};

export default function OnboardingPage() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="flex flex-col flex-1">
            <Header step={1} total={1} />
            <div className="flex flex-col items-center flex-1 justify-center">
                <Image
                    src={question.avatar}
                    alt="Avatar"
                    width={80}
                    height={80}
                    className="rounded-full mb-4 border-4 border-green-300 bg-white"
                />
                <div className="text-xl font-semibold mb-8 bg-white rounded-lg py-2 px-4 border inline-block shadow-sm">
                    {question.text}
                </div>
                <div className="grid grid-cols-2 gap-4 w-full max-w-xl mb-10">
                    {question.options.map((opt, idx) => (
                        <Button
                            key={idx}
                            variant={selected === idx ? 'primary' : 'default'}
                            size="lg"
                            className="justify-start"
                            onClick={() => setSelected(idx)}
                        >
                            <span className="text-2xl">{opt.icon}</span>
                            <span>{opt.label}</span>
                        </Button>
                    ))}
                </div>
            </div>
            <Footer
                disabled={selected === null}
                onContinue={() => alert('Lanjut!')}
            />
        </div>
    );
}
