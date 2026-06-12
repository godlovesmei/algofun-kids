import Image from 'next/image';
import { Crown, ShieldCheck, Sparkles } from 'lucide-react';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const dailyMissions = [
    {
        title: 'Dapatkan 10 XP',
        progress: 0,
        total: 10,
        imageSrc: '/assets/yellow-xp.svg',
        alt: 'XP',
    },
    {
        title: 'Benar 5 kali berturut-turut',
        progress: 0,
        total: 5,
        imageSrc: '/assets/brain-smile.png',
        alt: 'Streak',
    },
    {
        title: 'Tanya AI dalam 2 latihan',
        progress: 0,
        total: 2,
        imageSrc: '/assets/artificial-intelligence.png',
        alt: 'AI',
    },
];

const shopItems = [
    {
        title: 'Isi Ulang Hati',
        description:
            'Dapatkan hati penuh agar kamu tetap berani mencoba tantangan.',
        imageSrc: '/assets/heart.svg',
        alt: 'Hati',
        action: 'Penuh',
        disabled: true,
    },
    {
        title: 'Hati Tak Terbatas',
        description: 'Latihan lebih lama tanpa khawatir kehabisan hati.',
        imageSrc: '/assets/infinity-heart.png',
        alt: 'Hati tak terbatas',
        action: 'Coba Gratis',
    },
    {
        title: 'Boost Fokus',
        description:
            'Tambah energi belajar untuk menyelesaikan misi harian lebih cepat.',
        imageSrc: '/assets/gems.svg',
        alt: 'Gems',
        action: 'Tukar 200',
    },
];

const ShopPage = () => {
    return (
        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:gap-10">
            <StickyWrapper>
                <Card className="gap-5 border-2 border-sky-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-wide text-sky-500">
                                Liga Mingguan
                            </p>
                            <h2 className="text-xl font-extrabold text-slate-700">
                                Liga Perak
                            </h2>
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                            <Crown className="size-6" />
                        </div>
                    </div>
                    <div className="flex gap-3 rounded-2xl bg-sky-50 p-4">
                        <Image
                            src="/assets/leaderboard.svg"
                            alt="Liga perak"
                            width={44}
                            height={44}
                            className="shrink-0"
                        />
                        <p className="text-sm leading-6 text-slate-500">
                            Selesaikan satu pelajaran untuk mulai bersaing
                            dengan teman lain minggu ini.
                        </p>
                    </div>
                    <Button variant="primaryOutline" className="w-full">
                        Lihat Liga
                    </Button>
                </Card>

                <Card className="gap-5 border-2 border-sky-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-wide text-green-500">
                                Misi Harian
                            </p>
                            <h2 className="text-xl font-extrabold text-slate-700">
                                Target Hari Ini
                            </h2>
                        </div>
                        <Sparkles className="size-6 text-yellow-400" />
                    </div>

                    <div className="space-y-5">
                        {dailyMissions.map((mission) => (
                            <div
                                key={mission.title}
                                className="flex items-start gap-3"
                            >
                                <Image
                                    src={mission.imageSrc}
                                    alt={mission.alt}
                                    width={40}
                                    height={40}
                                    className="shrink-0 rounded-xl"
                                />
                                <div className="min-w-0 flex-1">
                                    <p className="font-extrabold leading-5 text-slate-700">
                                        {mission.title}
                                    </p>
                                    <Progress
                                        value={
                                            (mission.progress /
                                                mission.total) *
                                            100
                                        }
                                        difficulty="medium"
                                        className="mt-2 h-3 bg-slate-100"
                                    />
                                    <p className="mt-1 text-xs font-bold text-slate-400">
                                        {mission.progress} / {mission.total}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Button variant="default" className="w-full justify-center">
                    Hapus Iklan
                </Button>
            </StickyWrapper>

            <div className="min-w-0 flex-1 space-y-8">
                <section className="relative overflow-hidden rounded-[2rem] border-2 border-sky-100 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 p-6 text-white shadow-xl sm:p-8">
                    <div className="absolute right-6 top-6 hidden rounded-full bg-white/15 px-4 py-2 text-sm font-extrabold uppercase tracking-wide sm:block">
                        Super AlgoFun
                    </div>
                    <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                        <div className="flex size-24 shrink-0 items-center justify-center rounded-[1.75rem] bg-white/20 backdrop-blur">
                            <Image
                                src="/assets/market.png"
                                alt="Super AlgoFun"
                                width={76}
                                height={76}
                                className="drop-shadow-xl"
                            />
                        </div>
                        <div className="max-w-xl">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wide">
                                <ShieldCheck className="size-4" />
                                7 hari gratis
                            </div>
                            <h1 className="text-2xl font-extrabold leading-tight sm:text-4xl">
                                Buka fitur Super untuk latihan yang lebih
                                bebas.
                            </h1>
                            <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">
                                Nikmati hati tak terbatas, reward ekstra, dan
                                tantangan harian tanpa iklan.
                            </p>
                            <Button
                                variant="default"
                                className="mt-5 bg-white text-sky-600 hover:bg-sky-50"
                            >
                                Mulai 7 Hari Gratis
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border-2 border-sky-100 bg-white p-5 shadow-sm sm:p-6">
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-wide text-rose-500">
                                Toko
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-800">
                                Item Belajar
                            </h2>
                        </div>
                        <p className="text-sm font-bold text-slate-400">
                            Pakai gems untuk bantu petualanganmu.
                        </p>
                    </div>

                    <div className="divide-y-2 divide-sky-50">
                        {shopItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col gap-4 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.alt}
                                        width={64}
                                        height={64}
                                        className="size-16 shrink-0 rounded-2xl object-contain"
                                    />
                                    <div>
                                        <h3 className="text-lg font-extrabold text-slate-700">
                                            {item.title}
                                        </h3>
                                        <p className="max-w-xl text-sm leading-6 text-slate-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant={
                                        item.disabled
                                            ? 'default'
                                            : 'primaryOutline'
                                    }
                                    disabled={item.disabled}
                                    className="w-full sm:w-auto"
                                >
                                    {item.action}
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShopPage;
