'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

// Reusable Accordion Root
function Accordion({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & {
    className?: string;
}) {
    return (
        <AccordionPrimitive.Root
            data-slot="accordion"
            className={cn('w-full', className)}
            {...props}
        />
    );
}

// Reusable Accordion Item with better spacing and border
function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item> & {
    className?: string;
}) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn(
                'border-b last:border-b-0 bg-white/70 dark:bg-white/10 rounded-xl shadow-sm my-2 overflow-hidden transition-all',
                className
            )}
            {...props}
        />
    );
}

// Reusable Accordion Trigger with larger font and more padding
function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    className?: string;
}) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    'flex flex-1 items-center justify-between gap-4 py-5 px-6 text-left text-base md:text-lg font-semibold text-sky-700 dark:text-yellow-200 outline-none transition-all hover:bg-yellow-50 dark:hover:bg-sky-900 rounded-xl focus-visible:ring-2 focus-visible:ring-yellow-200 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon className="text-yellow-400 pointer-events-none size-6 shrink-0 transition-transform duration-300" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

// Reusable Accordion Content with larger font
function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & {
    className?: string;
}) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className={cn(
                'overflow-hidden text-base md:text-lg data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-white/60 dark:bg-white/5 px-6 pb-5 pt-2 text-sky-700 dark:text-yellow-100',
                className
            )}
            {...props}
        >
            {children}
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
