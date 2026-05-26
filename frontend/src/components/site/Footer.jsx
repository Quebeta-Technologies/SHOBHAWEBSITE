import React from "react";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const groups = [
  {
    title: "Quick Links",
    items: ["Home", "About Us", "Why Shobha", "Global Presence", "Partners", "Contact Us"],
  },
  {
    title: "Our Divisions",
    items: [
      "Pharmaceuticals",
      "Nutraceuticals",
      "Oncology",
      "MDI Inhalers",
      "Critical Care",
      "Biologicals & Biosimilars",
    ],
  },
  {
    title: "Business & Support",
    items: [
      "Partner With Us",
      "Export Business",
      "Quality & Compliance",
      "Regulatory Affairs",
      "Institutional Supply",
      "FAQ",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#12233D] text-[#E9EEF5] relative"
    >
      <div className="container-x py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 inline-flex">
            <Logo className="h-12 w-auto" />
          </div>
          <p className="mt-6 text-white/70 text-[15px] leading-relaxed max-w-md">
            Shobha Healthcare is a Dubai-based pharmaceutical and nutraceutical
            company focused on delivering trusted, accessible, and
            quality-driven healthcare solutions across emerging markets through
            strong partnerships, specialist product categories, and global
            supply capability.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#62C7F5]" />
              <span>Dubai, United Arab Emirates</span>
            </div>
            <a
              href="tel:+971585937521"
              className="flex items-center gap-3 hover:text-white"
            >
              <Phone className="w-4 h-4 text-[#62C7F5]" />
              <span>+971 58 593 7521</span>
            </a>
            <a
              href="mailto:prarthana.m@outlook.com"
              className="flex items-center gap-3 hover:text-white"
            >
              <Mail className="w-4 h-4 text-[#62C7F5]" />
              <span>prarthana.m@outlook.com</span>
            </a>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#62C7F5]" />
              <span>Monday to Friday · 9:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#62C7F5] mb-5">
                {g.title}
              </h4>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-white/75 hover:text-white text-[14px] transition-colors"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-white/55 text-[13px]">
          <div>© 2026 Shobha Healthcare. All Rights Reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>
        <div className="container-x pb-6 text-[12px] text-white/40 max-w-3xl">
          Product availability may vary by country and is subject to local
          regulatory approval and registration requirements.
        </div>
      </div>
    </footer>
  );
}
