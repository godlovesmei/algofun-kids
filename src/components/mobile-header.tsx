import { MobileSidebar } from './mobile-sidebar';
import { UserProgress } from '@/components/user-progress';

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-4 h-[60px] flex items-center justify-between bg-white border-b fixed top-0 w-full z-50">
            {/* Tombol Menu */}
            <MobileSidebar />

            {/* User Progress di Mobile */}
            <UserProgress
                activeCourse={{
                    title: 'Spanish',
                    imageSrc: '/assets/alfabet.svg',
                }}
                hearts={5}
                gems={500}
                points={100}
            />
        </nav>
    );
};
