"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
// import React from 'react'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { navLinks } from '@/lib/constants'

const TopBar = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const pathName = usePathname();
    return (
        <div className='sticky top-0 z-20 w-full flex justify-between px-8 py-4 bg-blue-2 shadow-xl lg:hidden'>
            <Image src='' alt='logo' width={150} height={30} />

            <div className='flex gap-8 max-md:hidden'>
                {navLinks.map((link) => (
                    <Link
                        href={link.url}
                        key={link.label}
                        className={`flex gap-4 px-4 text-body-medium ${pathName === link.url ? "text-blue-1" : "text-grey-1"}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className='relative flex gap-4 text-body-semibold items-center'>
                <MenuIcon className='cursor-pointer md:hidden' onClick={() => setDropdownMenu(!dropdownMenu)} />
                {dropdownMenu && (
                    <div className='absolute top-14 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg'>
                        {navLinks.map((link) => (
                            <Link
                                href={link.url}
                                key={link.label}
                                className={`flex gap-4 px-4 text-body-medium ${pathName === link.url ? "text-blue-1" : "text-grey-1"}`}
                            >
                                {link.icon}<p>{link.label}</p>
                            </Link>
                        ))}
                    </div>
                )}
                <UserButton />
            </div>

        </div>
    )
}

export default TopBar
