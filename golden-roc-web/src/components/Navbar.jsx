import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

// 1. App.jsx로부터 페이지 변경 제어용 함수(onNavigate)를 전달받습니다.
const Navbar = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. 외부 링크를 '#' 링크로 변경하고, 분기 처리를 위한 flag(isPhoenix)를 설정합니다.
    const navLinks = [
        { name: 'Philosophy', href: '#philosophy' },
        { name: 'Governance', href: '#governance' },
        { name: 'Phoenix Studio', href: '#phoenix-studio', isPhoenix: true },
        { name: 'IR', href: '#' },
    ];

    // 3. 네비게이션 메뉴 클릭 핸들러
    const handleLinkClick = (e, link) => {
        if (link.isPhoenix) {
            e.preventDefault(); // 기본 링크 이동(#) 방지
            if (onNavigate) onNavigate('phoenix'); // 피닉스 스튜디오 페이지로 전환
        } else {
            // 다른 메뉴(Philosophy, Governance 등)를 누르면 먼저 메인 홈 화면 상태로 전환합니다.
            if (onNavigate) onNavigate('home');
        }
        setIsMenuOpen(false); // 모바일 메뉴 닫기
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-navy-950/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* 4. 로고 클릭 시에도 메인 홈 화면('home')으로 이동하도록 이벤트 추가 */}
                    <div 
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => onNavigate && onNavigate('home')}
                    >
                        <img src="/assets/logo.png" alt="R" className="w-8 h-8 object-contain" />
                        <span className="font-display font-bold tracking-widest text-lg text-white group-hover:text-gold-200 transition-colors">GOLDEN ROC</span>
                    </div>

                    <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleLinkClick(e, link)} // 5. 클릭 이벤트 가로채기
                                className="hover:text-gold-400 transition-colors"
                            >
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
                            onClick={(e) => handleLinkClick(e, link)} // 모바일 환경용 클릭 이벤트 추가
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
