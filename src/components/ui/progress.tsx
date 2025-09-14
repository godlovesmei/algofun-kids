'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

type Difficulty = 'easy' | 'medium' | 'hard';

interface ProgressProps
    extends React.ComponentProps<typeof ProgressPrimitive.Root> {
    value?: number;
    difficulty?: Difficulty;
}

function getDifficultyColor(difficulty?: Difficulty) {
    switch (difficulty) {
        case 'easy':
            return 'bg-green-500';
        case 'medium':
            return 'bg-orange-400';
        case 'hard':
            return 'bg-red-500';
        default:
            return 'bg-primary';
    }
}

function Progress({ className, value, difficulty, ...props }: ProgressProps) {
    const indicatorColor = getDifficultyColor(difficulty);

    return (
        <ProgressPrimitive.Root
            data-slot="progress"
            className={cn(
                'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                data-slot="progress-indicator"
                className={cn(
                    indicatorColor,
                    'h-full w-full flex-1 transition-all'
                )}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress };
