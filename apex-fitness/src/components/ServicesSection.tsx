"use client";
import { useScrollAnimation } from "./useScrollAnimation";
import { Dumbbell, Users, Heart, Zap, Apple, Leaf } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your specific fitness goals with certified trainers.",
  },
  {
    icon: Users,
    title: "Group Classes",
    desc: "Dynamic group workouts including HIIT, yoga, spinning, and strength training.",
  },
  {
    icon: Heart,
    title: "Cardio Training",
    desc: "State-of-the-art cardio equipment for endurance building and heart health.",
  },
  {
    icon: Dumbbell,
    title: "Strength Zone",
    desc: "Premium weight training area with free weights and resistance machines.",
  },
  {
    icon: Apple,
    title: "Nutrition Support",
    desc: "Personalized meal plans and nutritional guidance from certified dietitians.",
  },
  {
    icon: Leaf,
    title: "Locker & Recovery",
    desc: "Premium locker rooms with sauna, steam room, and recovery facilities.",
  },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-gold/50" />
            <span className="font-barlow text-gold text-sm tracking-[0.3em] uppercase">What We Offer</span>
            <span className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-none">
            <span className="text-primary-text">PREMIUM </span>
            <span className="text-gold">SERVICES</span>
          </h2>
          <p className="text-secondary-text max-w-xl mx-auto mt-4 leading-relaxed">
            Discover our comprehensive range of fitness services designed to help you achieve your
            goals with expert guidance and premium facilities.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card-dark rounded-xl p-7 group cursor-default transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-black" />
                </div>

                <h3 className="font-barlow font-700 text-primary-text text-lg tracking-wide uppercase mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed mb-4">{service.desc}</p>

                <button className="text-gold text-sm font-barlow font-600 tracking-wider uppercase flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-10 py-4 rounded-sm text-base tracking-widest"
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}