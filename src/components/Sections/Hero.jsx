import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Laptop,
  BookOpen,
  Calculator,
  Headphones,
  Gamepad2,
  Bike,
  Backpack,
  Lightbulb,
} from "lucide-react";
import { PhoneShell, HomeScreen } from "../Shared/PhoneSimulator";

const FLOAT_ITEMS = [
  { icon: Laptop, label: "Laptop", price: "RM 1,200", top: "12%", left: "-160px", delay: "0s" },
  { icon: BookOpen, label: "Textbooks", price: "RM 25", top: "38%", left: "-148px", delay: "1.3s" },
  { icon: Calculator, label: "Calculator", price: "RM 45", top: "65%", left: "-140px", delay: "0.8s" },
  { icon: Headphones, label: "Headphones", price: "RM 180", top: "8%", right: "-160px", delay: "0.5s" },
  { icon: Gamepad2, label: "Controller", price: "RM 150", top: "42%", right: "-152px", delay: "1.7s" },
  { icon: Bike, label: "Bicycle", price: "RM 400", top: "68%", right: "-145px", delay: "1.0s" },
  { icon: Backpack, label: "Backpack", price: "RM 80", top: "82%", left: "-135px", delay: "2.0s" },
  { icon: Lightbulb, label: "Desk Lamp", price: "RM 60", top: "80%", right: "-138px", delay: "0.3s" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#050f08" }}
    >
      <style>{`
        @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,-60px) scale(1.15)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-50px,40px) scale(0.9)} }
        @keyframes orb3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,50px) scale(1.1)} 66%{transform:translate(-30px,-20px) scale(0.95)} }
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(1.5deg)} }
        @keyframes floatR { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(10px) rotate(-1.5deg)} }
        @keyframes phoneFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse-green { 0%,100%{box-shadow:0 0 0 0 rgba(22,163,74,0.4)} 50%{box-shadow:0 0 0 16px rgba(22,163,74,0)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes countUp { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes scrollBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      {/* bg orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)", top: "-10%", left: "-10%", animation: "orb1 12s ease-in-out infinite" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #4ade80 0%, transparent 70%)", bottom: "0%", right: "-5%", animation: "orb2 16s ease-in-out infinite" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)", top: "40%", left: "40%", animation: "orb3 20s ease-in-out infinite" }} />
        {/* grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center">
        {/* badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium"
          style={{ animation: "fadeUp 0.7s ease 0.1s both" }}>
          <Sparkles size={14} />
          Exclusively for KTDI Students
        </div>

        {/* headline */}
        <h1
          className="text-center text-[clamp(3rem,8vw,7rem)] font-extrabold leading-none tracking-tight mb-6"
          style={{ animation: "fadeUp 0.7s ease 0.25s both", color: "#fff" }}
        >
          Buy.{" "}
          <span style={{
            background: "linear-gradient(135deg, #4ade80 0%, #16a34a 50%, #4ade80 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 4s linear infinite",
          }}>Sell.</span>{" "}
          Connect.
        </h1>

        <p
          className="text-center max-w-2xl text-[clamp(1rem,2vw,1.2rem)] leading-relaxed mb-10 text-white/60"
          style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
        >
          The exclusive marketplace for the KTDI community. Discover affordable items, sell what you no longer need, and connect with trusted buyers and sellers within your residential college.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16" style={{ animation: "fadeUp 0.7s ease 0.55s both" }}>
          <a
            href="#download"
            className="group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-base bg-green-500 text-white hover:bg-green-400 transition-all duration-200"
            style={{ boxShadow: "0 0 40px rgba(74,222,128,0.3)" }}
          >
            Download App
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-base border border-white/20 text-white/80 hover:bg-white/10 transition-all duration-200"
          >
            Explore Features
            <ChevronRight size={16} />
          </a>
        </div>

        {/* phone + floating items */}
        <div className="relative flex items-center justify-center" style={{ animation: "fadeUp 0.9s ease 0.7s both" }}>
          {/* floating items — hidden on small screens */}
          {FLOAT_ITEMS.map((item, i) => {
            const hasLeft = "left" in item;
            const pos = {
              position: "absolute",
              top: item.top,
              ...(hasLeft ? { left: item.left } : { right: item.right }),
              animation: `${i % 2 === 0 ? "float" : "floatR"} ${3.5 + (i * 0.3)}s ease-in-out infinite`,
              animationDelay: item.delay,
            };
            return (
              <div key={i} className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-2xl" style={{
                ...pos,
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                whiteSpace: "nowrap",
              }}>
                <div className="w-7 h-7 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <item.icon size={14} className="text-green-400" />
                </div>
                <div>
                  <p className="text-[9px] text-white/50 leading-none">{item.label}</p>
                  <p className="text-[11px] font-bold text-green-400 leading-none mt-0.5">{item.price}</p>
                </div>
              </div>
            );
          })}

          {/* phone */}
          <div style={{ animation: "phoneFloat 5s ease-in-out infinite" }}>
            <PhoneShell>
              <HomeScreen />
            </PhoneShell>
          </div>
        </div>

        {/* scroll cue */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-40" style={{ animation: "fadeUp 1s ease 1.2s both" }}>
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" style={{ animation: "scrollBounce 1.6s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
