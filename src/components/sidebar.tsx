import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SidebarItem } from '@/components/sidebar-item';

type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return (
        <div
            className={cn(
                'flex h-full flex-col border-r-2 border-sky-100 bg-white/95 px-4 shadow-[8px_0_30px_rgba(56,189,248,0.08)] backdrop-blur lg:fixed lg:left-0 lg:top-0 lg:w-[256px]',
                className
            )}
        >
            <Link
                href="/learn"
                className="rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
            >
                <div className="flex items-center gap-x-3 pb-6 pl-2 pt-4">
                    <Image
                        src="/assets/algofun-logo.png"
                        alt="AlgoFun Logo"
                        width={140}
                        height={50}
                        priority
                    />
                </div>
            </Link>

            <div className="flex flex-1 flex-col gap-y-2">
                <SidebarItem
                    label="BELAJAR"
                    href="/learn"
                    iconSrc="/assets/home.png"
                />
                <SidebarItem
                    label="LATIHAN"
                    href="/practice"
                    iconSrc="/assets/practice.png"
                />
                <SidebarItem
                    label="TANYA AI"
                    href="/ask-ai"
                    iconSrc="/assets/artificial-intelligence.png"
                />
                <SidebarItem
                    label="TOKO"
                    href="/shop"
                    iconSrc="/assets/shop.png"
                />
                <SidebarItem
                    label="PAPAN SKOR"
                    href="/leaderboard"
                    iconSrc="/assets/leaderboard.svg"
                />
                <SidebarItem
                    label="MISI"
                    href="/quest"
                    iconSrc="/assets/quest.svg"
                />
                <SidebarItem
                    label="PROFIL"
                    href="/profile"
                    iconSrc="/assets/profile.png"
                />
                <SidebarItem
                    label="LAINNYA"
                    href="/others"
                    iconSrc="/assets/other.png"
                />
            </div>
        </div>
    );
};
