import Link from 'next/link';
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from 'react-icons/fa6';
import { PiBookOpenTextLight } from 'react-icons/pi';

const footerColumns = [
    {
        title: 'Produk',
        links: ['Belajar', 'Latihan', 'Tanya AI', 'Toko'],
    },
    {
        title: 'Dukungan',
        links: ['Pusat Bantuan', 'Keamanan Anak', 'Privasi', 'Kontak'],
    },
    {
        title: 'Komunitas',
        links: ['Untuk Orang Tua', 'Untuk Guru', 'Cerita Pengguna', 'FAQ'],
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-sky-100 bg-sky-500 px-6 py-10 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-[1.3fr_repeat(3,1fr)]">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-white p-2 shadow-md">
                            <PiBookOpenTextLight className="text-[rgb(125,197,238)] text-2xl" />
                        </div>
                        <h1 className="text-xl font-bold">AlgoFun Kids</h1>
                    </div>
                    <p className="max-w-xs text-sm leading-6 text-white/85">
                        Teman belajar algoritma untuk anak SD dengan tantangan
                        logika, hadiah kecil, dan pengalaman visual yang
                        menyenangkan.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Link
                            href="/welcome"
                            className="rounded-xl border border-white px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-sky-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                        >
                            Mulai Belajar
                        </Link>
                        <Link
                            href="/login"
                            className="rounded-xl border border-white/70 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-sky-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                        >
                            Masuk
                        </Link>
                    </div>
                </div>

                {footerColumns.map((column) => (
                    <div key={column.title}>
                        <h2 className="mb-3 font-extrabold">{column.title}</h2>
                        <ul className="space-y-2 text-sm text-white/85">
                            {column.links.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex justify-center gap-4">
                <Link
                    href="#"
                    aria-label="Facebook AlgoFun"
                    className="rounded-full p-2 text-2xl transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                    <FaFacebookF />
                </Link>
                <Link
                    href="#"
                    aria-label="Instagram AlgoFun"
                    className="rounded-full p-2 text-2xl transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                    <FaInstagram />
                </Link>
                <Link
                    href="#"
                    aria-label="X AlgoFun"
                    className="rounded-full p-2 text-2xl transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                    <FaXTwitter />
                </Link>
            </div>

            <p className="mt-6 text-center text-xs text-white/75">
                © {new Date().getFullYear()} AlgoFun Kids. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
