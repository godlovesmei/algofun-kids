import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Sidebar } from '@/components/sidebar';

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Buka menu"
                    playSound={false}
                    className="mr-2 shrink-0 text-sky-500 hover:bg-sky-50"
                >
                    <Menu className="size-6" />
                </Button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className="w-[min(88vw,320px)] border-r-2 border-sky-100 p-0"
            >
                <SheetHeader className="p-0">
                    <SheetTitle className="sr-only">Menu AlgoFun</SheetTitle>
                </SheetHeader>

                <Sidebar className="h-full border-r-0 shadow-none" />
            </SheetContent>
        </Sheet>
    );
};
