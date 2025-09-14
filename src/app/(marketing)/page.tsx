'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { Sparkles, Play } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
    const [animationData, setAnimationData] = useState<any | null>(null);
    const [accordionAnim, setAccordionAnim] = useState<any | null>(null);
    const [mousePosition, setMousePosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });

    useEffect(() => {
        fetch('/assets/maskot-algofun.json')
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch(console.error);
        fetch('/assets/penguin-animation.json')
            .then((res) => res.json())
            .then((data) => setAccordionAnim(data))
            .catch(console.error);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: globalThis.MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-sky-50 to-green-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle colored blobs for a more playful vibe */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-200/30 via-pink-200/20 to-sky-300/40 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 20,
                        y: mousePosition.y * 20,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-green-200/40 via-sky-300/30 to-blue-200/40 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * -15,
                        y: mousePosition.y * -15,
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 via-sky-200/20 to-green-200/20 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 10,
                        y: mousePosition.y * 13,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            {/* Hero Section */}
            <main className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-16 px-6 py-28 lg:flex-row lg:py-20">
                {/* Maskot Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="relative"
                >
                    <motion.div
                        animate={floatingAnimation}
                        className="h-80 w-80 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-200/40 via-yellow-200/40 to-green-200/40 rounded-full blur-2xl animate-pulse"></div>
                        {animationData && (
                            <Lottie
                                animationData={animationData}
                                loop
                                className="relative z-10 drop-shadow-2xl"
                            />
                        )}
                    </motion.div>
                </motion.div>

                {/* Hero Text */}
                <motion.div
                    className="text-center lg:text-left lg:flex-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-sky-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full text-sm font-medium text-sky-800 dark:text-blue-300 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />{' '}
                        Platform Belajar Algoritma Kids{' '}
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-500 via-sky-600 to-green-500 bg-clip-text text-transparent leading-tight drop-shadow"
                    >
                        Belajar Algoritma <br />
                        <span className="text-sky-400">Jadi Seru! 🚀</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-6 max-w-2xl text-xl text-sky-700 dark:text-gray-200 leading-relaxed"
                    >
                        Revolusi pembelajaran logika & algoritma dengan AI yang
                        <span className="font-semibold text-sky-600 dark:text-blue-400">
                            {' '}
                            interaktif
                        </span>
                        ,
                        <span className="font-semibold text-green-600 dark:text-cyan-400">
                            {' '}
                            menyenangkan
                        </span>
                        , dan
                        <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                            {' '}
                            penuh warna
                        </span>{' '}
                        untuk anak SD masa depan.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
                    >
                        <Button
                            asChild
                            variant="secondary"
                            size="lg"
                            className="group relative overflow-hidden px-8 py-6 text-lg font-bold shadow-xl bg-gradient-to-r from-yellow-300/80 to-sky-300/80 text-sky-900 hover:from-yellow-200 hover:to-sky-200"
                        >
                            <Link
                                href="/welcome"
                                className="flex items-center gap-3"
                            >
                                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Mulai
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="default"
                            size="lg"
                            className="px-8 py-6 text-lg font-bold group bg-white/90 text-sky-800 hover:bg-yellow-100"
                        >
                            <Link
                                href="/login"
                                className="flex items-center gap-2"
                            >
                                Aku Sudah Punya Akun
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </main>

            {/* CTA Section */}
            <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-yellow-100 via-green-50 to-sky-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 text-center overflow-hidden border-t border-yellow-200/40">
                <motion.div
                    className="relative z-10 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-sky-700 dark:text-white mb-6 leading-tight">
                        Mulai Revolusi Pembelajaran
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-sky-400 bg-clip-text text-transparent">
                            Anak Anda Hari Ini!
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-sky-700/80 dark:text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Bergabunglah dengan ribuan keluarga yang telah merasakan
                        transformasi pembelajaran yang seru dan penuh warna.
                        Gratis untuk bulan pertama!
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            variant="sidebarOutline"
                            className="overflow-hidden font-bold text-xl bg-gradient-to-r from-yellow-300/80 to-sky-300/80 text-sky-900 hover:from-yellow-200 hover:to-sky-200 border-none shadow-xl"
                        >
                            <Link
                                href="/register"
                                className="flex items-center gap-3"
                            >
                                Daftar Gratis Sekarang
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Accordion + Animation Section */}
                <div className="relative z-10 max-w-7xl mx-auto mt-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">
                    {/* Accordion Left */}
                    <div className="flex-1 w-full max-w-xl">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Apa itu Algofun?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Algofun adalah platform pembelajaran logika
                                    dan algoritma berbasis AI yang dirancang
                                    khusus untuk anak SD, agar belajar jadi
                                    lebih interaktif dan menyenangkan.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    Untuk siapa aplikasi ini?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Algofun cocok untuk anak SD, guru, maupun
                                    orang tua yang ingin mengenalkan algoritma
                                    dan logika secara seru dan modern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    Apakah gratis digunakan?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Ya! Algofun gratis di bulan pertama.
                                    Setelahnya, tersedia paket premium dengan
                                    fitur tambahan.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>
                                    Apa saja fiturnya?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Fitur utama: pembelajaran interaktif, kuis
                                    adaptif, analitik perkembangan, maskot AI,
                                    leaderboard, dan komunitas.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>
                                    Apakah aman untuk anak?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Algofun dirancang dengan fitur keamanan,
                                    moderasi, dan privasi tinggi untuk
                                    memastikan anak belajar dengan aman.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    {/* Animation Right */}
                    <div className="flex-1 w-full max-w-md flex items-center justify-center">
                        {accordionAnim && (
                            <Lottie
                                animationData={accordionAnim}
                                loop
                                className="w-full max-w-md h-80"
                            />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
