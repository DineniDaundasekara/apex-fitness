"use client";
import { useScrollAnimation } from "./useScrollAnimation";
import { CheckCircle, Dumbbell, Clock, Users } from "lucide-react";

const features = [
  { icon: Dumbbell, title: "Modern Equipment", desc: "Latest technology for optimal performance" },
  { icon: Users, title: "Expert Trainers", desc: "Certified professionals to guide your journey" },
  { icon: Clock, title: "Flexible Plans", desc: "Memberships that fit your lifestyle" },
];

export default function AboutSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Elite Fitness facility"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 card-dark rounded-xl p-5 glow-gold">
              <div className="font-bebas text-4xl text-gold">10+</div>
              <div className="text-secondary-text text-xs font-barlow tracking-widest uppercase">Years of Excellence</div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40 rounded-tl-xl"
            />
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="font-barlow text-gold text-sm tracking-[0.3em] uppercase">About Us</span>
            </div>

            <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-none mb-6">
              <span className="text-primary-text">TRANSFORM YOUR</span>
              <br />
              <span className="text-gold">FITNESS JOURNEY</span>
            </h2>

            <p className="text-secondary-text text-base leading-relaxed mb-4">
              At Apex Fitness, we&apos;re more than just a gym. We&apos;re your partner in achieving
              extraordinary results. Our state-of-the-art facility combines cutting-edge equipment
              with expert guidance to help you unlock your full potential.
            </p>
            <p className="text-secondary-text/80 text-base leading-relaxed mb-8">
              Every detail has been crafted to elevate your training experience — from luxury
              amenities to our expert trainers. We provide everything you need to achieve your
              fitness goals.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-4 mb-8">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-barlow font-700 text-primary-text tracking-wide uppercase text-sm">{title}</div>
                    <div className="text-secondary-text text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-6 border-t border-border-color">
              {[["500+", "Members"], ["15+", "Trainers"], ["24/7", "Access"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-bebas text-3xl text-gold">{val}</div>
                  <div className="text-secondary-text text-xs font-barlow tracking-widest uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}