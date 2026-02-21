import React from 'react';
import { Icons } from './Icons';

const Philosophy = () => {
    const cards = [
        {
            icon: <Icons.TrendingUp className="text-gold-400" size={32} />,
            date: '2025 Q4',
            title: 'Financial Highlights',
            desc: '지주사 전환 이후 첫 분기 실적 및 성장 지표 보고서',
            link: 'Download PDF',
        },
        {
            icon: <Icons.Globe className="text-gold-400" size={32} />,
            date: 'Strategy',
            title: 'Global Expansion 2030',
            desc: '북미 및 아시아 시장 동시 공략을 위한 중장기 로드맵',
            link: 'Read More',
        },
    ];

    return (
        <section id="philosophy" className="py-32 bg-gradient-to-b from-navy-950 to-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2">
                        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase block mb-6">
                            Chairman's Message
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-8">
                            "우리는 단순한 투자가 아닌,<br />
                            <span className="font-serif italic text-gold-400">전설을 설계합니다.</span>"
                        </h2>
                        <p className="font-serif text-slate-400 text-lg leading-loose mb-8">
                            로크(Roc)가 한 번의 날개짓으로 대양을 건너듯, 우리는 세대를 뛰어넘는 긴 호흡으로 투자합니다.
                            전설 속에서나 가능했던 일들을 현실로 만드는 힘, 그것이 Golden Roc의 본질입니다.
                        </p>
                        <div className="h-px w-20 bg-gold-600 mb-8"></div>
                        <p className="text-white font-display text-xl">The Chairman</p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    {card.icon}
                                    <span className="text-xs text-slate-500 font-bold uppercase">{card.date}</span>
                                </div>
                                <h3 className="text-2xl font-display text-white mb-2">{card.title}</h3>
                                <p className="text-slate-400 text-sm mb-4">{card.desc}</p>
                                <span className="text-gold-500 text-xs font-bold tracking-widest uppercase border-b border-gold-500 pb-1">
                                    {card.link}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
