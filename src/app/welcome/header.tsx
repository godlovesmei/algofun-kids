import { Button } from '@/components/ui/button';
import { ArrowBigLeft } from 'lucide-react';
import React from 'react';

interface HeaderProps {
    step: number;
    total: number;
    onBack?: () => void;
}

export default function Header({ step, total, onBack }: HeaderProps) {
    return (
        <header className="w-full flex flex-col gap-4 pt-8 pb-4">
            <div className="flex items-center gap-2">
                {onBack && (
                    <Button
                        variant="secondary"
                        onClick={onBack}
                        className="mr-2 text-gray-500 hover:text-green-600 px-2 py-1 rounded-full text-lg"
                    >
                        <ArrowBigLeft />
                    </Button>
                )}
                <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-400 h-2 rounded-full transition-all"
                            style={{ width: `${(step / total) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
