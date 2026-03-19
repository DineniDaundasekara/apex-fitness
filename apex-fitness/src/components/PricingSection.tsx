"use client";
import { useScrollAnimation } from "./useScrollAnimation";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 49,
    label: "Perfect for Beginners",
    features: [
      "24/7 Gym Access",
      "All Equipment Access",
      "Locker & Shower",
      "Free WiFi",
      "Mobile App Access",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Elite",
    price: 89,
    label: "Most Popular",
    features: [
      "Everything in Starter",
      "Unlimited Group Classes",
      "2 Personal Training Sessions",
      "Nutrition Consultation",
      "Recovery Zone Access",
      "Guest Passes (1/month)",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Champion",
    price: 149,
    label: "For Serious Athletes",
    features: [
      "Everything in Elite",
      "8 Personal Training Sessions",
      "Custom Meal Plan",
      "Priority Booking",
      "Massage Therapy",
      "Guest Passes (2/month)",
    ],
    popular: false,
    cta: "Get Started",
  },
];

export default function PricingSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="pricing"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-primary)" }}
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
            <span className="font-barlow text-gold text-sm tracking-[0.3em] uppercase">Membership Options</span>
            <span className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-none">
            <span className="text-primary-text">MEMBERSHIP </span>
            <span className="text-gold">PLANS</span>
          </h2>
          <p className="text-secondary-text max-w-xl mx-auto mt-4">
            Choose the plan that fits your lifestyle and fitness goals. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 relative transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                plan.popular
                  ? "bg-gold border border-gold"
                  : "card-dark"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-gold font-barlow text-xs font-700 tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-gold/30">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-bebas text-3xl tracking-wider mb-1 ${plan.popular ? "text-black" : "text-primary-text"}`}>
                  {plan.name}
                </h3>
                <p className={`font-barlow text-sm tracking-wide ${plan.popular ? "text-black/70" : "text-secondary-text"}`}>
                  {plan.label}
                </p>
              </div>

              <div className="mb-8">
                <span className={`font-bebas text-6xl ${plan.popular ? "text-black" : "text-gold"}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.popular ? "text-black/60" : "text-secondary-text/60"}`}>/month</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <Check
                      size={16}
                      className={`flex-shrink-0 ${plan.popular ? "text-black" : "text-gold"}`}
                    />
                    <span className={`text-sm font-barlow ${plan.popular ? "text-black" : "text-secondary-text"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-4 rounded-sm font-barlow font-700 tracking-widest uppercase text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-black text-gold hover:bg-black/80"
                    : "btn-gold"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}