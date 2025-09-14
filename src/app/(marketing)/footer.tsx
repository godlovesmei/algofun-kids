import Link from 'next/link';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest,
    FaXTwitter,
} from 'react-icons/fa6';
import { PiBookOpenTextLight } from 'react-icons/pi';

const Footer = () => {
    return (
        <footer className="bg-[rgb(125,197,238)] text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Section - Logo & App Buttons */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-white p-2 rounded-full shadow-md">
                            <PiBookOpenTextLight className="text-[rgb(125,197,238)] text-2xl" />
                        </div>
                        <h1 className="text-xl font-bold">AlgoFun Kids</h1>
                    </div>

                    {/* App Buttons */}
                    <div className="flex flex-col gap-2">
                        <Link
                            href="#"
                            className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-[rgb(125,197,238)] transition"
                        >
                            Get it on Google Play
                        </Link>
                        <Link
                            href="#"
                            className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-[rgb(125,197,238)] transition"
                        >
                            Download on the App Store
                        </Link>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="font-semibold mb-3">Contact</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="#">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="#">Press Kit</Link>
                        </li>
                        <li>
                            <Link href="#">Careers</Link>
                        </li>
                        <li>
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>

                {/* More */}
                <div>
                    <h2 className="font-semibold mb-3">More</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="#">Blog</Link>
                        </li>
                        <li>
                            <Link href="#">About</Link>
                        </li>
                        <li>
                            <Link href="#">FAQ</Link>
                        </li>
                        <li>
                            <Link href="#">Creators</Link>
                        </li>
                        <li>
                            <Link href="#">Educators Community</Link>
                        </li>
                    </ul>
                </div>

                {/* Learn */}
                <div>
                    <h2 className="font-semibold mb-3">Learn</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="#">Math</Link>
                        </li>
                        <li>
                            <Link href="#">Language Studies</Link>
                        </li>
                        <li>
                            <Link href="#">The World Around Us</Link>
                        </li>
                        <li>
                            <Link href="#">Social Skills</Link>
                        </li>
                        <li>
                            <Link href="#">Music & Arts</Link>
                        </li>
                        <li>
                            <Link href="#">Social Studies</Link>
                        </li>
                        <li>
                            <Link href="#">Therapy</Link>
                        </li>
                        <li>
                            <Link href="#">Early Childhood</Link>
                        </li>
                        <li>
                            <Link href="#">Stories</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Social Media */}
            <div className="mt-10 flex justify-center gap-6">
                <Link
                    href="#"
                    className="text-2xl hover:text-gray-200 transition"
                >
                    <FaFacebookF />
                </Link>
                <Link
                    href="#"
                    className="text-2xl hover:text-gray-200 transition"
                >
                    <FaInstagram />
                </Link>
                <Link
                    href="#"
                    className="text-2xl hover:text-gray-200 transition"
                >
                    <FaPinterest />
                </Link>
                <Link
                    href="#"
                    className="text-2xl hover:text-gray-200 transition"
                >
                    <FaXTwitter />
                </Link>
                <Link
                    href="#"
                    className="text-2xl hover:text-gray-200 transition"
                >
                    <FaTwitter />
                </Link>
            </div>

            {/* Copyright */}
            <p className="text-center text-xs mt-6 opacity-80">
                © {new Date().getFullYear()} AlgoFun Kids. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
