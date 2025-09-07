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
                'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
                className
            )}
        >
            <Link href="/learn">
                <div className="pt-3 pl-4 pb-7 flex items-center gap-x-3">
                    <Image
                        src="/assets/algofun-logo.png"
                        alt="AlgoFun Logo"
                        width={140}
                        height={50} // ✅ height harus positif
                        priority // ✅ preload karena logo biasanya LCP
                    />
                </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem
                    label="BELAJAR"
                    href="/learn"
                    iconSrc="/assets/home.png"
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
