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
        <div className="fixed bottom-0 left-0 right-0 border-t-2 border-sky-100 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-lg space-y-4 px-6 py-5">
                {description && (
                    <p className="text-center text-base leading-relaxed text-slate-600">
                        {description}
                    </p>
                )}

                <div className="flex">
                    <Button
                        onClick={onContinue}
                        disabled={isDisabled}
                        variant={isDisabled ? 'default' : 'secondary'}
                        size="lg"
                        className="ml-auto h-14 px-8 text-lg shadow-lg"
                    >
                        LANJUT
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
