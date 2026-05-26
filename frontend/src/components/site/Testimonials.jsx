import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Shobha Healthcare brings the kind of reliability that distribution partners value most — consistent quality, responsive coordination, and a clear understanding of market needs.",
    role: "Regional Distribution Partner",
  },
  {
    quote:
      "Their focus on accessible, high-impact product categories makes them a strong partner for institutions and distributors serving emerging healthcare markets.",
    role: "Institutional Healthcare Buyer",
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials"
      className="py-24 md:py-32 bg-white"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Trust Signals</span>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-[#12233D] tracking-tight leading-[1.08]">
            Trusted by Healthcare Partners in Growth Markets
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              data-testid={`testimonial-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-hover relative bg-[#F7FAFD] border border-[#E9EEF5] rounded-3xl p-9 md:p-11"
            >
              <div className="absolute top-7 right-9 font-display text-7xl text-[#0738A6]/15 leading-none">
                "
              </div>
              <p className="text-[#12233D] text-lg md:text-[19px] leading-relaxed font-display font-medium pr-12">
                {t.quote}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0738A6] flex items-center justify-center text-white font-display font-bold">
                  ★
                </div>
                <div className="text-[#4B5563] text-sm font-medium">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
