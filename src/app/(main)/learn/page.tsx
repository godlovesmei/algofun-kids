import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { Header } from './header';
import { UserProgress } from '@/components/user-progress';
import { MobileHeader } from '@/components/mobile-header';

const LearnPage = () => {
    return (
        <>
            {/* Header untuk Mobile */}
            <MobileHeader />

            <div className="flex flex-row-reverse gap-[48px] px-6 pt-[60px] lg:pt-0">
                {/* Desktop Sticky Sidebar */}
                <StickyWrapper className="hidden lg:block">
                    <UserProgress
                        activeCourse={{
                            title: 'Spanish',
                            imageSrc: '/assets/alfabet.svg',
                        }}
                        hearts={5}
                        gems={500}
                        points={100}
                    />
                </StickyWrapper>

                {/* Main Feed */}
                <FeedWrapper>
                    <Header title="Spanish" />
                </FeedWrapper>
            </div>
        </>
    );
};

export default LearnPage;
