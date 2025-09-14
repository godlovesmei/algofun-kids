import React from 'react';
import { Button } from './ui/button';

interface HeaderProps {
    progress?: number;
    onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ progress = 0, onBack }) => {
    return (
        <div className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="max-w-lg mx-auto flex items-center">
                {onBack && (
                    <Button
                        onClick={onBack}
                        className="p-2 mr-3 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-gray-600"
                        >
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                )}

                <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-green-500 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
