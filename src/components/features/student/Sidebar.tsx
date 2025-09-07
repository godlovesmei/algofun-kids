import Link from 'next/link';
import {
    FaHome,
    FaVolumeUp,
    FaTrophy,
    FaTasks,
    FaStore,
    FaUser,
    FaEllipsisH,
} from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';

export default function LearnSidebar() {
    const menuItems = [
        { icon: <FaHome />, label: 'Belajar', href: '/learn' },
        { icon: <FaVolumeUp />, label: 'Bunyi', href: '/learn/bunyi' },
        {
            icon: <GiWeightLiftingUp />,
            label: 'Latihan',
            href: '/learn/latihan',
        },
        { icon: <FaTrophy />, label: 'Papan Skor', href: '/score' },
        { icon: <FaTasks />, label: 'Misi', href: '/misi' },
        { icon: <FaStore />, label: 'Toko', href: '/toko' },
        { icon: <FaUser />, label: 'Profil', href: '/profile' },
        { icon: <FaEllipsisH />, label: 'Lainnya', href: '/more' },
    ];

    return (
        <aside className="w-20 md:w-56 bg-white border-r flex flex-col py-6 px-2 md:px-4">
            {/* Logo */}
            <div className="mb-8 flex justify-center md:justify-start px-2">
                <h1 className="text-green-600 font-bold text-lg">duolingo</h1>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-4">
                {menuItems.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className="flex items-center gap-3 text-gray-700 hover:bg-blue-100 rounded-lg px-3 py-2 transition"
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="hidden md:inline text-sm font-medium">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
