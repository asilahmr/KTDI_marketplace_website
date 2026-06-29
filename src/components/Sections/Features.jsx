import React from "react";
import {
  Search, ShoppingBag, Filter, Heart, User, Package, MessageCircle, Tag
} from "lucide-react";
import { FadeIn } from "../Shared/FadeIn";

const FEATURES = [
  { icon: ShoppingBag, title: "Browse Products", desc: "Explore hundreds of student listings across every category imaginable." },
  { icon: Tag, title: "Sell Items", desc: "List your unused items in seconds and reach the entire KTDI community." },
  { icon: Search, title: "Advanced Search", desc: "Find exactly what you need with intelligent filters and smart search." },
  { icon: Filter, title: "Category Filtering", desc: "Browse Electronics, Books, Sports, Furniture, Fashion, and more." },
  { icon: MessageCircle, title: "Real-time Chat", desc: "Connect instantly through secure, encrypted in-app messaging." },
  { icon: Heart, title: "Save Favourites", desc: "Wishlist items you love and get notified when prices drop." },
  { icon: User, title: "User Profiles", desc: "Build trust with verified KTDI identity, ratings, and reviews." },
  { icon: Package, title: "Product Management", desc: "Manage listings, track views, and update availability effortlessly." },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-green-600 mb-4">Platform Features</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#07170d] tracking-tight">
            Everything you need,<br />nothing you don't.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.07} className="group">
              <div
                className="h-full p-6 rounded-3xl border border-gray-100 bg-white cursor-default transition-all duration-300 hover:border-green-200 hover:-translate-y-1"
                style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(22,163,74,0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.04)";
                }}
              >
                <div className="w-11 h-11 rounded-2xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <f.icon size={20} className="text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
