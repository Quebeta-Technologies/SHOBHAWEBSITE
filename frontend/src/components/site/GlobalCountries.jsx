import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const regions = [
  { icon: "🌍", name: "West Africa", note: "8 Countries", color: "#9DCD4A", bg: "rgba(157,205,74,0.18)" },
  { icon: "🌐", name: "East Africa", note: "Kenya & More", color: "#F2C14E", bg: "rgba(242,193,78,0.22)" },
  { icon: "🌏", name: "Southeast Asia", note: "4 Countries", color: "#62C7F5", bg: "rgba(98,199,245,0.20)" },
  { icon: "🕌", name: "Middle East", note: "UAE & GCC", color: "#7A1F7A", bg: "rgba(122,31,122,0.12)" },
];

const countries = [
  { flag: "🇦🇪", name: "UAE", region: "Middle East" },
  { flag: "🇬🇭", name: "Ghana", region: "West Africa" },
  { flag: "🇳🇬", name: "Nigeria", region: "West Africa" },
  { flag: "🇧🇯", name: "Benin", region: "West Africa" },
  { flag: "🇹🇬", name: "Togo", region: "West Africa" },
  { flag: "🇨🇮", name: "Côte d'Ivoire", region: "West Africa" },
  { flag: "🇨🇲", name: "Cameroon", region: "West Africa" },
  { flag: "🇬🇦", name: "Gabon", region: "Central Africa" },
  { flag: "🇲🇱", name: "Mali", region: "West Africa" },
  { flag: "🇳🇪", name: "Niger", region: "West Africa" },
  { flag: "🇹🇩", name: "Chad", region: "Central Africa" },
  { flag: "🇨🇩", name: "DRC Congo", region: "Central Africa" },
  { flag: "🇰🇪", name: "Kenya", region: "East Africa" },
  { flag: "🇰🇭", name: "Cambodia", region: "Southeast Asia" },
  { flag: "🇵🇭", name: "Philippines", region: "Southeast Asia" },
  { flag: "🇱🇦", name: "Laos", region: "Southeast Asia" },
  { flag: "🇲🇲", name: "Myanmar", region: "Southeast Asia" },
];

function CountryCard({ c }) {
  return (
    <div className="mx-3 group">
      <div className="relative w-[200px] h-[200px] rounded-2xl bg-white border border-[#E9EEF5] flex flex-col items-center justify-center p-5 transition-all duration-500 hover:border-[#0738A6]/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(7,56,166,0.15)] cursor-default overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0738A6]/[0.02] via-transparent to-[#9DCD4A]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="text-[72px] leading-none mb-3 transition-transform duration-500 group-hover:scale-110 select-none">
          {c.flag}
        </div>
        <div className="font-display font-semibold text-[#12233D] text-[16px] tracking-tight text-center">
          {c.name}
        </div>
        <div className="mt-1 text-[11px] text-[#4B5563] uppercase tracking-widest font-semibold">
          {c.region}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0738A6] via-[#9DCD4A] to-[#F2C14E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
}

export default function GlobalCountries() {
  return (
    <section
      id="global"
      data-testid="global-countries"
      className="py-20 md:py-28 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#62C7F5]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#9DCD4A]/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-2xl p-6 flex items-center gap-4"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: r.bg }}
              >
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
      </div>

      {/* Country flag carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-44 z-10 bg-gradient-to-r from-[#F7FAFD] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-44 z-10 bg-gradient-to-l from-[#F7FAFD] to-transparent pointer-events-none" />

        <Marquee gradient={false} speed={40} pauseOnHover>
          {countries.map((c, i) => (
            <CountryCard key={`row1-${i}`} c={c} />
          ))}
        </Marquee>

        <div className="h-4" />

        <Marquee gradient={false} speed={30} direction="right" pauseOnHover>
          {[...countries].reverse().map((c, i) => (
            <CountryCard key={`row2-${i}`} c={c} />
          ))}
        </Marquee>
      </div>

      <div className="container-x text-center mt-12">
        <div className="text-[12px] font-bold tracking-[0.22em] uppercase text-[#0738A6]">
          17+ Active Markets · Always Growing
        </div>
      </div>
    </section>
  );
}
