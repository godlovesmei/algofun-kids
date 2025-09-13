import { Button } from '@/components/ui/button';
import React from 'react';

interface FooterProps {
    disabled?: boolean;
    onContinue: () => void;
}

export default function Footer({ disabled, onContinue }: FooterProps) {
    return (
        <footer className="w-full py-6 flex justify-end">
            <Button
                variant="secondary"
                size="lg"
                className={`text-white font-bold py-3 px-8 rounded-full text-lg shadow transition-all ${
                    disabled ? 'opacity-50 pointer-events-none' : ''
                }`}
                onClick={onContinue}
                disabled={disabled}
            >
                CONTINUE
            </Button>
        </footer>
    );
}
