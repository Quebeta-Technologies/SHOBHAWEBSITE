import React from "react";
import { Link } from "react-router-dom";

export function Logo({ className = "h-12 w-auto", showText = true }) {
  return (
    <Link
      to="/"
      data-testid="brand-logo"
      className="flex items-center gap-3 group"
    >
      <img
        src="/brand/shobha-logo.svg"
        alt="Shobha Healthcare"
        className={className}
      />
      {showText && (
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="font-display font-bold text-[#12233D] text-lg tracking-tight">
            Shobha <span className="text-[#0738A6]">Healthcare</span>
          </span>
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#4B5563] font-medium">
            Your Health, Our Mission
          </span>
        </div>
      )}
    </Link>
  );
}
