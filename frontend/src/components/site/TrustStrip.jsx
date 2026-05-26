import React from "react";
import { motion } from "framer-motion";
import { Globe2, Package, ShieldCheck, BadgeCheck, MapPin } from "lucide-react";

const ICONS = {
  countries: Globe2,
  products: Package,
  eugmp: ShieldCheck,
  who: BadgeCheck,
  uae: MapPin,
};

const defaultIcons = ["countries", "products", "eugmp", "who"];

export default function TrustStrip({ items }) {
  if (!items?.length) return null;

  return (
    <section
      data-testid="trust-strip"
      className="relative bg-white border-b border-[#E9EEF5] -mt-px"
    >
      {/* Lift the strip slightly over hero edge for that premium feel */}
      <div className="container-x">
        <div className="relative -mt-10 md:-mt-14 z-10 bg-white border border-[#E9EEF5] rounded-2xl shadow-[0_24px_60px_rgba(7,56,166,0.08)] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E9EEF5]">
            {items.map((it, i) => {
              const Icon = ICONS[it.icon] || ICONS[defaultIcons[i]] || Package;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4 px-5 md:px-7 py-6 md:py-7 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#0738A6]/[0.07] flex items-center justify-center group-hover:bg-[#0738A6] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#0738A6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-[22px] md:text-[26px] font-bold text-[#12233D] tracking-tight leading-none">
                      {it.value}
                    </div>
                    <div className="mt-1.5 text-[#4B5563] text-[12.5px] md:text-[13px] leading-snug">
                      {it.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-10 md:h-14" />
    </section>
  );
}
