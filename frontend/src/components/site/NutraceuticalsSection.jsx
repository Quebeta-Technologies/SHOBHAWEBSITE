import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Leaf, Microscope, FileText, Pill } from "lucide-react";

const standards = [
  {
    icon: FlaskConical,
    title: "GMP Manufacturing",
    desc: "Same rigorous standards as our pharmaceutical medicines — applied to every supplement.",
  },
  {
    icon: Leaf,
    title: "Ingredient Purity",
    desc: "Sourced from validated suppliers only. Every raw material tested before production begins.",
  },
  {
    icon: Microscope,
    title: "Internal Quality Assurance",
    desc: "Microbiological and chemical checks on every batch before packaging or shipping.",
  },
  {
    icon: FileText,
    title: "Honest, Clear Labelling",
    desc: "Full transparency — clearly stated ingredients, clearly stated doses. Always.",
  },
];

const womens = [
  { tag: "Women's Health", name: "WOMEN FLORA", spec: "Probiotic & Flora Support · 60 Caps", desc: "60 billion CFU, 60 unique strains — for vaginal flora balance, gut health, and daily immune function." },
  { tag: "Women's Health", name: "HEALTHY BONES", spec: "Calcium + D3 + K2 · 60 Tabs", desc: "Three nutrients working together — calcium builds density, D3 aids absorption, K2 directs it to the right place." },
  { tag: "Women's Health", name: "IRON PLUS", spec: "High-Absorption Iron · 3×10 Caps", desc: "Gentle, high-absorption iron — tackles tiredness and anaemia without stomach discomfort." },
];

const mens = [
  { tag: "Men's Health", name: "HEALTHY PROSTATE", spec: "Prostate & Urinary Support · 60 Tabs", desc: "Saw palmetto, zinc, and lycopene for healthy prostate function and normal urinary flow." },
  { tag: "Men's Health", name: "A-Z COMPLETE", spec: "Complete Multivitamin · 3×10 Caps", desc: "Every essential vitamin and mineral for daily energy, immunity, and overall health — from A all the way to Z." },
  { tag: "Men's Health", name: "NEUROGOLD", spec: "Brain & Cognitive Support · 60 Tabs", desc: "B-vitamins and cognitive support nutrients to stay sharp, focused, and mentally clear — even when life is demanding." },
];

function ProductCard({ p, accent }) {
  return (
    <motion.div
      data-testid={`nutra-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="card-hover bg-white border border-[#E9EEF5] rounded-2xl p-7 flex flex-col"
    >
      <div className="aspect-[4/3] rounded-xl mb-5 relative overflow-hidden bg-gradient-to-br from-[#F7FAFD] to-[#E9EEF5] flex items-center justify-center">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ background: `${accent}1A` }}
        >
          <Pill className="w-9 h-9" style={{ color: accent }} />
        </div>
        <span
          className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
          style={{ background: accent }}
        >
          {p.tag}
        </span>
      </div>
      <h3 className="font-display font-semibold text-[#12233D] text-[17px] leading-tight">
        {p.name}
      </h3>
      <div className="mt-1 text-[12px] font-semibold" style={{ color: accent }}>
        {p.spec}
      </div>
      <p className="mt-3 text-[#4B5563] text-[13.5px] leading-relaxed">{p.desc}</p>
    </motion.div>
  );
}

export default function NutraceuticalsSection() {
  return (
    <section
      id="nutraceuticals"
      data-testid="nutraceuticals"
      className="py-20 md:py-28 bg-gradient-to-b from-[#F7FAFD] to-white"
    >
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="eyebrow">Nutraceuticals</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Supplements You Can Actually Trust
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Every Essential product is made to GMP manufacturing standards
            with pure, validated ingredients. High standard, always.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {standards.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-white border border-[#E9EEF5] rounded-2xl p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-[#9DCD4A]/15 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-[#5e8722]" />
              </div>
              <h4 className="font-display font-semibold text-[#12233D] text-[15px] mb-2">
                {s.title}
              </h4>
              <p className="text-[#4B5563] text-[13.5px] leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Women's Health */}
        <div className="grid lg:grid-cols-12 gap-8 mb-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Women's Health</span>
            <h3 className="mt-3 font-display font-semibold text-[#12233D] text-xl md:text-2xl lg:text-[28px] tracking-tight leading-[1.2]">
              Every Woman Deserves to Feel Her Best — Every Single Day
            </h3>
          </div>
          <p className="lg:col-span-5 text-[#4B5563] text-[14.5px] leading-relaxed">
            Women's nutritional needs are specific and change through life
            stages. Our women's range is built with that complexity in mind —
            clean, properly-dosed, trustworthy formulations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {womens.map((p) => (
            <ProductCard key={p.name} p={p} accent="#E84D6C" />
          ))}
        </div>

        {/* Men's Health */}
        <div className="grid lg:grid-cols-12 gap-8 mb-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Men's Health</span>
            <h3 className="mt-3 font-display font-semibold text-[#12233D] text-xl md:text-2xl lg:text-[28px] tracking-tight leading-[1.2]">
              Your Health Is Your Greatest Strength — Invest in It
            </h3>
          </div>
          <p className="lg:col-span-5 text-[#4B5563] text-[14.5px] leading-relaxed">
            From prostate health to mental sharpness, strong joints to
            cardiovascular support — our men's range covers what matters most.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mens.map((p) => (
            <ProductCard key={p.name} p={p} accent="#0738A6" />
          ))}
        </div>
      </div>
    </section>
  );
}
