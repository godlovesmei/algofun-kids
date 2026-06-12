import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const font = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Algofun | AI-Powered Logic & Algorithm Learning for Kids',
    description:
        'Platform belajar logika dan algoritma yang interaktif, ramah anak, dan penuh warna.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`${font.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
