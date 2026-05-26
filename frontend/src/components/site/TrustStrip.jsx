import React from "react";
import { motion } from "framer-motion";

export default function TrustStrip({ items }) {
  if (!items?.length) return null;
  return (
    <section
      data-testid="trust-strip"
      className="bg-[#F7FAFD] border-y border-[#E9EEF5]"
    >
      <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E9EEF5]">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="px-6 md:px-8 py-8 md:py-10 text-left"
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-[#0738A6] tracking-tight">
              {it.value}
            </div>
            <div className="mt-1.5 text-[#4B5563] text-sm md:text-[15px] leading-snug">
              {it.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
