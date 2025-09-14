'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import DuolingoMascot from '@/components/mascot';
import OptionCard from '@/components/option-card';

const HomePage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = [
        { id: 'fun', icon: '🎉', title: 'Just for fun' },
        { id: 'travel', icon: '✈️', title: 'Prepare for travel' },
        { id: 'career', icon: '💼', title: 'Boost my career' },
        { id: 'education', icon: '📚', title: 'Support my education' },
        { id: 'connect', icon: '👥', title: 'Connect with people' },
        { id: 'productive', icon: '🧠', title: 'Spend time productively' },
        { id: 'other', icon: '💬', title: 'Other' },
    ];

    const handleOptionClick = (optionId: string) => {
        setSelectedOption(optionId);
    };

    const handleContinue = () => {
        if (selectedOption) {
            console.log('Selected option:', selectedOption);
            // Handle continue logic here
        }
    };

    const handleBack = () => {
        console.log('Back button clicked');
        // Handle back navigation
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
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
