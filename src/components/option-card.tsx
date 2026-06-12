import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface OptionCardProps {
    icon: React.ReactNode;
    title: string;
    isSelected?: boolean;
    onClick: () => void;
    className?: string;
}

const OptionCard: React.FC<OptionCardProps> = ({
    icon,
    title,
    isSelected = false,
    onClick,
    className = '',
}) => {
    return (
        <Button
            onClick={onClick}
            variant={isSelected ? 'primary' : 'default'}
            size="lg"
            aria-pressed={isSelected}
            className={cn(
                'h-auto min-h-14 w-full justify-start rounded-2xl px-4 py-3 text-left',
                className
            )}
        >
            <div className="text-2xl" aria-hidden="true">
                {icon}
            </div>
            <span
                className={cn(
                    'flex-1 text-base font-extrabold',
                    isSelected ? 'text-white' : 'text-slate-600'
                )}
            >
                {title}
            </span>
        </Button>
    );
};

export default OptionCard;
