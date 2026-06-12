import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { Header } from './header';
import { UserProgress } from '@/components/user-progress';

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-8 lg:gap-12">
            <StickyWrapper>
                <div className="rounded-3xl border-2 border-sky-100 bg-white p-3 shadow-sm">
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
            </StickyWrapper>

            <FeedWrapper>
                <Header title="Logika Dasar" />
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;
