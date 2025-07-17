"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiUserLight } from "react-icons/pi";

const Header = () => {
    const pathname = usePathname();
    const links = [
        { href: "/", name: "Quotes" },
        { href: "/products", name: "Products" },
        { href: "/comments", name: "Comments" },
        { href: "/posts", name: "Posts" },
        { href: "/recipes", name: "Recipes" },
    ]
    return (
        <header className='site_header bg-gray-50 border-b border-gray-200'>
            <div className="container">
                <nav className='header_nav h-16 md:h-[70px] flex items-center justify-end relative'>
                    <div className='flex items-center gap-2 absolute sm:gap-4 top-1/2 left-0 sm:left-1/2 -translate-y-1/2 sm:-translate-x-1/2'>
                        {
                            links.map((item) => (
                                <Link key={item.href} className={`header_nav_link ${pathname === item.href ? "!text-[#05a6f4]" : "!black"} link_hover text-sm sm:text-base select-none`} href={item.href}>{item.name}</Link>
                            ))
                        }
                    </div>
                    <Link className={`header_nav_link ${pathname === "/signin" ? "!text-[#05a6f4]" : "!black"} select-none`} href={"/signin"}>
                        <button className='flex items-center gap-1 sm:border sm:border-gray-400 sm:active:border-gray-900 sm:duration-75 border-[0px] p-0 sm:py-2 sm:px-3 rounded-md'>
                            <PiUserLight className='text-xl' />
                            <span className='hidden sm:block text-sm sm:text-base'>Sign in</span>
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default React.memo(Header);