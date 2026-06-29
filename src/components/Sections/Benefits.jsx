import React from "react";
import { TrendingDown, Tag, Leaf, Shield, Zap, Clock } from "lucide-react";
import { FadeIn } from "../Shared/FadeIn";

const BENEFITS = [
  { icon: TrendingDown, title: "Save Money", desc: "Buy pre-owned at student-friendly prices." },
  { icon: Tag, title: "Sell Unused Items", desc: "Turn clutter into cash within your community." },
  { icon: Leaf, title: "Sustainable Living", desc: "Reduce waste by giving items a second life." },
  { icon: Shield, title: "Trusted Community", desc: "Every user is a verified KTDI resident." },
  { icon: Zap, title: "Convenient Buying", desc: "Everything available right on campus — no shipping." },
  { icon: Clock, title: "Faster Transactions", desc: "Close deals the same day within college grounds." },
];

export default function Benefits() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #0a1f10 0%, #0d2b14 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-green-500 mb-4">Why Choose Us</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white tracking-tight">
            Built for student life.
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-lg mx-auto">
            Every feature of KTDI Marketplace was designed with the everyday needs of residential college students in mind.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.08}>
              <div
                className="group p-6 rounded-3xl cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(22,163,74,0.12)";
                  e.currentTarget.style.borderColor = "rgba(22,163,74,0.3)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(22,163,74,0.15)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/15 flex items-center justify-center mb-4 group-hover:bg-green-500/25 transition-colors">
                  <b.icon size={22} className="text-green-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
