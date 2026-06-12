import { MobileSidebar } from './mobile-sidebar';
import { UserProgress } from '@/components/user-progress';

export const MobileHeader = () => {
    return (
        <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 border-sky-100 bg-white/95 px-3 shadow-sm backdrop-blur lg:hidden">
            <MobileSidebar />

            <div className="min-w-0 flex-1">
                <UserProgress
                    activeCourse={{
                        title: 'Logika',
                        imageSrc: '/assets/alfabet.svg',
                    }}
                    hearts={5}
                    gems={500}
                    points={100}
                />
            </div>
        </nav>
    );
};
