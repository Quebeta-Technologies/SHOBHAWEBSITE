import React from "react";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const groups = [
  {
    title: "Company",
    items: ["About Us", "What We Make", "Why Shobha", "Our Team", "Partners", "Global Presence"],
  },
  {
    title: "Therapeutic Areas",
    items: ["Critical Care", "Oncology", "MDI Inhalers", "Biologicals", "Nutraceuticals — Women", "Nutraceuticals — Men"],
  },
  {
    title: "Business",
    items: [
      "Partner With Us",
      "Distributor Inquiry",
      "Quality & Compliance",
      "Regulatory Affairs",
      "Ghana Network",
      "Product Catalogue",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#12233D] text-[#E9EEF5] relative"
    >
      <div className="container-x py-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="bg-white border border-white/10 rounded-2xl p-5 inline-flex">
            <Logo className="h-12 w-auto" />
          </div>
          <p className="mt-6 text-white/70 text-[14px] leading-relaxed max-w-md">
            A Dubai-based pharmaceutical manufacturer and exporter — making
            high-quality, affordable medicines available to people and
            healthcare systems across Africa, Asia, and the Middle East.
          </p>

          <div className="mt-7 space-y-3 text-[13.5px]">
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
              <span>Monday – Friday · 9:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#62C7F5] mb-5">
                {g.title}
              </h4>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-white/75 hover:text-white text-[13.5px] transition-colors"
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
        <div className="container-x py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-white/55 text-[12.5px]">
          <div>© 2026 Shobha Healthcare F.Z.E. All Rights Reserved.</div>
          <div className="inline-flex items-center gap-1.5">
            Made with
            <span className="text-[#E84D6C] text-base leading-none" aria-label="love">
              ❤
            </span>
            from
            <span className="font-display font-semibold text-white tracking-tight">
              Quebeta
            </span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
