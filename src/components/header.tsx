import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
    progress?: number;
    onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ progress = 0, onBack }) => {
    return (
        <div className="border-b-2 border-sky-100 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
            <div className="max-w-lg mx-auto flex items-center">
                {onBack && (
                    <Button
                        onClick={onBack}
                        variant="ghost"
                        size="icon"
                        aria-label="Kembali"
                        className="mr-3 rounded-full"
                    >
                        <ArrowLeft className="size-5 text-slate-500" />
                    </Button>
                )}

                <div className="flex-1">
                    <div
                        className="h-3 w-full overflow-hidden rounded-full bg-sky-100"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <div
                            className="h-full rounded-full bg-green-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
