import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Sidebar } from '@/components/sidebar';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-blue-300" />
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    {/* kalau mau judul kelihatan */}
                    {/* <SheetTitle>Menu</SheetTitle> */}

                    {/* kalau ga mau kelihatan */}
                    <VisuallyHidden>
                        <SheetTitle>Mobile Sidebar</SheetTitle>
                    </VisuallyHidden>
                </SheetHeader>

                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};
