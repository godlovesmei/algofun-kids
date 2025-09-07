import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { PiBookOpenTextLight } from 'react-icons/pi';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 mt-10 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
                {/* Logo & Tagline */}
                <div className="flex items-center gap-2">
                    <div className="bg-yellow-400 dark:bg-yellow-500 p-2 rounded-full shadow-md">
                        <PiBookOpenTextLight className="text-pink-600 dark:text-pink-400 text-2xl" />
                    </div>
                    <h1 className="text-lg font-bold text-pink-700 dark:text-pink-400">
                        AlgoFun Kids
                    </h1>
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
                    Belajar logika & algoritma jadi menyenangkan! 🌟
                </p>

                {/* Navigation Links */}
                <nav className="flex gap-4 flex-wrap justify-center text-sm font-medium text-pink-700 dark:text-pink-400">
                    <Link href="/" className="hover:underline">
                        Beranda
                    </Link>
                    <Link href="/games" className="hover:underline">
                        Permainan
                    </Link>
                    <Link href="/about" className="hover:underline">
                        Tentang Kami
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Kontak
                    </Link>
                </nav>

                {/* Social Media */}
                <div className="flex gap-3">
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-pink-50 dark:hover:bg-gray-700 transition"
                    >
                        <FaFacebookF className="text-blue-600 dark:text-blue-400" />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-pink-50 dark:hover:bg-gray-700 transition"
                    >
                        <FaInstagram className="text-pink-500 dark:text-pink-400" />
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-pink-50 dark:hover:bg-gray-700 transition"
                    >
                        <FaTwitter className="text-sky-400 dark:text-sky-300" />
                    </Link>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    © {new Date().getFullYear()} AlgoFun Kids. Semua Hak
                    Dilindungi.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
