import React from 'react';

const Footer = () => {
    const sections = [
        {
            title: 'Company',
            links: ['About', 'Leadership', 'History'],
        },
        {
            title: 'Business',
            links: ['Governance', 'Phoenix Studio', 'Partners'],
            linkOverrides: { 'Phoenix Studio': 'https://www.mlfee.com/gp/' },
            anchorOverrides: { 'Governance': '#governance' }
        },
        {
            title: 'Legal',
            links: ['Privacy Policy', 'Ethics'],
        },
    ];

    return (
        <footer className="bg-black border-t border-gold-900/30 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div>
                        <h2 className="font-display text-2xl text-white mb-2">GOLDEN ROC</h2>
                        <p className="text-xs text-gold-500 tracking-[0.3em] uppercase">Holdings</p>
                    </div>
                    <div className="flex gap-12 text-sm text-slate-400">
                        {sections.map((section) => (
                            <div key={section.title} className="flex flex-col gap-4">
                                <span className="text-white font-bold uppercase tracking-widest mb-2">
                                    {section.title}
                                </span>
                                {section.links.map((link) => (
                                    <a
                                        key={link}
                                        href={section.linkOverrides?.[link] || section.anchorOverrides?.[link] || '#'}
                                        className="hover:text-gold-400 transition-colors"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
                    <p>&copy; 2026 GOLDEN ROC HOLDINGS. ALL RIGHTS RESERVED.</p>
                    <p className="mt-2 md:mt-0 font-display uppercase tracking-widest">The Legend Begins</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
