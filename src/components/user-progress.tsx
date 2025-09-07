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
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image
                        src="/assets/yellow-xp.svg"
                        height={22}
                        width={22}
                        alt="Points"
                        className="mr-2"
                    />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-blue-500">
                    <Image
                        src="/assets/gems.svg"
                        height={25}
                        width={25}
                        alt="Gems"
                        className="mr-2"
                    />
                    {gems}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image
                        src="/assets/heart.svg"
                        height={30}
                        width={30}
                        alt="Hearts"
                        className="mr-2"
                    />
                    {hearts}
                </Button>
            </Link>
        </div>
    );
};
