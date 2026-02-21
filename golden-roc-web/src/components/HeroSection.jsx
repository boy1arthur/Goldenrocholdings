import React, { useEffect, useRef } from 'react';
import { Icons } from './Icons';

const HeroSection = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const particles = [];
        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 0.5 + 0.2;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.alpha = 0;
                this.life = 0;
                this.maxLife = Math.random() * 300 + 200;
            }
            update() {
                this.y -= this.speedY;
                this.x += this.speedX;
                this.life++;
                if (this.life < 50) this.alpha = (this.life / 50) * 0.5;
                else if (this.life > this.maxLife - 50)
                    this.alpha = ((this.maxLife - this.life) / 50) * 0.5;
                if (this.life >= this.maxLife || this.y < -10) this.reset();
            }
            draw() {
                ctx.fillStyle = '#D4AF37';
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 60; i++) particles.push(new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const g = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width
            );
            g.addColorStop(0, '#0B1120');
            g.addColorStop(1, '#050810');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            animId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
                <div className="mb-6 flex justify-center animate-fade-in-up">
                    <span className="px-4 py-1 rounded-full border border-gold-500/30 text-gold-400 text-[10px] tracking-[0.3em] uppercase bg-gold-900/10 backdrop-blur-sm">
                        Global Investment Holdings
                    </span>
                </div>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 text-white animate-fade-in-up">
                    <span className="block text-gradient-gold">THE WINGS OF</span>
                    <span className="block opacity-90">LEGEND</span>
                </h1>
                <p className="font-serif text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
                    날개를 펴면 태양을 가리고, 코끼리를 낚아채 비상하는 전설의 새 로크(Roc).
                    <br className="hidden md:block" />
                    우리는 그 압도적인 날개 아래 자회사들을 품고, 흔들리지 않는 토대를 제공합니다.
                </p>
                <div className="animate-fade-in-up">
                    <a
                        href="#governance"
                        className="inline-flex flex-col items-center gap-2 text-gold-500 text-xs tracking-[0.2em] uppercase hover:text-gold-300 transition-colors opacity-70 hover:opacity-100"
                    >
                        Explore Structure
                        <Icons.ChevronDown className="animate-bounce" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
