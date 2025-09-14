import React from 'react';
import { Button } from './ui/button';

interface FooterProps {
    onContinue: () => void;
    isDisabled?: boolean;
    description?: string;
}

const Footer: React.FC<FooterProps> = ({
    onContinue,
    isDisabled = false,
    description,
}) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="max-w-lg mx-auto px-6 py-8 space-y-6">
                {/* Penjelasan */}
                {description && (
                    <p className="text-base text-gray-700 text-center leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Tombol */}
                <div className="flex">
                    <Button
                        onClick={onContinue}
                        disabled={isDisabled}
                        variant={isDisabled ? 'default' : 'secondary'}
                        size="lg"
                        className="ml-auto h-16 px-10 text-xl rounded-2xl shadow-lg"
                    >
                        CONTINUE
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
