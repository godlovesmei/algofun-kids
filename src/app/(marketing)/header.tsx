'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
            className={`sticky top-0 z-50 h-20 w-full border-b px-4 transition-all duration-500
            ${
                isScrolled
                    ? 'border-sky-100 bg-white/80 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-gray-900/80'
                    : 'border-transparent bg-gradient-to-br from-yellow-50 via-sky-50 to-green-50 dark:bg-gray-900'
            }`}
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
                <Link
                    href="/"
                    className="rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
                >
                    <Image
                        src="/assets/algofun-logo.png"
                        alt="AlgoFun Logo"
                        width={154}
                        height={56}
                        priority
                    />
                </Link>

                <div className="flex items-center gap-x-3">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/welcome">Mulai</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
