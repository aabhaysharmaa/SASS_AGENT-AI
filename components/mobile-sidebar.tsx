import React from 'react'
import { Button } from './ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // 👈 this comes with shadcn deps
import { Menu } from 'lucide-react'
import SideBar from './SideBar';

const MobileSidebar = () => {
	return (
		<Sheet >
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className='md:hidden cursor-pointer'>
					<Menu className='cursor-pointer' />
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='p-0 w-[300px]  border-none'>
				<VisuallyHidden>
					<SheetTitle> Mobile nav</SheetTitle>
				</VisuallyHidden>
				<SheetClose className='h-full'>
					<SideBar  />
				</SheetClose>
			</SheetContent>
		</Sheet>

	)
}

export default MobileSidebar