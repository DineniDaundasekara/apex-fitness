"use client";
import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Mon - Sat, 6AM - 10PM",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "We'll respond within 24hrs",
    value: "info@apexfitness.com",
    href: "mailto:info@apexfitness.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    subtitle: "Come for a free tour",
    value: "2450 Fitness Blvd, Downtown, CA 90210",
    href: "#",
  },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";

  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";

  return errors;
}

export default function ContactSection() {
  const { ref, visible } = useScrollAnimation();
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-gold/50" />
            <span className="font-barlow text-gold text-sm tracking-[0.3em] uppercase">Get In Touch</span>
            <span className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-none mb-4">
            <span className="text-white">READY TO </span>
            <span className="text-gold">TRANSFORM</span>
            <span className="text-white"> YOUR BODY?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            Join our community of champions. Whether you&apos;re curious about memberships,
            personal training, or just want to visit our facility — we&apos;re here to help.
          </p>
        </div>

        {/* Contact info cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {contactInfo.map(({ icon: Icon, title, subtitle, value, href }) => (
            <a
              key={title}
              href={href}
              className="card-dark rounded-xl p-7 flex gap-5 items-start group"
            >
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <Icon size={20} className="text-gold group-hover:text-black transition-colors" />
              </div>
              <div>
                <h4 className="font-barlow font-700 text-white tracking-wide uppercase text-sm mb-1">{title}</h4>
                <p className="text-white/40 text-xs mb-2">{subtitle}</p>
                <p className="text-gold text-sm font-barlow font-600">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="card-dark rounded-2xl p-8 md:p-10">
            <h3 className="font-bebas text-3xl text-white tracking-wider mb-1">Send Us a Message</h3>
            <p className="text-white/50 text-sm mb-8">Fill out the form and our team will get back to you shortly.</p>

            {/* Success message */}
            {status === "success" && (
              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm font-barlow">
                  Message sent successfully! We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              {/* Name */}
              <div>
                <label className="font-barlow text-sm text-white/70 uppercase tracking-widest mb-2 block">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`input-dark w-full px-4 py-3.5 rounded-lg text-sm ${
                    errors.name ? "border-red-500/60" : ""
                  }`}
                  disabled={status === "loading"}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-barlow text-sm text-white/70 uppercase tracking-widest mb-2 block">
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`input-dark w-full px-4 py-3.5 rounded-lg text-sm ${
                    errors.email ? "border-red-500/60" : ""
                  }`}
                  disabled={status === "loading"}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="font-barlow text-sm text-white/70 uppercase tracking-widest mb-2 block">
                  Your Message <span className="text-gold">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your fitness goals and how we can help..."
                  className={`input-dark w-full px-4 py-3.5 rounded-lg text-sm resize-none ${
                    errors.message ? "border-red-500/60" : ""
                  }`}
                  disabled={status === "loading"}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-gold w-full py-4 rounded-lg text-base tracking-widest flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}