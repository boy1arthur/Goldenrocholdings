import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CinematicIntro from './components/CinematicIntro';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Stats from './components/Stats';
import Governance from './components/Governance';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

// 1. 방금 만든 PhoenixStudio 컴포넌트 임포트
import PhoenixStudio from './components/PhoenixStudio';

function App() {
    const [hasEntered, setHasEntered] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [introFading, setIntroFading] = useState(false);

    // 2. 현재 보여줄 페이지 종류 관리 ('home' 또는 'phoenix')
    const [currentPage, setCurrentPage] = useState('home');

    const handleEnter = () => {
        setHasEntered(true);
    };

    const handleSkipIntro = () => {
        setIntroFading(true);
        setTimeout(() => {
            setShowIntro(false);
        }, 1000); 
    };

    // 1단계: 최초 입장 대기 화면
    if (!hasEntered) {
        return <Preloader onEnter={handleEnter} />;
    }

    return (
        <div className="min-h-screen bg-navy-950 text-slate-300 font-sans selection:bg-gold-500 selection:text-black">

            {/* 2단계: 메인 시네마틱 인트로 (홈페이지 전용) */}
            {showIntro && currentPage === 'home' && (
                <CinematicIntro onSkip={handleSkipIntro} isFading={introFading} />
            )}

            {/* 3단계: 메인 콘텐츠 영역 */}
            {currentPage === 'home' ? (
                // --- 메인 홈 화면 ---
                <div className={`transition-opacity duration-1000 ${(showIntro) ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                    {/* 네비게이션바 메뉴에서 PHOENIX STUDIO 클릭 시 setCurrentPage('phoenix')를 하도록 처리 필요 */}
                    <Navbar onNavigate={setCurrentPage} />
                    <main>
                        <HeroSection />
                        <Stats />
                        <Governance />
                        <Philosophy />
                    </main>
                    <Footer />
                </div>
            ) : (
                // --- 피닉스 스튜디오 화면 ---
                <PhoenixStudio onBackToHome={() => setCurrentPage('home')} />
            )}
        </div>
    );
}

export default App;
