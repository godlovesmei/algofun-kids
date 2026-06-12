'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <Button
            variant={active ? 'sidebarOutline' : 'sidebar'}
            className="h-[52px] justify-start rounded-2xl px-3 text-[13px] focus-visible:ring-sky-200"
            asChild
        >
            <Link href={href} aria-current={active ? 'page' : undefined}>
                <Image
                    src={iconSrc}
                    alt={label}
                    className="mr-4"
                    height={32}
                    width={32}
                />
                {label}
            </Link>
        </Button>
    );
};
