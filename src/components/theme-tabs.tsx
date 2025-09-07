'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeTabs() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Biar nggak error hydration (karena theme dari localStorage)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Tabs
            defaultValue={theme}
            onValueChange={(val) => setTheme(val)}
            className="w-fit"
        >
            <TabsList>
                <TabsTrigger value="light">
                    <Sun className="size-4" /> Light
                </TabsTrigger>
                <TabsTrigger value="dark">
                    <Moon className="size-4" /> Dark
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
