/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    100: '#F9F1D8', 200: '#EEDC9A', 300: '#E8D48E',
                    400: '#D4AF37', 500: '#C5A028', 600: '#A38218',
                    700: '#856910', 800: '#634D09', 900: '#423306',
                },
                navy: { 800: '#1a2035', 900: '#0B1120', 950: '#050810' }
            },
            fontFamily: {
                serif: ['Noto Serif KR', 'serif'],
                display: ['Cinzel', 'serif'],
                sans: ['Noto Sans KR', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 1.2s ease-out forwards',
                'pulse-slow': 'pulseSlow 4s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSlow: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.6' },
                },
            }
        }
    },
    plugins: [],
}
