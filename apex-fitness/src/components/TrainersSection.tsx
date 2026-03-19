"use client";
import { useScrollAnimation } from "./useScrollAnimation";
import { Instagram, Facebook, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Marcus Steel",
    role: "Strength & Conditioning Specialist",
    experience: "8 Years Experience",
    img: "https://images.unsplash.com/photo-1534308143439-3820e5f58a2b?w=400&q=80",
  },
  {
    name: "Sofia Rivera",
    role: "Flexibility & Mindfulness Coach",
    experience: "6 Years Experience",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  },
  {
    name: "Jake Thompson",
    role: "Combat Sports Expert",
    experience: "10 Years Experience",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e6349?w=400&q=80",
  },
  {
    name: "Emma Clarke",
    role: "Certified Nutritionist",
    experience: "7 Years Experience",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
  },
];

export default function TrainersSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="trainers"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-gold/50" />
            <span className="font-barlow text-gold text-sm tracking-[0.3em] uppercase">Expert Guidance</span>
            <span className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-none">
            <span className="text-primary-text">MEET OUR </span>
            <span className="text-gold">TRAINERS</span>
          </h2>
          <p className="text-secondary-text max-w-xl mx-auto mt-4">
            Our certified fitness professionals are here to guide you every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <div
              key={trainer.name}
              className={`group card-dark rounded-xl overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
                
                {/* Social icons overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {[Instagram, Facebook, Twitter].map((Icon, j) => (
                    <button
                      key={j}
                      className="w-9 h-9 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                    >
                      <Icon size={14} className="text-black" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-barlow font-700 text-primary-text text-lg tracking-wide">{trainer.name}</h3>
                <p className="text-gold text-sm font-barlow tracking-wide mt-0.5">{trainer.role}</p>
                <p className="text-secondary-text/60 text-xs mt-1">{trainer.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}