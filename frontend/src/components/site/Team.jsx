import React from "react";
import { motion } from "framer-motion";
import { Briefcase, UserCircle2, FlaskConical } from "lucide-react";

const team = [
  {
    icon: Briefcase,
    name: "Mr. Jagdish Maheshwari",
    role: "Founder & CEO",
    desc: "30+ years in pharmaceutical manufacturing and global distribution. Co-founder of Greenwich Therapeutics & United Pharma, Ghana.",
  },
  {
    icon: UserCircle2,
    name: "Prarthana Maheshwari",
    role: "Business Development & Operations",
    desc: "Leads business development, partner onboarding, and day-to-day operations. Primary contact for new partnerships.",
  },
  {
    icon: FlaskConical,
    name: "Regulatory Affairs Team",
    role: "Regulatory & Compliance",
    desc: "Manages product registrations, import approvals, and compliance documentation across 20+ markets globally.",
  },
];

export default function Team() {
  return (
    <section data-testid="team-section" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Our Team</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            The People Behind Shobha Healthcare
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Decades of pharmaceutical expertise, across manufacturing,
            distribution, and global health markets — all working towards one
            goal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              data-testid={`team-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover bg-[#F7FAFD] border border-[#E9EEF5] rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0738A6] text-white flex items-center justify-center mb-5">
                <m.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-[#12233D] text-lg">
                {m.name}
              </h3>
              <div className="text-[#0738A6] font-semibold text-[12px] uppercase tracking-widest mt-1">
                {m.role}
              </div>
              <p className="mt-4 text-[#4B5563] text-[14px] leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
