import React from "react";
import { Mail, MapPin } from "lucide-react";
import {
  FiGithub as Github,
  FiInstagram as Instagram,
  FiTwitter as Twitter,
  FiLinkedin as Linkedin,
} from "react-icons/fi";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "linear-gradient(180deg, #050f08 0%, #030a05 100%)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center">
                <img src={logo} alt="KTDI Market Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-lg text-white">KTDI Marketplace</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              The exclusive marketplace for the KTDI residential college community at Universiti Teknologi Malaysia.
            </p>
          </div>

          {/* links */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Platform</p>
            <div className="space-y-3">
              {["Browse Items", "Post a Listing", "Search", "Categories", "My Profile"].map(l => (
                <a key={l} href="#" className="block text-sm text-white/50 hover:text-green-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Contact</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-green-600 shrink-0" />
                <span className="text-sm text-white/50">Faculty of Computing, UTM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Github size={14} className="text-green-600 shrink-0" />
                <a href="https://github.com/Sumaita-Alam/KTDI-Marketplace " className="text-sm text-white/50 hover:text-green-400 transition-colors">github.com/ktdi-marketplace</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2024 KTDI Marketplace · Universiti Teknologi Malaysia · All rights reserved.
          </p>
          <p className="text-xs text-white/20" style={{ fontFamily: "DM Mono, monospace" }}>
            v1.0.0 · Built with ❤️ in KTDI
          </p>
        </div>
      </div>
    </footer>
  );
}
