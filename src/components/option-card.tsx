import React from 'react';
import { Button } from './ui/button';

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
            // kalau dipilih, pakai variant "primary", kalau nggak "default"
            variant={isSelected ? 'primary' : 'default'}
            size="lg"
            className={`w-full justify-start rounded-2xl ${className}`}
        >
            <div className="text-2xl">{icon}</div>
            <span className="font-medium text-gray-700 flex-1">{title}</span>
        </Button>
    );
};

export default OptionCard;
