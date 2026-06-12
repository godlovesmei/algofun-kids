import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

type Props = {
    activeCourse: { imageSrc: string; title: string };
    gems: number;
    hearts: number;
    points: number;
};

export const UserProgress = ({ activeCourse, points, gems, hearts }: Props) => {
    return (
        <div className="flex w-full items-center justify-end gap-1 sm:gap-2">
            <Button variant="ghost" asChild className="h-11 px-2">
                <Link href="/courses" aria-label="Pilih materi">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-xl border-2 border-sky-100 bg-white p-1"
                        width={32}
                        height={32}
                    />
                </Link>
            </Button>
            <Button variant="ghost" asChild className="h-11 px-2 text-orange-500">
                <Link href="/shop" aria-label={`${points} poin`}>
                    <Image
                        src="/assets/yellow-xp.svg"
                        height={22}
                        width={22}
                        alt="Points"
                        className="mr-1 sm:mr-2"
                    />
                    <span>{points}</span>
                </Link>
            </Button>
            <Button variant="ghost" asChild className="h-11 px-2 text-blue-500">
                <Link href="/shop" aria-label={`${gems} gems`}>
                    <Image
                        src="/assets/gems.svg"
                        height={25}
                        width={25}
                        alt="Gems"
                        className="mr-1 sm:mr-2"
                    />
                    <span>{gems}</span>
                </Link>
            </Button>
            <Button variant="ghost" asChild className="h-11 px-2 text-rose-500">
                <Link href="/shop" aria-label={`${hearts} hati`}>
                    <Image
                        src="/assets/heart.svg"
                        height={30}
                        width={30}
                        alt="Hearts"
                        className="mr-1 sm:mr-2"
                    />
                    <span>{hearts}</span>
                </Link>
            </Button>
        </div>
    );
};
