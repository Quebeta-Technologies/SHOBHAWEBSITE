import React from "react";
import { motion } from "framer-motion";

const regions = [
  { icon: "🌍", name: "West Africa", note: "8 Countries" },
  { icon: "🌐", name: "East Africa", note: "Kenya & More" },
  { icon: "🌏", name: "Southeast Asia", note: "4 Countries" },
  { icon: "🕌", name: "Middle East", note: "UAE & GCC" },
];

const countries = [
  { flag: "🇬🇭", name: "Ghana" },
  { flag: "🇳🇬", name: "Nigeria" },
  { flag: "🇧🇯", name: "Benin" },
  { flag: "🇹🇬", name: "Togo" },
  { flag: "🇨🇮", name: "Ivory Coast" },
  { flag: "🇨🇲", name: "Cameroon" },
  { flag: "🇬🇦", name: "Gabon" },
  { flag: "🇲🇱", name: "Mali" },
  { flag: "🇳🇪", name: "Niger" },
  { flag: "🇹🇩", name: "Chad" },
  { flag: "🇨🇩", name: "DRC Congo" },
  { flag: "🇰🇪", name: "Kenya" },
  { flag: "🇰🇭", name: "Cambodia" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇱🇦", name: "Laos" },
  { flag: "🇲🇲", name: "Myanmar" },
  { flag: "🇦🇪", name: "UAE" },
];

export default function GlobalCountries() {
  return (
    <section
      id="global"
      data-testid="global-countries"
      className="py-20 md:py-28 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Global Presence</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Present in 20+ Countries Across 4 Continents
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            From pharmacies in Accra to clinics in Phnom Penh — our medicines
            reach the people who need them every single day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0738A6]/[0.07] flex items-center justify-center text-3xl">
                {r.icon}
              </div>
              <div>
                <div className="font-display font-semibold text-[#12233D] text-lg leading-tight">
                  {r.name}
                </div>
                <div className="text-[#4B5563] text-sm">{r.note}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white border border-[#E9EEF5] rounded-2xl p-6 md:p-8">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#0738A6] mb-5">
            Active Markets
          </div>
          <div className="flex flex-wrap gap-2.5">
            {countries.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F7FAFD] border border-[#E9EEF5] text-[#12233D] text-[13px] font-medium hover:bg-[#0738A6] hover:text-white hover:border-[#0738A6] transition-all cursor-default"
              >
                <span className="text-base">{c.flag}</span>
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
