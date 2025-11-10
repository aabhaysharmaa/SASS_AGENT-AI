"use client";

import React, { useState } from 'react'

import { UserButton } from '@clerk/nextjs';



import MobileSidebar from './mobile-sidebar';
import { Moon, SunMedium } from 'lucide-react';



const NavBar = () => {
	const [theme, setTheme] = useState(false);

	return (
		<div className='flex items-center p--4'>
			<MobileSidebar />
			<div className="flex justify-end w-full mt-3 mr-3">
				<div className="flex mr-3 justify-center items-center" onClick={() => setTheme(!theme)}>
					<SunMedium size={22} />
					<Moon size={20} />
				</div>
				<UserButton />
			</div>
		</div>
	)
}

export default NavBar