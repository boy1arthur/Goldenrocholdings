import React from 'react';
import { Icons } from './Icons';

const Governance = () => {
    return (
        <section id="governance" className="py-32 bg-navy-950 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-900/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Structure
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                        Corporate Governance
                    </h2>
                    <p className="font-serif text-slate-400 text-lg max-w-2xl mx-auto">
                        한국 인베스트먼트를 중심으로 금(Gold), 부동산, 엔터테인먼트, 글로벌 확장의 4대 축을 완성했습니다.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    <div className="flex justify-center mb-24 relative">
                        <div className="relative z-10 bg-gradient-to-br from-navy-800 to-black border-2 border-gold-400 px-12 py-8 rounded-sm shadow-[0_0_40px_rgba(212,175,55,0.15)] text-center min-w-[320px]">
                            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-gold-500"></div>
                            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-gold-500"></div>
                            <span className="text-xs text-gold-300 font-bold tracking-widest uppercase mb-1 block">
                                Control Tower
                            </span>
                            <h3 className="font-display text-2xl text-white font-bold tracking-widest mb-2">
                                한국 인베스트먼트
                            </h3>
                            <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mb-4">
                                Golden Roc Holdings
                            </p>
                            <div className="inline-block bg-gold-600/20 border border-gold-500/50 px-3 py-1 rounded-full text-[10px] text-gold-300 font-bold tracking-wider">
                                그룹 전체 전략 지휘
                            </div>
                        </div>
                        <div className="absolute h-12 w-px bg-gold-500 bottom-[-48px] left-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block tree-line-horizontal"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                            {/* Gold & Resources */}
                            <div className="relative flex flex-col items-center">
                                <div className="hidden lg:block tree-connector-up"></div>
                                <div className="bg-navy-900 border border-gold-500/30 px-6 py-4 rounded-sm text-center w-full mb-6 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-950 px-2 text-gold-400">
                                        <Icons.GoldBar size={20} />
                                    </div>
                                    <h4 className="font-display text-lg text-white mt-2">원자재 가공/유통</h4>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Gold & Resources</p>
                                </div>
                                <div className="w-full space-y-4">
                                    {[
                                        ['한국 금 제련소', '금 제련 및 가공 사업'],
                                        ['한국 금 거래소', '유통 및 판매 플랫폼'],
                                        ['튀르키예 금제련소', '해외 실물 자산 확보'],
                                    ].map(([name, desc]) => (
                                        <div key={name} className="bg-white/5 border-l-2 border-gold-500 p-4 hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-white font-bold text-sm">{name}</span>
                                                <span className="text-[9px] bg-gold-500 text-black px-1 font-bold rounded">100%</span>
                                            </div>
                                            <p className="text-xs text-slate-400">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Asset Management */}
                            <div className="relative flex flex-col items-center">
                                <div className="hidden lg:block tree-connector-up"></div>
                                <div className="bg-navy-900 border border-gold-500/30 px-6 py-4 rounded-sm text-center w-full mb-6 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-950 px-2 text-gold-400">
                                        <Icons.Building size={20} />
                                    </div>
                                    <h4 className="font-display text-lg text-white mt-2">자산 운용/부동산</h4>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Asset Management</p>
                                </div>
                                <div className="w-full space-y-4">
                                    {[
                                        ['부동산 매매법인', 'Cash Cow (안정적 현금흐름)'],
                                        ['시행/건설사', '부동산 개발 및 시행'],
                                        ['호텔업', '숙박 및 서비스 운영'],
                                        ['해외 리조트', '필리핀 보홀 풀빌라'],
                                    ].map(([name, desc]) => (
                                        <div key={name} className="bg-white/5 border-l-2 border-gold-500 p-4 hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-white font-bold text-sm">{name}</span>
                                                <span className="text-[9px] bg-gold-500 text-black px-1 font-bold rounded">100%</span>
                                            </div>
                                            <p className="text-xs text-slate-400">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Entertainment */}
                            <div className="relative flex flex-col items-center">
                                <div className="hidden lg:block tree-connector-up"></div>
                                <div className="bg-navy-900 border border-gold-500/30 px-6 py-4 rounded-sm text-center w-full mb-6 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-950 px-2 text-gold-400">
                                        <Icons.Film size={20} />
                                    </div>
                                    <h4 className="font-display text-lg text-white mt-2">IP 및 콘텐츠</h4>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Entertainment</p>
                                </div>
                                <div className="w-full space-y-4">
                                    <div className="bg-white/5 border-l-2 border-gold-500 p-4 hover:bg-white/10 transition-colors">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-white font-bold text-sm">한국 엔터테인먼트</span>
                                            <span className="text-[9px] bg-gold-500 text-black px-1 font-bold rounded">100%</span>
                                        </div>
                                        <p className="text-xs text-slate-400">K-콘텐츠 제작 및 IP 관리</p>
                                    </div>
                                    <a href="https://www.mlfee.com/gp/" className="block bg-white/5 border-l-2 border-gold-500 p-4 hover:bg-gold-500/20 transition-colors group">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-white font-bold text-sm group-hover:text-gold-300">미국 엔터테인먼트</span>
                                            <span className="text-[9px] bg-gold-500 text-black px-1 font-bold rounded">100%</span>
                                        </div>
                                        <p className="text-xs text-slate-400">헐리우드 콘텐츠 제작</p>
                                        <span className="text-[10px] text-gold-400 mt-2 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            VISIT STUDIO <Icons.ArrowRight size={12} />
                                        </span>
                                    </a>
                                    <div className="bg-white/5 border-l-2 border-gold-500 p-4 hover:bg-white/10 transition-colors">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-white font-bold text-sm">극장 사업</span>
                                            <span className="text-[9px] bg-gold-500 text-black px-1 font-bold rounded">100%</span>
                                        </div>
                                        <p className="text-xs text-slate-400">콘텐츠 상영 플랫폼</p>
                                    </div>
                                </div>
                            </div>

                            {/* Global Investment */}
                            <div className="relative flex flex-col items-center">
                                <div className="hidden lg:block tree-connector-up"></div>
                                <div className="bg-navy-900 border border-gold-500/30 px-6 py-4 rounded-sm text-center w-full mb-6 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-950 px-2 text-gold-400">
                                        <Icons.Globe size={20} />
                                    </div>
                                    <h4 className="font-display text-lg text-white mt-2">글로벌 확장 기지</h4>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Global Investment</p>
                                </div>
                                <div className="w-full space-y-4">
                                    <div className="bg-white/5 border-l-2 border-gold-500 p-4 hover:bg-white/10 transition-colors">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-white font-bold text-sm">미국 인베스트먼트</span>
                                            <span className="text-[9px] bg-gold-500 text-black px-1 font-bold rounded">100%</span>
                                        </div>
                                        <p className="text-xs text-slate-400">해외 투자 및 확장 거점</p>
                                    </div>
                                    <div className="p-4 text-center border border-white/5 bg-white/[0.02]">
                                        <p className="text-xs text-slate-500">Connecting Seoul, Hollywood, and Turkey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Governance;
