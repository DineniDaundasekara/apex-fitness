"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 20, suffix: "+", label: "Expert Trainers" },
  { value: 15, suffix: "+", label: "Training Programs" },
];

function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

function StatCard({ value, suffix, label, delay, trigger }: {
  value: number; suffix: string; label: string; delay: number; trigger: boolean;
}) {
  const count = useCountUp(value, 2000, trigger);
  return (
    <div
      className="flex-1 card-dark rounded-lg p-5 text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-bebas text-4xl md:text-5xl text-gold tracking-wider">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm font-barlow tracking-widest uppercase mt-1">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)",
      }}
    >
      {/* Background gym image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')`,
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* Decorative gold line */}
      <div className="absolute left-0 top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent to-gold/40" />
      <div className="absolute right-0 bottom-1/4 h-px w-1/3 bg-gradient-to-l from-transparent to-gold/40" />

      {/* Animated background orb */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-5 animate-pulse"
        style={{ background: "radial-gradient(circle, #C9A227, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="w-8 h-px bg-gold" />
            <span className="font-barlow text-gold text-sm font-600 tracking-[0.3em] uppercase">
              Elite Fitness Center
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`font-bebas leading-none mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="block text-primary-text text-[clamp(56px,10vw,120px)]">TRANSFORM </span>
            <span className="block text-[clamp(56px,10vw,120px)] text-primary-text">
              YOUR{" "}
              <span
                className="text-gold"
                style={{ textShadow: "0 0 40px rgba(201,162,39,0.3)" }}
              >
                BODY
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-secondary-text text-lg md:text-xl max-w-xl mb-10 leading-relaxed transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            Join the elite fitness revolution. Premium equipment, expert trainers,
            and a community that pushes you beyond your limits.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold px-8 py-4 rounded-sm text-base tracking-widest animate-pulse-gold"
            >
              Join Now
            </button>
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline-gold px-8 py-4 rounded-sm text-base tracking-widest"
            >
              Explore Plans
            </button>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 100} trigger={statsVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}