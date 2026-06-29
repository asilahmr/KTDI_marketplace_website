import React from "react";
import { useInView, useCounter } from "../Shared/FadeIn";

const STATS = [
  { val: 500, suffix: "+", label: "Active Users" },
  { val: 1200, suffix: "+", label: "Items Listed" },
  { val: 850, suffix: "+", label: "Deals Closed" },
  { val: 98, suffix: "%", label: "Satisfaction" },
];

export default function Stats() {
  const { ref, inView } = useInView();
  const c0 = useCounter(STATS[0].val, inView);
  const c1 = useCounter(STATS[1].val, inView);
  const c2 = useCounter(STATS[2].val, inView);
  const c3 = useCounter(STATS[3].val, inView);
  const counts = [c0, c1, c2, c3];

  return (
    <section className="bg-white border-y border-green-100">
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <div key={s.label} className="text-center">
            <p className="text-[2.5rem] font-extrabold tracking-tight text-green-600 leading-none">
              {counts[i]}{s.suffix}
            </p>
            <p className="text-sm text-gray-500 mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
