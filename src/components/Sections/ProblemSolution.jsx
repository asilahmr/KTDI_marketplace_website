import React from "react";
import { X, Check } from "lucide-react";
import { FadeIn } from "../Shared/FadeIn";

const before = [
  "Scattered WhatsApp groups",
  "Difficult to find buyers",
  "No centralized marketplace",
  "Hard to trust strangers",
  "Risk of scams",
  "Slow responses",
];

const after = [
  "One dedicated marketplace",
  "Verified KTDI community",
  "Easy search and browsing",
  "Secure communication",
  "Buyer & seller protection",
  "Real-time chat notifications",
];

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-[#f8fffe]" id="why">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-green-600 mb-4">The Problem & Solution</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#07170d] tracking-tight leading-tight">
            Why KTDI Marketplace?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            We replaced the chaos of scattered group chats with a platform built for trust.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <FadeIn delay={0.1}>
            <div className="rounded-3xl p-8 border border-red-100 bg-red-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center">
                  <X size={18} className="text-red-500" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-red-400">Before</p>
                  <p className="font-bold text-gray-800">The Old Way</p>
                </div>
              </div>
              <div className="space-y-3">
                {before.map(t => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <X size={10} className="text-red-500" />
                    </div>
                    <span className="text-sm text-gray-600">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* After */}
          <FadeIn delay={0.25}>
            <div className="rounded-3xl p-8 border border-green-200 bg-green-50/60"
              style={{ boxShadow: "0 0 0 1px rgba(22,163,74,0.1), 0 20px 60px rgba(22,163,74,0.08)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Check size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-green-600">After</p>
                  <p className="font-bold text-gray-800">KTDI Marketplace</p>
                </div>
              </div>
              <div className="space-y-3">
                {after.map(t => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
