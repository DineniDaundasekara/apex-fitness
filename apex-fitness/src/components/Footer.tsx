import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const quickLinks = ["Home", "About", "Services", "Trainers", "Pricing", "Contact"];
const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#080808" }} className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gold flex items-center justify-center rounded-sm font-bebas text-black text-xl font-bold">
                A
              </div>
              <span className="font-bebas text-2xl tracking-widest text-white">APEX</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Transform your body and mind at our premium fitness facility. Join thousands who
              have already achieved their goals.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold transition-all duration-300 group"
                >
                  <Icon size={16} className="text-white/50 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-barlow font-700 text-white tracking-[0.2em] uppercase text-sm mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-white/50 text-sm font-barlow hover:text-gold transition-colors hover:translate-x-1 inline-flex transition-all duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-barlow font-700 text-white tracking-[0.2em] uppercase text-sm mb-5">
              Opening Hours
            </h4>
            <div className="flex flex-col gap-3">
              {[
                ["Monday - Friday", "5:00 AM – 11:00 PM"],
                ["Saturday", "6:00 AM – 10:00 PM"],
                ["Sunday", "7:00 AM – 9:00 PM"],
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/50 text-sm font-barlow">{day}</span>
                  <span className="text-gold text-sm font-barlow font-600">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-xs font-barlow">
          <p>© {new Date().getFullYear()} Apex Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}