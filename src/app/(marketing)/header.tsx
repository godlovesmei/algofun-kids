import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <header className="h-20 w-full px-4 dark:bg-gray-800">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image
                        src="/assets/algofun-logo.png"
                        alt="AlgoFun Logo"
                        width={150}
                        height={150}
                    />
                </div>

                {/* Actions: Theme Toggle + Button */}
                <div className="flex items-center gap-x-4">
                    <Button size="lg" variant="secondary">
                        Mulai
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
