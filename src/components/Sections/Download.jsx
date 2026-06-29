import React from "react";
import { FadeIn } from "../Shared/FadeIn";
import logo from "../../assets/images/logo.png";

export default function Download() {
  return (
    <section className="py-24 bg-white" id="download">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div
            className="rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)" }}
          >
            {/* bg decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5" />
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-white border-2 border-white overflow-hidden flex items-center justify-center mx-auto mb-6" style={{ animation: "pulse-green 3s ease-in-out infinite" }}>
                <img src={logo} alt="KTDI Market Logo" className="w-12 h-12 object-contain" />
              </div>
              <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-extrabold text-white tracking-tight mb-4">
                Start trading today.
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                Join hundreds of KTDI students already buying and selling on Malaysia&apos;s most trusted campus marketplace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* App Store */}
                <a href="#" className="group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-900 transition-all hover:scale-105">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60 leading-none">Download on the</p>
                    <p className="font-bold text-sm leading-tight">App Store</p>
                  </div>
                </a>

                {/* Google Play */}
                <a href="#" className="group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-900 transition-all hover:scale-105">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.31.17.67.19 1.01.06l11.75-6.77-2.55-2.55-10.21 9.26zm-1.18-20.9v18.28c0 .5.27.94.7 1.18L13.65 12 2.7 1.68c-.43.24-.7.68-.7 1.18zm20.16 9.06L19.4 9.96 16.6 12l2.8 2.98 2.78-1.6c.79-.46.79-1.61-.02-2.06zM4.19.18c-.34-.13-.7-.11-1.01.06l10.21 9.26 2.55-2.55L4.19.18z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60 leading-none">Get it on</p>
                    <p className="font-bold text-sm leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
