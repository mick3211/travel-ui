import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';

const navLinks = [
    {
        name: 'Início',
        href: '/',
    },
    {
        name: 'Estadias',
        href: '/estadias',
    },
    {
        name: 'Voos',
        href: '/voos',
    },
    {
        name: 'Pacotes',
        href: '/pacotes',
    },
];

interface HeaderProps {
    currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
    const [isOpaque, setIsOpaque] = useState(false);

    useEffect(() => {
        const isScrolled = () => {
            if (window.scrollY > 0) setIsOpaque(true);
            else setIsOpaque(false);
        };

        window.addEventListener('scroll', isScrolled);

        return () => window.removeEventListener('scroll', isScrolled);
    });

    return (
        <header
            className={`py-5 fixed top-0 left-0 right-0 z-50 text-white transition-all ${
                isOpaque ? 'bg-blue-700' : ''
            }`}
        >
            <div className="mx-auto px-4 max-w-[1366px] flex items-center">
                <button className="md:hidden p-2 hover:bg-white/25 rounded-sm focus:bg-white/50 transition-colors">
                    <Bars3CenterLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="font-bold text-2xl md:text-5xl flex-1 text-center md:text-start">
                    trxvl.
                </h1>
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    <a
                                        className={`p-2 hover:border-b-2 focus:border-b-2 ${
                                            currentPage === link.href
                                                ? 'border-b-2'
                                                : ''
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
