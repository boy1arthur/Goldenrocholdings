import React, { useEffect } from 'react';
import { Icons } from './Icons';

const CinematicIntro = ({ onSkip, isFading }) => {
    // 8초 후 자동 스킵 (기존 로직 유지)
    useEffect(() => {
        const timer = setTimeout(() => onSkip(), 8000);
        return () => clearTimeout(timer);
    }, [onSkip]);

    return (
        <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    muted={false}
                    playsInline
                    className="w-full h-full object-cover"
                    onEnded={onSkip}
                >
                    <source src="/assets/intro.mp4" type="video/mp4" />
                    {/* Fallback 영상 */}
                    <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                {/* 시네마틱 레터박스 */}
                <div className="absolute top-0 left-0 w-full h-[8vh] bg-black z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-[8vh] bg-black z-10"></div>
            </div>

            {/* 로고 워터마크 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none opacity-30">
                <p className="font-display text-gold-400 text-2xl tracking-[0.6em]">GOLDEN ROC</p>
            </div>

            {/* 스킵 버튼 */}
            <button
                onClick={onSkip}
                className="absolute bottom-12 right-12 z-30 flex items-center gap-2 text-white/50 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors border border-white/20 px-4 py-2 backdrop-blur-sm"
            >
                Skip Intro <Icons.SkipForward size={14} />
            </button>
        </div>
    );
};

export default CinematicIntro;
