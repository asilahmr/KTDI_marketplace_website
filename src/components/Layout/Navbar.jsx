import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrolled } from "../Shared/FadeIn";
import logo from "../../assets/images/logo.png";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Preview", href: "#preview" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(22,163,74,0.1)" : "none",
        boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center">
            <img src={logo} alt="KTDI Market Logo" className="w-full h-full object-contain" />
          </div>
          <span
            className="font-bold text-[15px] tracking-tight"
            style={{ color: scrolled ? "#07170d" : "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            KTDI Market
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-green-500"
              style={{ color: scrolled ? "#4d7c62" : "rgba(255,255,255,0.75)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
            style={{
              background: scrolled ? "transparent" : "rgba(255,255,255,0.1)",
              color: scrolled ? "#16a34a" : "#fff",
              border: scrolled ? "1.5px solid #16a34a" : "1.5px solid rgba(255,255,255,0.3)",
            }}
          >
            Download App
          </a>
          <a
            href="#features"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
          >
            Explore
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(o => !o)}>
          {mobileOpen
            ? <X size={22} style={{ color: scrolled ? "#07170d" : "#fff" }} />
            : <Menu size={22} style={{ color: scrolled ? "#07170d" : "#fff" }} />
          }
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-gray-700 hover:text-green-600" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#download" className="w-full text-center px-5 py-2.5 rounded-full text-sm font-semibold bg-green-600 text-white">
            Download App
          </a>
        </div>
      )}
    </nav>
  );
}
