import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Menu, X, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Pharmaceuticals", href: "#what-we-do" },
  { label: "Nutraceuticals", href: "#what-we-do" },
  { label: "Why Shobha", href: "#why" },
  { label: "Global Presence", href: "#global" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E9EEF5]"
    >
      {/* Utility bar */}
      <div className="bg-[#12233D] text-[#E9EEF5] text-[12px]">
        <div className="container-x flex items-center justify-between py-2.5 gap-4">
          <div className="flex items-center gap-5 min-w-0">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#62C7F5]" />
              Dubai, UAE
            </span>
            <span className="hidden lg:inline-flex items-center gap-2 truncate">
              <span className="text-[#62C7F5]">|</span>
              Global Pharmaceutical &amp; Nutraceutical Export Partner
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              data-testid="utility-phone"
              href="tel:+971585937521"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+971 58 593 7521</span>
            </a>
            <a
              data-testid="utility-email"
              href="mailto:prarthana.m@outlook.com"
              className="hidden md:inline-flex items-center gap-1.5 hover:text-white"
            >
              <Mail className="w-3.5 h-3.5" />
              prarthana.m@outlook.com
            </a>
            <div className="hidden xl:flex items-center gap-3 text-[11px]">
              <a href="#contact" className="hover:text-white">
                Business Enquiries
              </a>
              <span className="opacity-30">·</span>
              <a href="#why" className="hover:text-white">
                Regulatory Support
              </a>
              <span className="opacity-30">·</span>
              <a href="#contact" className="hover:text-white">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x flex items-center justify-between py-4 gap-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              href={l.href}
              className="text-[14px] font-medium text-[#12233D] hover:text-[#0738A6] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0738A6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            data-testid="header-cta-partner"
            href="#contact"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Partner With Us
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#12233D]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E9EEF5] bg-white">
          <div className="container-x py-5 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[#12233D] font-medium hover:text-[#0738A6] border-b border-[#E9EEF5] last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center mt-2"
            >
              Partner With Us
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
