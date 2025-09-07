'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Link from 'next/link';

export default function Home() {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch('/assets/maskot-algofun.json')
            .then((res) => res.json())
            .then(setAnimationData)
            .catch(console.error);
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
            {/* Hero Section */}
            <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-16 px-6 py-20 lg:flex-row">
                {/* Lottie Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="h-80 w-80"
                >
                    {animationData && (
                        <Lottie animationData={animationData} loop />
                    )}
                </motion.div>

                {/* Text Section */}
                <div className="text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-bold md:text-6xl"
                    >
                        Belajar Logika & Algoritma Jadi Seru 🚀
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
                    >
                        Aplikasi berbasis AI untuk mengasah kemampuan logika dan
                        algoritma anak SD secara interaktif, menyenangkan, dan
                        penuh warna.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
                    >
                        <Button asChild variant="secondary" size="lg">
                            <Link href="/learn">Mulai</Link>
                        </Button>
                        <Button asChild variant="default" size="lg">
                            <Link href="/login">Aku Sudah Punya Akun</Link>
                        </Button>
                    </motion.div>
                </div>
            </main>

            {/* Features Section */}
            <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 text-center text-3xl font-bold">
                        Kenapa Memilih AlgoFun?
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Interaktif',
                                desc: 'Belajar logika & algoritma dengan cara yang menyenangkan.',
                            },
                            {
                                title: 'Berbasis AI',
                                desc: 'Sistem pintar yang menyesuaikan pembelajaran sesuai kemampuan anak.',
                            },
                            {
                                title: 'Aman untuk Anak',
                                desc: 'Konten terkurasi khusus untuk anak SD.',
                            },
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="rounded-lg bg-white p-6 shadow dark:bg-gray-800"
                            >
                                <h3 className="mb-2 text-xl font-semibold">
                                    {f.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <h2 className="mb-12 text-center text-3xl font-bold">
                        Apa Kata Mereka?
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {[
                            {
                                name: 'Bunda Siti',
                                text: 'Anak saya jadi suka belajar logika, padahal dulu gampang bosan.',
                            },
                            {
                                name: 'Pak Andi',
                                text: 'Fitur AI-nya bikin pembelajaran terasa personal banget.',
                            },
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="rounded-lg bg-white p-6 shadow dark:bg-gray-800"
                            >
                                <p className="mb-4 text-gray-700 dark:text-gray-300">
                                    “{t.text}”
                                </p>
                                <span className="text-sm text-gray-500">
                                    — {t.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-teal-600 px-6 py-20 text-center text-white">
                <h2 className="mb-6 text-3xl font-bold">
                    Mulai Perjalanan Belajar Anak Anda
                </h2>
                <p className="mx-auto mb-8 max-w-2xl">
                    Daftarkan anak Anda sekarang dan temukan cara belajar logika
                    & algoritma yang menyenangkan.
                </p>
                <Link
                    href="/register"
                    className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 shadow hover:bg-gray-100"
                >
                    Daftar Sekarang
                </Link>
            </section>
        </div>
    ); // end return
} // ✅ kurung kurawal penutup komponen
