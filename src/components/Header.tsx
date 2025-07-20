"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiUserLight } from "react-icons/pi";
import { SiNextdotjs } from "react-icons/si";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
    const pathname = usePathname();
    const links = [
        { href: "/", name: "Quotes" },
        { href: "/products", name: "Products" },
        { href: "/recipes", name: "Recipes" },
        { href: "/comments", name: "Comments" },
        { href: "/posts", name: "Posts" }
    ]
    return (
        <header className='site_header bg-gray-50 border-b border-gray-200'>
            <div className="container">
                <nav className='header_nav h-16 md:h-[70px] flex items-center justify-between relative'>
                    <div>
                        <Link href={"/"}><SiNextdotjs className='text-4xl' /></Link>
                    </div>
                    <div className='hidden sm:flex items-center gap-2 sm:gap-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                        {
                            links.map((item) => (
                                <Link key={item.href} className={`header_nav_link ${pathname === item.href ? "!text-[#05a6f4]" : "!black"} link_hover text-sm sm:text-base select-none`} href={item.href}>{item.name}</Link>
                            ))
                        }
                    </div>
                    <Link className={`header_nav_link ${pathname === "/signin" ? "!text-[#05a6f4]" : "!black"} select-none`} href={"/signin"}>
                        <button className='hidden sm:flex items-center gap-1 sm:border sm:border-gray-400 sm:active:border-gray-900 sm:duration-75 border-[0px] sm:py-1.5 sm:px-2 rounded-md'>
                            <PiUserLight className='text-2xl sm:text-xl' />
                            <span className='text-sm sm:text-base'>Sign in</span>
                        </button>
                    </Link>
                    <CiMenuBurger className='text-xl sm:hidden' />
                </nav>
            </div>
        </header>
    )
}

export default React.memo(Header);