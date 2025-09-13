'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive uppercase tracking-wide",
    {
        variants: {
            variant: {
                default:
                    'bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500',
                primary:
                    'bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0',
                primaryOutline: 'bg-white text-sky-500 hover:bg-slate-100',
                secondary:
                    'bg-green-500 text-primary-foreground hover:bg-green-500/90 border-green-600 border-b-4 active:border-b-0',
                secondaryOutline: 'bg-white text-green-500 hover:bg-slate-100',
                danger: 'bg-rose-500 text-primary-foreground hover:bg-rose-500/90 border-rose-700 border-b-4 active:border-b-0',
                dangerOutline: 'bg-white text-rose-500 hover:bg-slate-100',
                super: 'bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-700 border-b-4 active:border-b-0',
                superOutline: 'bg-white text-indigo-500 hover:bg-slate-100',
                ghost: 'bg-transparent text-slate-500 hover:bg-slate-100 border-transparent border-0',
                sidebar:
                    'bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100 transition-none',
                sidebarOutline:
                    'bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-11 px-4 py-2 has-[>svg]:px-3',
                sm: 'h-9 px-3 has-[>svg]:px-2.5',
                lg: 'h-12 px-8 has-[>svg]:px-4',
                icon: 'h-10 w-10',
                rounded: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

// Type definition untuk props Button
interface ButtonProps
    extends React.ComponentProps<'button'>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    playSound?: boolean;
    soundUrl?: string; // Opsi untuk custom sound
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            playSound = true,
            soundUrl = '/sounds/click.wav',
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button';

        // Ref untuk audio
        const audioRef = React.useRef<HTMLAudioElement | null>(null);

        // Initialize audio
        React.useEffect(() => {
            if (playSound && typeof window !== 'undefined') {
                audioRef.current = new Audio(soundUrl);
                audioRef.current.preload = 'auto';
                audioRef.current.volume = 0.3; // Volume lebih rendah agar tidak terlalu keras

                // Optional: preload audio
                audioRef.current.load();
            }

            // Cleanup
            return () => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current = null;
                }
            };
        }, [playSound, soundUrl]);

        const handleClick = async (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
            // Play sound jika enabled
            if (playSound && audioRef.current) {
                try {
                    // Reset ke awal dan play
                    audioRef.current.currentTime = 0;
                    const playPromise = audioRef.current.play();

                    // Handle promise (browser modern mengembalikan promise)
                    if (playPromise !== undefined) {
                        await playPromise.catch((error) => {
                            // Ignore autoplay policy errors
                            console.warn('Audio play failed:', error);
                        });
                    }
                } catch (error) {
                    // Ignore errors (misal user belum interaksi dengan halaman)
                    console.warn('Audio play error:', error);
                }
            }

            // Call original onClick handler
            if (props.onClick) {
                props.onClick(e);
            }
        };

        return (
            <Comp
                ref={ref}
                data-slot="button"
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
                onClick={handleClick}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
