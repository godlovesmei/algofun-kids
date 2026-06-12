import { cn } from '@/lib/utils';

type Props = {
    children: React.ReactNode;
    className?: string;
};

export const StickyWrapper = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                'hidden w-[348px] shrink-0 self-start lg:block',
                className
            )}
        >
            <div className="sticky top-6 flex min-h-[calc(100vh-48px)] flex-col gap-y-4">
                {children}
            </div>
        </div>
    );
};
