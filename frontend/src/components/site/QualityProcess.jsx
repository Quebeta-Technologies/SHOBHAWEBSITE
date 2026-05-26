import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    color: "#0738A6",
    title: "Ingredient Sourcing",
    short: "Sourcing & Supplier Qualification",
    desc:
      "Approved, validated suppliers only. Every raw material tested with a Certificate of Analysis before entering the supply chain.",
  },
  {
    color: "#9DCD4A",
    title: "Internal QA Review",
    short: "QA & Dossier Review",
    desc:
      "Full chemical and microbiological review of every batch dossier. Production begins only after complete QA sign-off.",
  },
  {
    color: "#F2C14E",
    title: "GMP Manufacturing",
    short: "EU-GMP / WHO-GMP Production",
    desc:
      "EU-GMP and WHO-GMP certified facilities. MDI inhalers manufactured by Medisol Lifescience Pvt. Ltd., Valsad, Gujarat.",
  },
  {
    color: "#7A1F7A",
    title: "In-Process Checks",
    short: "Continuous Quality Checks",
    desc:
      "Multiple checkpoints at every critical stage — dose accuracy, sterility, formulation consistency, packaging integrity.",
  },
  {
    color: "#62C7F5",
    title: "Final Batch Release",
    short: "Final Sign-off & Documentation",
    desc:
      "Every batch receives final QA sign-off. Full documentation, COAs, and batch records available to partners on request.",
  },
  {
    color: "#E84D6C",
    title: "GDP Logistics",
    short: "Compliant Export & Delivery",
    desc:
      "GMP-compliant storage, cold-chain handling where required. Quality maintained all the way to your facility.",
  },
];

// 6 points along an SVG path
const NODE_POSITIONS = [
  { x: 80, y: 165 },
  { x: 250, y: 95 },
  { x: 420, y: 165 },
  { x: 590, y: 95 },
  { x: 760, y: 165 },
  { x: 930, y: 95 },
];

export default function QualityProcess() {
  const [active, setActive] = useState(0);
  const a = steps[active];

  return (
    <section
      data-testid="quality-process"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.03] blur-3xl pointer-events-none" />

      <div className="container-x">
        <div className="max-w-3xl mb-14 md:mb-16">
          <span className="eyebrow">Quality Process</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            From Raw Material to Your Shelf
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Our manufacturing process flows through six structured stages — tap
            any step on the wave to see what happens behind the scenes.
          </p>
        </div>

        {/* SVG Wave with nodes */}
        <div className="relative w-full overflow-x-auto no-scrollbar">
          <svg
            viewBox="0 0 1010 260"
            className="w-full min-w-[820px] h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0738A6" />
                <stop offset="20%" stopColor="#9DCD4A" />
                <stop offset="40%" stopColor="#F2C14E" />
                <stop offset="60%" stopColor="#7A1F7A" />
                <stop offset="80%" stopColor="#62C7F5" />
                <stop offset="100%" stopColor="#E84D6C" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Soft background wave */}
            <path
              d="M 0,180 C 120,180 130,80 250,80 C 370,80 380,180 500,180 C 620,180 630,80 750,80 C 870,80 880,180 1010,180"
              fill="none"
              stroke="#E9EEF5"
              strokeWidth="22"
              strokeLinecap="round"
            />

            {/* Animated colored wave */}
            <motion.path
              d="M 0,180 C 120,180 130,80 250,80 C 370,80 380,180 500,180 C 620,180 630,80 750,80 C 870,80 880,180 1010,180"
              fill="none"
              stroke="url(#waveGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Nodes */}
            {steps.map((s, i) => {
              const pos = NODE_POSITIONS[i];
              const isActive = active === i;
              return (
                <g
                  key={i}
                  data-testid={`quality-node-${i}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  style={{ cursor: "pointer" }}
                >
                  {/* outer pulse */}
                  {isActive && (
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r="32"
                      fill={s.color}
                      opacity="0.18"
                      initial={{ scale: 0.7, opacity: 0.4 }}
                      animate={{ scale: 1.1, opacity: 0.18 }}
                      transition={{
                        duration: 1.3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  )}
                  {/* main circle */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isActive ? 24 : 20}
                    fill="white"
                    stroke={s.color}
                    strokeWidth={isActive ? 4 : 3}
                    filter={isActive ? "url(#glow)" : undefined}
                    style={{ transition: "all .35s" }}
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 5}
                    textAnchor="middle"
                    fontFamily="Poppins, sans-serif"
                    fontSize="14"
                    fontWeight="700"
                    fill={s.color}
                  >
                    {i + 1}
                  </text>

                  {/* label above/below */}
                  <text
                    x={pos.x}
                    y={pos.y < 130 ? pos.y - 38 : pos.y + 48}
                    textAnchor="middle"
                    fontFamily="Poppins, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                    fill={isActive ? s.color : "#12233D"}
                    style={{ transition: "fill .3s" }}
                  >
                    {s.title}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail panel */}
        <div className="mt-10 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 shadow-[0_18px_50px_rgba(7,56,166,0.08)] relative overflow-hidden"
              style={{ borderColor: `${a.color}30` }}
            >
              <div
                className="absolute top-0 left-0 h-1 w-full"
                style={{ background: a.color }}
              />
              <div
                className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full blur-3xl"
                style={{ background: `${a.color}15` }}
              />
              <div className="relative grid lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-3">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-3xl text-white shadow-lg"
                    style={{ background: a.color }}
                  >
                    {active + 1}
                  </div>
                  <div
                    className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: a.color }}
                  >
                    Stage {active + 1} of 6
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display font-semibold text-[#12233D] text-xl md:text-2xl tracking-tight">
                    {a.short}
                  </h3>
                  <p className="mt-3 text-[#4B5563] text-[15.5px] leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile-friendly step pills */}
          <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  active === i
                    ? "text-white shadow-md"
                    : "bg-[#F7FAFD] text-[#12233D] border border-[#E9EEF5]"
                }`}
                style={
                  active === i ? { background: s.color } : undefined
                }
              >
                {i + 1}. {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
