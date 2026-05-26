import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Make", href: "#what-we-make" },
  { label: "Products", href: "#products" },
  { label: "Why Shobha", href: "#why" },
  { label: "Global", href: "#global" },
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
      <div className="bg-[#12233D] text-[#E9EEF5] text-[11.5px]">
        <div className="container-x flex items-center justify-between py-1.5 gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#62C7F5]" />
              +971 58 593 7521
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#62C7F5]" />
              prarthana.m@outlook.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#62C7F5]" />
              Dubai, UAE
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1 text-white/85">
              <ShieldCheck className="w-3 h-3 text-[#9DCD4A]" />
              EU-GMP Certified
            </span>
            <span className="opacity-30">·</span>
            <span className="inline-flex items-center gap-1 text-white/85">
              <ShieldCheck className="w-3 h-3 text-[#62C7F5]" />
              WHO-GMP Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x flex items-center justify-between py-3 gap-6">
        <Logo className="h-11 w-auto" />

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              href={l.href}
              className="text-[13.5px] font-medium text-[#12233D] hover:text-[#0738A6] transition-colors relative group"
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
            className="hidden md:inline-flex btn-primary text-[13px] !py-2.5 !px-5"
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
          <div className="container-x py-4 flex flex-col gap-2">
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
