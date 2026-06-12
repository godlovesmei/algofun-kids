import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
    title: string;
};

export const Header = ({ title }: Props) => {
    return (
        <div className="sticky top-16 z-40 mb-5 flex items-center justify-between rounded-3xl border-2 border-sky-100 bg-white/95 px-3 py-3 text-slate-500 shadow-sm backdrop-blur lg:top-6">
            <Link href="/courses">
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Kembali ke daftar materi"
                >
                    <ArrowLeft className="h-5 w-5 stroke-2 text-slate-400" />
                </Button>
            </Link>
            <h1 className="text-lg font-extrabold text-slate-600">{title}</h1>
            <div className="h-10 w-10" aria-hidden="true" />
        </div>
    );
};
