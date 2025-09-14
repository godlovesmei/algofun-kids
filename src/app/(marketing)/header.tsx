'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 h-20 w-full px-4 transition-all duration-500 
            ${
                isScrolled
                    ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md'
                    : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:bg-gray-800'
            }`}
        >
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image
                        src="/assets/algofun-logo.png"
                        alt="AlgoFun Logo"
                        width={150}
                        height={150}
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-x-4">
                    <Button size="lg" variant="secondary">
                        Mulai
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
