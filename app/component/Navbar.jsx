"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'

const NavLinks = [
    {
        tittle: "About Me",
        path: "/about",
    },
    {
        tittle: "Experience",
        path: "/experience",
    },
    {
        tittle: "Projects",
        path: "/projects",
    },
    {
        tittle: "Contact",
        path: "/contact",
    },
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-zinc-950">
            <div className="flex flex-wrap items-center justify-between mx-auto px-16 py-2">
                <Link href={"/"} className="text-2xl md:text-4xl font-semibold">
                    Logo
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen? (
                            <button
                                onClick={ () => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white">
                                    <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                onClick={ () => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white">
                                    <XmarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div id="navbar" className="menu hidden md:block md:w-auto">
                    <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                        {
                            NavLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} tittle={link.tittle} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {
                navbarOpen ? <MenuOverlay links={NavLinks} /> : null
            }
        </nav>
  )
}

export default Navbar