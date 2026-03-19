"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" onClick={() => handleNavClick("Home", "#home")}>
          {/* Replace with actual logo: <Image src="/logo.png" alt="APEX" width={120} height={40} /> */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gold flex items-center justify-center rounded-sm font-bebas text-black text-xl font-bold">
              A
            </div>
            <span className="font-bebas text-2xl tracking-widest text-white group-hover:text-gold transition-colors">
              APEX
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.label, link.href)}
                className={`font-barlow text-sm font-500 tracking-widest uppercase transition-all duration-200 relative group ${
                  active === link.label ? "text-gold" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    active === link.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("Contact", "#contact")}
            className="btn-gold px-6 py-2.5 rounded-sm text-sm tracking-widest"
          >
            Join Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-dark-100 border-t border-gold/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.label, link.href)}
              className={`font-barlow text-sm tracking-widest uppercase text-left py-2 border-b border-white/5 ${
                active === link.label ? "text-gold" : "text-white/80"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("Contact", "#contact")}
            className="btn-gold px-6 py-3 rounded-sm text-sm tracking-widest mt-2"
          >
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}