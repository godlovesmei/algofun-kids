'use client';

import { useRef, useEffect } from 'react';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

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
        <div className="flex justify-center w-full min-h-[80vh] mx-auto">
            <StickyWrapper>
                <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl flex flex-col h-[70vh]">
                    {/* Header */}
                    <div className="p-6 border-b bg-white rounded-t-2xl">
                        <h1 className="text-2xl font-bold">Tanya AI</h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Ajukan pertanyaan apa pun seputar materi atau
                            tugasmu, dan AI akan membantumu!
                        </p>
                    </div>
                    {/* Chat History */}
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-[#f8f9fa]">
                        {dummyHistory.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${
                                    msg.role === 'user'
                                        ? 'justify-end'
                                        : 'justify-start'
                                }`}
                            >
                                <div
                                    className={`px-4 py-2 rounded-lg max-w-[70%] text-base ${
                                        msg.role === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    {/* Input */}
                    <form className="border-t bg-white px-4 py-3 flex gap-2 rounded-b-2xl">
                        <input
                            type="text"
                            placeholder="Ketik pertanyaanmu di sini..."
                            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                        />
                        <Button
                            type="submit"
                            className="flex gap-1 items-center"
                        >
                            <Send className="w-4 h-4 mr-1" /> Kirim
                        </Button>
                    </form>
                </div>
            </StickyWrapper>
        </div>
    );
};

export default AskAiPage;
