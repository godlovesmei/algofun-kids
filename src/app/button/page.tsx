'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Settings, Download, Play, Pause } from 'lucide-react';

export default function DemoButtonPage() {
    const [clickCount, setClickCount] = useState(0);
    const [soundEnabled, setSoundEnabled] = useState(true);

    const handleClick = () => setClickCount((c) => c + 1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-pink-50 px-4 py-8">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent">
                        🎉 Demo Button Variants
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Semua button di bawah bisa diklik dan akan bersuara!
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <p className="text-xl">
                            Total klik:{' '}
                            <span className="font-bold text-sky-600">
                                {clickCount}
                            </span>
                        </p>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSoundEnabled(!soundEnabled)}
                            className="gap-2"
                        >
                            {soundEnabled ? (
                                <Pause className="w-4 h-4" />
                            ) : (
                                <Play className="w-4 h-4" />
                            )}
                            {soundEnabled ? 'Matikan' : 'Nyalakan'} Suara
                        </Button>
                    </div>
                </div>

                {/* Basic Variants */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">
                        Basic Variants
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button
                            variant="default"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Default
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Primary
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Secondary
                        </Button>
                        <Button
                            variant="danger"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Danger
                        </Button>
                    </div>
                </section>

                {/* Outline Variants */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">
                        Outline Variants
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button
                            variant="primaryOutline"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Primary Outline
                        </Button>
                        <Button
                            variant="secondaryOutline"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Secondary Outline
                        </Button>
                        <Button
                            variant="dangerOutline"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Danger Outline
                        </Button>
                        <Button
                            variant="superOutline"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Super Outline
                        </Button>
                    </div>
                </section>

                {/* Special Variants */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">
                        Special Variants
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button
                            variant="super"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Super
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Ghost
                        </Button>
                        <Button
                            variant="link"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Link
                        </Button>
                        <Button
                            variant="sidebar"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Sidebar
                        </Button>
                    </div>
                </section>

                {/* Sidebar Outline */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">
                        Sidebar Variants
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                        <Button
                            variant="sidebar"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Sidebar Normal
                        </Button>
                        <Button
                            variant="sidebarOutline"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Sidebar Outline
                        </Button>
                    </div>
                </section>

                {/* Size Variants */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">
                        Size Variants
                    </h2>
                    <div className="flex flex-wrap justify-center items-end gap-4">
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Small
                        </Button>
                        <Button
                            variant="primary"
                            size="default"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Default
                        </Button>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Large
                        </Button>
                        <Button
                            variant="primary"
                            size="icon"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            <Settings className="w-4 h-4" />
                        </Button>
                    </div>
                </section>

                {/* With Icons */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">
                        With Icons
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Button
                            variant="primary"
                            onClick={handleClick}
                            playSound={soundEnabled}
                            className="gap-2"
                        >
                            <Heart className="w-4 h-4" />
                            Like Button
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleClick}
                            playSound={soundEnabled}
                            className="gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </Button>
                        <Button
                            variant="danger"
                            size="icon"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            <Settings className="w-4 h-4" />
                        </Button>
                    </div>
                </section>

                {/* States */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">
                        Button States
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Button
                            variant="primary"
                            onClick={handleClick}
                            playSound={soundEnabled}
                        >
                            Normal
                        </Button>
                        <Button
                            variant="primary"
                            disabled
                            playSound={soundEnabled}
                        >
                            Disabled
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleClick}
                            playSound={false}
                        >
                            Tanpa Suara
                        </Button>
                    </div>
                </section>

                {/* Footer */}
                <div className="text-center text-gray-500 text-sm pt-8 border-t">
                    <p>
                        Kamu bisa import dan pakai Button ini di mana saja di
                        project kamu! 🚀
                    </p>
                    <p className="mt-2">
                        Total variants: <strong>13 variants</strong> ×{' '}
                        <strong>4 sizes</strong> ={' '}
                        <strong>52+ kombinasi</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
