import React, { useState } from "react";
import { motion } from "framer-motion";
import { Pill } from "lucide-react";

const tabs = ["All Products", "MDI Inhalers", "Oncology", "Critical Care", "Biologicals"];

const products = [
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "BD-ASMA 50mcg",
    spec: "Beclometasone Dipropionate · 200 Doses",
    desc:
      "Inhaled corticosteroid for mild asthma maintenance. Three strengths available — clinicians choose the right dose for each patient.",
    color: "#62C7F5",
  },
  {
    cat: "MDI Inhaler",
    tabKey: "MDI Inhalers",
    name: "BD-ASMA 250mcg",
    spec: "Beclometasone Dipropionate · 200 Doses",
    desc:
      "Higher-strength inhaled steroid for moderate-to-severe asthma. Proven, reliable, and accessible for long-term management.",
    color: "#62C7F5",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "PRABOPLATIN 150mg",
    spec: "Carboplatin Injection BP · 150mg/15ml",
    desc:
      "Cornerstone chemotherapy for lung, ovarian, and head & neck cancers. IV infusion after dilution.",
    color: "#0738A6",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "TOMAGIFEN 20mg",
    spec: "Tamoxifen Citrate Tablets USP · 10×10",
    desc:
      "Hormone therapy for ER-positive breast cancer. One of the most established cancer medicines available globally.",
    color: "#0738A6",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "PRACITABIN 500mg",
    spec: "Capecitabine Tablets USP · 10×10",
    desc:
      "Oral chemotherapy for breast and colorectal cancers. Easier to administer than IV therapy and equally effective.",
    color: "#0738A6",
  },
  {
    cat: "Oncology",
    tabKey: "Oncology",
    name: "SHO-PRA 10mg",
    spec: "Cisplatin Injection BP · 10mg/10ml Vial",
    desc:
      "One of the most widely used chemotherapy drugs globally — effective against testicular, bladder, lung, and ovarian cancers.",
    color: "#0738A6",
  },
];

export default function ProductRange() {
  const [active, setActive] = useState("All Products");
  const filtered =
    active === "All Products"
      ? products
      : products.filter((p) => p.tabKey === active);

  return (
    <section
      id="products"
      data-testid="product-range"
      className="py-20 md:py-28 bg-white"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="eyebrow">Our Products</span>
            <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
              Pharmaceutical Range
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              All pharmaceutical products manufactured to EU-GMP and WHO-GMP
              standards at certified partner facilities. Every batch tested.
              Every product documented.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto no-scrollbar">
          {tabs.map((t) => (
            <button
              key={t}
              data-testid={`product-tab-${t.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(t)}
              className={`px-4 md:px-5 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all ${
                active === t
                  ? "bg-[#0738A6] text-white shadow-[0_8px_24px_rgba(7,56,166,0.25)]"
                  : "bg-[#F7FAFD] text-[#12233D] hover:bg-[#E9EEF5] border border-[#E9EEF5]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              data-testid={`product-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-2xl p-7 flex flex-col"
            >
              <div className="aspect-[4/3] rounded-xl mb-5 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F7FAFD] to-[#E9EEF5]">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: `${p.color}1A` }}
                >
                  <Pill className="w-9 h-9" style={{ color: p.color }} />
                </div>
                <span
                  className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                  style={{ background: p.color }}
                >
                  {p.cat}
                </span>
              </div>
              <h3 className="font-display font-semibold text-[#12233D] text-[17px] leading-tight">
                {p.name}
              </h3>
              <div className="mt-1 text-[12px] text-[#0738A6] font-semibold">
                {p.spec}
              </div>
              <p className="mt-3 text-[#4B5563] text-[13.5px] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
