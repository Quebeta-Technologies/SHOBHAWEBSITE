import React from "react";
import { motion } from "framer-motion";
import { Globe2, Pill, Hospital, Factory } from "lucide-react";

const partners = [
  {
    icon: Globe2,
    name: "Shobha Global",
    desc: "International operations partner supporting global expansion and market access strategy",
  },
  {
    icon: Pill,
    name: "Trident Pharmaceuticals",
    desc: "Distribution collaborator strengthening supply chain capabilities and product portfolio",
  },
  {
    icon: Hospital,
    name: "TIL Healthcare",
    desc: "Healthcare collaborator with strong institutional pharmaceutical supply network",
  },
  {
    icon: Factory,
    name: "Medisol Lifescience",
    desc: "EU-GMP & WHO-GMP certified manufacturing partner — Valsad, Gujarat, India",
  },
];

export default function PartnersSection() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="py-20 md:py-28 bg-[#F7FAFD]"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Our Partners</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Partners Who Share Our Vision
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            We grow with our partners — these are the organisations that help
            us turn good products into real healthcare outcomes across the
            world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              data-testid={`partner-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#62C7F5]/15 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-[#0738A6]" />
              </div>
              <h3 className="font-display font-semibold text-[#12233D] text-[16px] mb-2 leading-snug">
                {p.name}
              </h3>
              <p className="text-[#4B5563] text-[13px] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
