import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "../Shared/FadeIn";
import { PhoneShell, getAppScreens } from "../Shared/PhoneSimulator";

export default function AppPreview() {
  const APP_SCREENS = getAppScreens();
  const [active, setActive] = useState(0);
  const total = APP_SCREENS.length;

  return (
    <section className="py-24 overflow-hidden" id="preview"
      style={{ background: "linear-gradient(160deg, #050f08 0%, #0a1f10 60%, #0d2b14 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-green-500 mb-4">App Preview</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white tracking-tight">
            See it in action.
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
            A polished mobile experience designed for every step of the transaction.
          </p>
        </FadeIn>

        {/* screen tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {APP_SCREENS.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
              style={{
                background: active === i ? "#16a34a" : "rgba(255,255,255,0.08)",
                color: active === i ? "#fff" : "rgba(255,255,255,0.5)",
                border: active === i ? "none" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* phones row */}
        <div className="relative flex items-end justify-center gap-6">
          {[-2, -1, 0, 1, 2].map(offset => {
            const idx = (active + offset + total) % total;
            const isCurrent = offset === 0;
            const isAdjacent = Math.abs(offset) === 1;
            return (
              <div
                key={offset}
                className="transition-all duration-500 cursor-pointer hidden md:block"
                style={{
                  opacity: isCurrent ? 1 : isAdjacent ? 0.5 : 0.2,
                  transform: isCurrent ? "scale(1.05)" : `scale(${isAdjacent ? 0.88 : 0.76})`,
                  filter: isCurrent ? "none" : `blur(${Math.abs(offset) > 1 ? 2 : 0}px)`,
                  animation: isCurrent ? "phoneFloat 5s ease-in-out infinite" : "none",
                }}
                onClick={() => setActive(idx)}
              >
                <PhoneShell>
                  {APP_SCREENS[idx].screen}
                </PhoneShell>
              </div>
            );
          })}

          {/* mobile: single phone */}
          <div className="md:hidden" style={{ animation: "phoneFloat 5s ease-in-out infinite" }}>
            <PhoneShell>
              {APP_SCREENS[active].screen}
            </PhoneShell>
          </div>
        </div>

        {/* nav arrows */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setActive(p => (p - 1 + total) % total)}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {APP_SCREENS.map((_, i) => (
              <div key={i} className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{ width: active === i ? "24px" : "6px", background: active === i ? "#4ade80" : "rgba(255,255,255,0.2)" }}
                onClick={() => setActive(i)} />
            ))}
          </div>
          <button
            onClick={() => setActive(p => (p + 1) % total)}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
