import React from 'react';

const Icon = ({ path, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        {path}
    </svg>
);

export const Icons = {
    Menu: (p) => <Icon {...p} path={<><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>} />,
    X: (p) => <Icon {...p} path={<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>} />,
    ArrowRight: (p) => <Icon {...p} path={<><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>} />,
    Globe: (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>} />,
    Building: (p) => <Icon {...p} path={<><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="12" y1="2" x2="12" y2="22" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="4" y1="16" x2="20" y2="16" /></>} />,
    TrendingUp: (p) => <Icon {...p} path={<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>} />,
    ChevronDown: (p) => <Icon {...p} path={<polyline points="6 9 12 15 18 9" />} />,
    Film: (p) => <Icon {...p} path={<><rect x="2" y="2" width="20" height="20" rx="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" /></>} />,
    GoldBar: (p) => <Icon {...p} path={<><path d="M6 4L2 8h20l-4-4H6z" /><rect x="2" y="8" width="20" height="12" rx="1" /></>} />,
    Play: (p) => <Icon {...p} path={<polygon points="5 3 19 12 5 21 5 3" />} />,
    SkipForward: (p) => <Icon {...p} path={<><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></>} />,
};
