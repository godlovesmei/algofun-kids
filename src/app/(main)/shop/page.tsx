import { StickyWrapper } from '@/components/sticky-wrapper';
import { Button } from '@/components/ui/button';
import { UserProgress } from '@/components/user-progress';
import Image from 'next/image';

const ShopPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[56px] px-10 pt-12 bg-white min-h-screen">
            {/* Sidebar, right side */}
            <StickyWrapper>
                {/* Liga Perak */}
                <div className="mt-8 bg-white rounded-2xl shadow-lg p-7 w-[370px]">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-[#6c757d] text-lg">
                            Liga Perak
                        </span>
                        <a
                            href="#"
                            className="text-sm text-[#43a1ff] font-bold hover:underline"
                        >
                            LIHAT LIGA
                        </a>
                    </div>
                    <div className="flex gap-3 mt-3 items-center">
                        <Image
                            src="/silver-league.png"
                            alt="Silver League"
                            className="w-10 h-10"
                            width={40}
                            height={40}
                        />
                        <span className="text-sm text-[#6c757d]">
                            Selesaikan satu pelajaran untuk bersaing dengan para
                            pelajar lain di papan skor minggu ini
                        </span>
                    </div>
                </div>
                {/* Misi Harian */}
                <div className="mt-6 bg-white rounded-2xl shadow-lg p-7 w-[370px]">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-[#6c757d] text-lg">
                            Misi Harian
                        </span>
                        <a
                            href="#"
                            className="text-sm text-[#43a1ff] font-bold hover:underline"
                        >
                            LIHAT SEMUA
                        </a>
                    </div>
                    <div className="space-y-6 mt-4">
                        <div className="flex items-center gap-4">
                            <Image
                                src="assets/yellow-xp.svg"
                                className="w-9 h-9"
                                alt="xp"
                                width={36}
                                height={36}
                            />
                            <div className="flex-1">
                                <div className="text-base font-bold text-[#444]">
                                    Dapatkan 10 XP
                                </div>
                                <div className="w-full h-3 rounded-full bg-[#ececec] mt-2 mb-2 overflow-hidden">
                                    <div
                                        className="h-3 rounded-full bg-[#ffd600]"
                                        style={{ width: '0%' }}
                                    ></div>
                                </div>
                                <div className="text-sm text-[#b2b2b2]">
                                    0 / 10
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/assets/brain-smile.png"
                                className="w-9 h-9"
                                alt="streak"
                                width={36}
                                height={36}
                            />
                            <div className="flex-1">
                                <div className="text-base font-bold text-[#444]">
                                    Benar 5 kali berturut-turut dalam 2
                                    pelajaran
                                </div>
                                <div className="w-full h-3 rounded-full bg-[#ececec] mt-2 mb-2 overflow-hidden">
                                    <div
                                        className="h-3 rounded-full bg-[#ffd600]"
                                        style={{ width: '0%' }}
                                    ></div>
                                </div>
                                <div className="text-sm text-[#b2b2b2]">
                                    0 / 2
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/icon-mic.png"
                                className="w-9 h-9"
                                alt="mic"
                                width={36}
                                height={36}
                            />
                            <div className="flex-1">
                                <div className="text-base font-bold text-[#444]">
                                    Bicara dalam 7 latihan
                                </div>
                                <div className="w-full h-3 rounded-full bg-[#ececec] mt-2 mb-2 overflow-hidden">
                                    <div
                                        className="h-3 rounded-full bg-[#ffd600]"
                                        style={{ width: '0%' }}
                                    ></div>
                                </div>
                                <div className="text-sm text-[#b2b2b2]">
                                    0 / 7
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hapus Iklan */}
                <Button className="mt-6 w-[370px] py-4 bg-white rounded-2xl border text-[#b6b6b6] font-bold text-base shadow">
                    HAPUS IKLAN
                </Button>
            </StickyWrapper>
            {/* Main content */}
            <div className="flex-1 max-w-3xl mx-auto">
                {/* Super Banner */}
                <div className="rounded-3xl p-8 bg-gradient-to-r from-[#25368f] to-[#7b2ff2] flex flex-col gap-4 mb-10 shadow-xl relative overflow-hidden">
                    <Image
                        src="/owl-super.png"
                        alt="Super Duolingo"
                        className="w-24 h-24 absolute -top-6 left-6"
                        width={70}
                        height={70}
                    />
                    <div className="ml-28">
                        <div className="text-white font-bold text-2xl mb-3 leading-tight">
                            Mulai uji coba gratis 1 minggu untuk menikmati
                            manfaat Super eksklusif
                        </div>
                        <Button className="bg-white text-[#25368f] px-6 py-3 rounded-xl font-bold shadow mt-2 text-lg">
                            MULAI 7 HARI GRATISKU
                        </Button>
                    </div>
                    <Image
                        src="/super-badge.png"
                        className="absolute top-6 right-7 w-20 h-10"
                        alt="super"
                        width={60}
                        height={30}
                    />
                </div>
                {/* Hati */}
                <div>
                    <div className="text-[#24292f] font-bold text-2xl mb-5">
                        Hati
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between py-6 border-t border-[#ececec]">
                            <div className="flex items-center gap-6">
                                <Image
                                    src="assets/heart.svg"
                                    alt="heart"
                                    className="w-16 h-16"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <div className="font-bold text-[#444] text-lg">
                                        Isi Ulang Hati
                                    </div>
                                    <div className="text-[#6c757d] text-base">
                                        Dapatkan hati penuh agar kamu tidak
                                        takut membuat kesalahan dalam pelajaran.
                                    </div>
                                </div>
                            </div>
                            <Button className="bg-[#ececec] text-[#b6b6b6] px-8 py-3 rounded-xl font-bold text-base">
                                PENUH
                            </Button>
                        </div>
                        <div className="flex items-center justify-between py-6 border-t border-[#ececec]">
                            <div className="flex items-center gap-6">
                                <Image
                                    src="/assets/infinity-heart.png"
                                    alt="infinite heart"
                                    className="w-16 h-16"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <div className="font-bold text-[#444] text-lg">
                                        Hati Tak Terbatas
                                    </div>
                                    <div className="text-[#6c757d] text-base">
                                        Takkan lagi kehabisan hati bersama
                                        Super!
                                    </div>
                                </div>
                            </div>
                            <Button className="bg-white border border-[#b6b6b6] text-[#7b2ff2] px-8 py-3 rounded-xl font-bold text-base">
                                COBA GRATIS
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Power-up */}
                <div className="mt-12">
                    <div className="text-[#24292f] font-bold text-2xl mb-5">
                        Power-up
                    </div>
                    <div className="flex items-center justify-between py-6 border-t border-[#ececec]">
                        <div className="flex items-center gap-6">
                            <Image
                                src="/streak-freeze.png"
                                alt="streak freeze"
                                className="w-16 h-16"
                                width={50}
                                height={50}
                            />
                            <div>
                                <div className="font-bold text-[#444] text-lg">
                                    Pembeku Runtunan
                                </div>
                                <div className="text-[#6c757d] text-base">
                                    Pembeku Runtunan mencegah runtunanmu hilang
                                    meskipun tidak beraktivitas selama sehari
                                    penuh.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                            <span className="text-sm font-bold text-[#b6b6b6] bg-[#ececec] px-4 py-1.5 rounded">
                                0 / 2 AKTIF
                            </span>
                            <Button className="flex gap-2 items-center text-[#43a1ff] bg-white border border-[#43a1ff] px-8 py-3 rounded-xl font-bold text-base">
                                TUKAR
                                <span className="flex gap-2 items-center">
                                    <Image
                                        src="/icon-gem.png"
                                        alt="gem"
                                        className="w-7 h-7"
                                        width={28}
                                        height={28}
                                    />
                                    200
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
