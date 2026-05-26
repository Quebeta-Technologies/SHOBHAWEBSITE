import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Sprout,
  DollarSign,
  ClipboardCheck,
  Globe,
  Handshake,
} from "lucide-react";

const items = [
  {
    icon: Factory,
    title: "EU-GMP & WHO-GMP Certified",
    desc:
      "Our manufacturing partner facilities meet the highest international benchmarks. Every batch tested and documented to the same level as medicines produced for European markets. Verified, certifiable, consistent.",
  },
  {
    icon: Sprout,
    title: "Pure Ingredients. Rigorous Standards.",
    desc:
      "Every raw material comes from approved, validated suppliers. Every ingredient is tested before production begins. What is on the label is exactly what is inside — transparent, traceable, and trustworthy.",
  },
  {
    icon: DollarSign,
    title: "Affordable and Accessible",
    desc:
      "We structure our supply chain to keep costs lean — working directly with certified manufacturers — so quality medicines remain genuinely accessible to the people and healthcare systems we serve.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Expertise in Every Market",
    desc:
      "Our regulatory affairs team manages product dossiers, import approvals, and compliance documentation across all 20+ markets. Your supply chain stays compliant. We take care of the regulatory complexity.",
  },
  {
    icon: Globe,
    title: "Present on the Ground, Every Day",
    desc:
      "In Ghana alone: 15 medical representatives, 12 sales professionals, 6 supply vans, and reach into 1,850+ pharmacies and 450+ hospitals. Real infrastructure. Real presence. Real people every day.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships, Built for Growth",
    desc:
      "Our founder personally co-owns distribution companies in Ghana. When our partners succeed, we succeed. We are committed to the long haul — investing in shared growth that lasts.",
  },
];

export default function WhatSetsApart() {
  return (
    <section
      id="why"
      data-testid="why-shobha"
      className="py-20 md:py-28 bg-[#F7FAFD] relative overflow-hidden"
    >
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-[#0738A6]/[0.03] blur-3xl pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow">Why Shobha?</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            What Sets Shobha Apart
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed max-w-2xl">
            We invite you to look at exactly what makes us different — in
            practice, in process, and in partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              data-testid={`apart-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0738A6] text-white flex items-center justify-center">
                  <it.icon className="w-6 h-6" />
                </div>
                <span className="font-display font-bold text-[#E9EEF5] text-3xl leading-none">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-[#12233D] text-[18px] mb-2.5 leading-snug">
                {it.title}
              </h3>
              <p className="text-[#4B5563] text-[14px] leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
