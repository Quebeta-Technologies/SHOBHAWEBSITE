import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  FlaskConical,
} from "lucide-react";

export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides?.length) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(t);
  }, [slides]);

  if (!slides?.length) return null;
  const slide = slides[index];

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden bg-white"
    >
      {/* background pattern */}
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#62C7F5]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#0738A6]/10 blur-3xl pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-16 py-16 md:py-24 lg:py-28 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7FAFD] border border-[#E9EEF5] mb-7">
                <span className="w-2 h-2 rounded-full bg-[#9DCD4A] animate-shine" />
                <span className="eyebrow text-[11px]">{slide.eyebrow}</span>
              </div>

              <h1
                data-testid="hero-headline"
                className="font-display font-bold text-[#12233D] text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] tracking-tight"
              >
                {slide.headline}
              </h1>

              <p
                data-testid="hero-subheadline"
                className="mt-6 text-[#4B5563] text-base md:text-lg max-w-2xl leading-relaxed"
              >
                {slide.subheadline}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  data-testid="hero-primary-cta"
                  href={slide.cta_link || "#contact"}
                  className="btn-primary"
                >
                  {slide.cta_label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  data-testid="hero-secondary-cta"
                  href="#why"
                  className="btn-secondary"
                >
                  Why Shobha
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* trust mini bar */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: ShieldCheck, label: "EU-GMP Aligned" },
              { icon: FlaskConical, label: "WHO-GMP Quality" },
              { icon: Globe2, label: "15+ Countries" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-start gap-2 pl-3 border-l border-[#E9EEF5]"
              >
                <t.icon className="w-5 h-5 text-[#0738A6]" />
                <span className="text-[12px] font-semibold text-[#12233D] tracking-wide leading-tight">
                  {t.label}
                </span>
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          <div className="mt-10 flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                data-testid={`hero-indicator-${i}`}
                onClick={() => setIndex(i)}
                className="group flex items-center gap-2"
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-12 bg-[#0738A6]"
                      : "w-6 bg-[#E9EEF5] group-hover:bg-[#62C7F5]"
                  }`}
                />
                <span
                  className={`text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                    i === index ? "text-[#0738A6]" : "text-[#4B5563]/60"
                  }`}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(7,56,166,0.18)]">
                <img
                  src={slide.image_url}
                  alt={slide.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/30 via-transparent to-transparent" />
              </div>

              {/* floating chip */}
              <div className="absolute -left-6 bottom-8 bg-white rounded-2xl border border-[#E9EEF5] shadow-xl p-4 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-[#0738A6]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#0738A6]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#4B5563] font-semibold">
                    Quality Backed
                  </div>
                  <div className="text-[#12233D] font-semibold text-sm">
                    GMP Manufacturing
                  </div>
                </div>
              </div>

              {/* gold badge */}
              <div className="absolute -top-5 right-6 bg-[#F2C14E] text-[#12233D] rounded-full px-4 py-2 text-xs font-bold tracking-wider shadow-lg">
                EST. DUBAI · UAE
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
