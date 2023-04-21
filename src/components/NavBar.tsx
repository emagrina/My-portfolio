import React from 'react';
import Link from "next/link";
import {FiGithub, FiMail} from "react-icons/fi";

export const NavBar = () => {
    return (
        <header
            className="sticky top-0 z-40 flex-none mx-auto w-full bg-white md:bg-white/90 dark:bg-slate-950 dark:md:bg-slate-950/90 md:backdrop-blur-sm border-b dark:border-b-0">
            <div className="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-4">
                    <div className="flex justify-between">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link
                                    href="/"
                                    className="hover:bg-sky-300">Home</Link></li>
                                <li>
                                    <a
                                    href="https://github.com/emagrina?tab=repositories"
                                    target="_blank"
                                    className="hover:bg-sky-300">Projects</a>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:bg-sky-300"
                                    >Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="/"
                        className="flex items-center"
                    >
                        <span className="self-center ml-2 text-2xl font-extrabold text-gray-900 whitespace-nowrap dark:text-white">
                        ❄️
                        </span>
                    </Link>
                </div>
                <nav
                    className="items-center w-full md:w-auto hidden md:flex text-gray-600 dark:text-slate-200 h-screen md:h-auto"
                    aria-label="Main navigation" id="menu">
                    <ul className="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto collapsed text-xl md:text-base">
                        <li>
                            <a href="https://github.com/emagrina?tab=repositories"
                               target="_blank"
                               className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out">
                                Projects
                            </a>
                        </li>
                    </ul>
                    <div className="md:self-center flex items-center mb-4 md:mb-0 ml-2">
                        <div className="hidden items-center md:flex">
                            <Link href="/contact" aria-label="Contact"
                               className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center">
                                <FiMail className="text-xl"/>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    );
};