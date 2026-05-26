import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Shobha has been a reliable partner for us in Ghana. Their MDI inhalers are consistently good quality and we can actually afford to stock them in volume. That matters a lot in our market.",
    role: "Distribution Partner",
    location: "Accra, Ghana",
  },
  {
    quote:
      "What we appreciate most is that they follow through. Products arrive on time, quality is consistent, and their team is easy to work with. That's rare to find in pharmaceutical supply.",
    role: "Hospital Procurement Manager",
    location: "Nairobi, Kenya",
  },
];

export default function Testimonials() {
  return (
    <section data-testid="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">What People Say</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            Trusted Across Our Markets
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={i}
              data-testid={`testimonial-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-hover relative bg-[#F7FAFD] border border-[#E9EEF5] rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-1 text-[#F2C14E] mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[#12233D] text-[16px] md:text-[17px] leading-relaxed font-display font-medium">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-5 border-t border-[#E9EEF5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0738A6] text-white flex items-center justify-center font-display font-bold text-sm">
                  ★
                </div>
                <div>
                  <div className="text-[#12233D] font-semibold text-sm">
                    {t.role}
                  </div>
                  <div className="text-[#4B5563] text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
