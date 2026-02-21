import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Philosophy', href: '#philosophy' },
        { name: 'Governance', href: '#governance' },
        { name: 'Phoenix Studio', href: 'https://www.mlfee.com/gp/' },
        { name: 'IR', href: '#' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-navy-950/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <img src="/assets/logo.png" alt="R" className="w-8 h-8 object-contain" />
                        <span className="font-display font-bold tracking-widest text-lg text-white group-hover:text-gold-200 transition-colors">GOLDEN ROC</span>
                    </div>

                    <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-gold-400 transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <button className="border border-gold-600/50 text-gold-500 px-6 py-2 hover:bg-gold-600 hover:text-black transition-all duration-300">
                            Contact
                        </button>
                    </div>

                    <button className="md:hidden text-gold-400" onClick={() => setIsMenuOpen(true)}>
                        <Icons.Menu />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-navy-950 flex flex-col items-center justify-center gap-8">
                    <button className="absolute top-8 right-6 text-slate-400" onClick={() => setIsMenuOpen(false)}>
                        <Icons.X size={32} />
                    </button>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-display text-3xl text-gold-100 hover:text-gold-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        className="font-display text-3xl text-gold-100 hover:text-gold-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;
