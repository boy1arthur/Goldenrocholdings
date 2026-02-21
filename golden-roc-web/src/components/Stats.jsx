import React from 'react';

const Stats = () => {
    const stats = [
        { val: '∞', label: 'Unlimited Vision' },
        { val: '$500M+', label: 'Assets Under Management' },
        { val: 'Global', label: 'Network Presence' },
    ];

    return (
        <section className="py-24 border-t border-white/5 bg-navy-900/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((s, i) => (
                        <div key={i} className="p-6 border-r border-white/5 last:border-0">
                            <div className="text-4xl md:text-5xl font-display text-gold-400 mb-2">
                                {s.val}
                            </div>
                            <div className="text-sm font-bold tracking-widest uppercase text-slate-500">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
