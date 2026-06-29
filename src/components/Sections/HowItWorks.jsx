import React from "react";
import { User, ShoppingBag, MessageCircle, Check } from "lucide-react";
import { FadeIn } from "../Shared/FadeIn";

const STEPS = [
  { n: "01", title: "Register or Sign In", desc: "Create your account using your KTDI residential college credentials.", icon: User },
  { n: "02", title: "Browse or Post an Item", desc: "Explore thousands of listings or create yours in under a minute.", icon: ShoppingBag },
  { n: "03", title: "Chat with Buyer or Seller", desc: "Negotiate and coordinate securely through real-time messaging.", icon: MessageCircle },
  { n: "04", title: "Complete the Deal", desc: "Meet on campus, exchange safely, and leave a review to build trust.", icon: Check },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-green-600 mb-4">Process</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#07170d] tracking-tight">
            Simple from start to finish.
          </h2>
        </FadeIn>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[3.25rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-green-200 via-green-400 to-green-200 opacity-60" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {STEPS.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.12} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #16a34a, #4ade80)",
                    boxShadow: "0 8px 32px rgba(22,163,74,0.3)",
                  }}
                >
                  <step.icon size={26} className="text-white" />
                </div>
                <span className="text-xs font-bold tracking-widest text-green-500 uppercase mb-2"
                  style={{ fontFamily: "DM Mono, monospace" }}>Step {step.n}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
