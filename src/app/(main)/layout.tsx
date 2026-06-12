import { Sidebar } from '@/components/sidebar';
import { MobileHeader } from '@/components/mobile-header';
type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="min-h-svh bg-gradient-to-br from-sky-50 via-white to-yellow-50 pt-[64px] lg:pl-[256px] lg:pt-0">
                <div className="mx-auto h-full w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                    {children}
                </div>
            </main>
        </>
    );
};

export default MainLayout;
