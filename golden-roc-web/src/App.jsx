import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CinematicIntro from './components/CinematicIntro';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Stats from './components/Stats';
import Governance from './components/Governance';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

function App() {
    const [hasEntered, setHasEntered] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [introFading, setIntroFading] = useState(false);

    const handleEnter = () => {
        setHasEntered(true);
    };

    const handleSkipIntro = () => {
        setIntroFading(true);
        setTimeout(() => {
            setShowIntro(false);
        }, 1000); // 1초간 페이드 아웃 효과 후 인트로 제거
    };

    // 1단계: 입장 전 화면
    if (!hasEntered) {
        return <Preloader onEnter={handleEnter} />;
    }

    return (
        <div className="min-h-screen bg-navy-950 text-slate-300 font-sans selection:bg-gold-500 selection:text-black">

            {/* 2단계: 시네마틱 인트로 동영상 */}
            {showIntro && (
                <CinematicIntro onSkip={handleSkipIntro} isFading={introFading} />
            )}

            {/* 3단계: 메인 콘텐츠 (인트로 중에는 투명도 조절로 부드럽게 등장 대기) */}
            <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                <Navbar />
                <main>
                    <HeroSection />
                    <Stats />
                    <Governance />
                    <Philosophy />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
