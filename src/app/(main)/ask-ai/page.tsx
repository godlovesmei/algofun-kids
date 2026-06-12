'use client';

import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, Sparkles } from 'lucide-react';

const dummyHistory = [
    { id: 1, role: 'user', text: 'Apa itu bilangan prima?' },
    {
        id: 2,
        role: 'ai',
        text: 'Bilangan prima adalah bilangan bulat lebih besar dari 1 yang hanya memiliki dua faktor, yaitu 1 dan dirinya sendiri.',
    },
    { id: 3, role: 'user', text: 'Contoh bilangan prima?' },
    {
        id: 4,
        role: 'ai',
        text: 'Contohnya: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, dst.',
    },
];

const AskAiPage = () => {
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    // Auto scroll to bottom when chat updates
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div className="mx-auto flex min-h-[calc(100svh-112px)] w-full max-w-4xl flex-col gap-5">
            <div className="rounded-3xl border-2 border-sky-100 bg-white/90 p-5 shadow-sm sm:p-6">
                <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                        <Bot className="size-6" />
                    </div>
                    <div>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-yellow-700">
                            <Sparkles className="size-3.5" />
                            Teman belajar AI
                        </div>
                        <h1 className="text-2xl font-extrabold text-slate-800 sm:text-3xl">
                            Tanya AI
                        </h1>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                            Ajukan pertanyaan seputar materi, tugas, atau
                            latihan logika. Jawaban dibuat ringkas agar mudah
                            diikuti anak.
                        </p>
                    </div>
                </div>
            </div>

            <Card className="min-h-[560px] overflow-hidden border-2 border-sky-100 bg-white p-0 shadow-sm">
                <div className="flex min-h-[560px] flex-1 flex-col">
                    <div className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-sky-50/70 to-white px-4 py-5 sm:px-6">
                        {dummyHistory.map((msg) => {
                            const isUser = msg.role === 'user';

                            return (
                                <div
                                    key={msg.id}
                                    className={`flex ${
                                        isUser
                                            ? 'justify-end'
                                            : 'justify-start'
                                    }`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[72%] sm:text-base ${
                                            isUser
                                                ? 'rounded-br-lg bg-sky-500 text-white'
                                                : 'rounded-bl-lg border-2 border-sky-100 bg-white text-slate-700'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            );
                        })}
                        <div ref={chatEndRef} />
                    </div>

                    <form className="flex gap-2 border-t-2 border-sky-100 bg-white p-3 sm:p-4">
                        <label className="sr-only" htmlFor="ai-question">
                            Pertanyaan untuk AI
                        </label>
                        <Input
                            id="ai-question"
                            type="text"
                            placeholder="Ketik pertanyaanmu di sini..."
                            className="h-12 rounded-2xl border-2 bg-white text-base"
                        />
                        <Button
                            type="submit"
                            variant="secondary"
                            className="h-12 shrink-0 px-4 sm:px-6"
                        >
                            <Send className="size-4 sm:mr-1" />
                            <span className="hidden sm:inline">Kirim</span>
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default AskAiPage;
