'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import DuolingoMascot from '@/components/mascot';
import OptionCard from '@/components/option-card';

const HomePage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = [
        { id: 'fun', icon: '🎉', title: 'Belajar sambil bermain' },
        { id: 'school', icon: '📚', title: 'Bantu pelajaran sekolah' },
        { id: 'logic', icon: '🧠', title: 'Melatih logika dan fokus' },
        { id: 'challenge', icon: '🎯', title: 'Suka tantangan baru' },
        { id: 'parent', icon: '👥', title: 'Belajar bersama orang tua' },
        { id: 'productive', icon: '⭐', title: 'Mengisi waktu dengan seru' },
        { id: 'other', icon: '💬', title: 'Alasan lainnya' },
    ];

    const handleOptionClick = (optionId: string) => {
        setSelectedOption(optionId);
    };

    const handleContinue = () => {
        if (selectedOption) {
            console.log('Selected option:', selectedOption);
        }
    };

    const handleBack = () => {
        console.log('Back button clicked');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-sky-50 to-green-50 pb-28">
            <Header progress={25} onBack={handleBack} />

            <div className="max-w-lg mx-auto px-4 py-8">
                <DuolingoMascot />

                <div className="space-y-3">
                    {options.map((option) => (
                        <OptionCard
                            key={option.id}
                            icon={option.icon}
                            title={option.title}
                            isSelected={selectedOption === option.id}
                            onClick={() => handleOptionClick(option.id)}
                            className={
                                option.id === 'career'
                                    ? 'bg-blue-50 border-blue-200'
                                    : ''
                            }
                        />
                    ))}
                </div>
            </div>

            <Footer onContinue={handleContinue} isDisabled={!selectedOption} />
        </div>
    );
};

export default HomePage;
