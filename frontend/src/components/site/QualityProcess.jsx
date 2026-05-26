import React from "react";
import { motion } from "framer-motion";

const STEP_COLORS = [
  "#0738A6",
  "#9DCD4A",
  "#F2C14E",
  "#7A1F7A",
  "#62C7F5",
  "#E84D6C",
];

const steps = [
  {
    title: "Ingredient Sourcing & Supplier Qualification",
    desc:
      "Approved, validated suppliers only. Every raw material tested with a Certificate of Analysis before entering the supply chain.",
  },
  {
    title: "Internal QA & Dossier Review",
    desc:
      "Full chemical and microbiological review. Production begins only after complete QA sign-off.",
  },
  {
    title: "GMP Manufacturing",
    desc:
      "EU-GMP and WHO-GMP certified facilities. MDI inhalers manufactured by Medisol Lifescience Pvt. Ltd., Gujarat.",
  },
  {
    title: "In-Process Quality Checks",
    desc:
      "Multiple checkpoints at every critical stage — dose accuracy, sterility, formulation consistency, packaging integrity.",
  },
  {
    title: "Final Batch Release",
    desc:
      "Every batch receives final QA sign-off. Full documentation available to partners on request.",
  },
  {
    title: "GDP-Compliant Export & Logistics",
    desc:
      "GMP-compliant storage, cold-chain handling where required. Quality maintained all the way to your facility.",
  },
];

export default function QualityProcess() {
  return (
    <section
      data-testid="quality-process"
      className="py-20 md:py-28 bg-white"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Quality Process</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            From Raw Material to Your Shelf
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Our manufacturing process is structured, documented, and verified
            at every stage — each step signed off before the next begins.
          </p>
        </div>

        <div className="relative">
          {/* connector line on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-[#E9EEF5]" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                data-testid={`quality-step-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="relative"
              >
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl text-white flex items-center justify-center font-display font-bold text-lg shadow-[0_10px_24px_rgba(7,56,166,0.18)]"
                  style={{ background: STEP_COLORS[i % STEP_COLORS.length] }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-5 font-display font-semibold text-[#12233D] text-[16px] leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[#4B5563] text-[14px] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
