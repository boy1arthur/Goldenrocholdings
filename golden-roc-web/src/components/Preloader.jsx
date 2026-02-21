import React from 'react';
import { Icons } from './Icons';

const Preloader = ({ onEnter }) => {
    return (
        <div
            className="fixed inset-0 bg-navy-950 z-[200] flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={onEnter}
        >
            <div className="animate-pulse-slow mb-8">
                <img
                    src="/assets/logo.png"
                    alt="Golden Roc Logo"
                    className="w-32 h-32 object-contain mx-auto"
                    onError={(e) => {
                        // 이미지 없을 때를 대비한 Fallback (간단한 텍스트 로고)
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                    }}
                />
                <div className="hidden font-display text-4xl text-gold-400">R</div>
            </div>
            <h1 className="font-display text-3xl md:text-5xl text-gradient-gold tracking-[0.5em] mb-4">GOLDEN ROC</h1>
            <p className="text-gold-600 text-xs tracking-[0.4em] uppercase mb-12">Holdings · Vision for Eternity</p>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onEnter();
                }}
                className="border border-gold-600/50 text-gold-500 px-10 py-3 hover:bg-gold-600 hover:text-black transition-all duration-500 flex items-center gap-3 font-display font-bold tracking-widest text-sm"
            >
                ENTER <Icons.Play size={16} />
            </button>
        </div>
    );
};

export default Preloader;
