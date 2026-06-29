import React, { useState } from "react";
import {
  ChevronLeft, ChevronRight, Laptop, BookOpen, Headphones,
  Gamepad2, Bike, Calculator, Backpack, ShoppingBag, Search,
  MessageCircle, Heart, User, Package, Bell, Star, Check
} from "lucide-react";

// Home component icon mapping
const Home = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export function PhoneHeader({ title, showBack = false }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
      {showBack ? <ChevronLeft size={18} className="text-gray-600" /> : <div className="w-5" />}
      <span className="text-[11px] font-bold text-gray-800">{title}</span>
      <Bell size={16} className="text-gray-500" />
    </div>
  );
}

export function HomeScreen() {
  return (
    <div className="h-full bg-gray-50 flex flex-col text-xs overflow-hidden">
      <div className="bg-green-600 px-4 pt-3 pb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-green-200 text-[9px]">Welcome back 👋</p>
            <p className="text-white font-bold text-[12px]">KTDI Marketplace</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
          <Search size={11} className="text-white/70" />
          <span className="text-white/60 text-[10px]">Search items...</span>
        </div>
      </div>
      <div className="px-3 py-2 flex gap-2 overflow-x-hidden">
        {["All", "Electronics", "Books", "Sports"].map((c, i) => (
          <span key={c} className={`shrink-0 text-[8px] font-semibold px-2 py-1 rounded-full whitespace-nowrap ${i === 0 ? "bg-green-600 text-white" : "bg-white text-gray-600 border border-gray-200"}`}>{c}</span>
        ))}
      </div>
      <div className="px-3 flex-1">
        <p className="text-[10px] font-bold text-gray-800 mb-2">Featured Items</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "MacBook Air M2", price: "RM 2,500", bg: "bg-blue-50", icon: Laptop },
            { name: "Casio FX-570", price: "RM 45", bg: "bg-amber-50", icon: Calculator },
            { name: "Physics Vol. 1", price: "RM 20", bg: "bg-green-50", icon: BookOpen },
            { name: "Sony WH-1000", price: "RM 320", bg: "bg-purple-50", icon: Headphones },
          ].map(({ name, price, bg, icon: Icon }) => (
            <div key={name} className={`${bg} rounded-xl p-2`}>
              <div className="h-10 rounded-lg bg-white/70 mb-1.5 flex items-center justify-center">
                <Icon size={14} className="text-gray-400" />
              </div>
              <p className="text-[7px] font-semibold text-gray-700 leading-tight">{name}</p>
              <p className="text-[9px] font-bold text-green-600 mt-0.5">{price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 bg-white flex justify-around py-2">
        {[{ icon: Home, active: true }, { icon: Search, active: false }, { icon: Heart, active: false }, { icon: User, active: false }].map(({ icon: Icon, active }, i) => (
          <Icon key={i} size={16} className={active ? "text-green-600" : "text-gray-400"} />
        ))}
      </div>
    </div>
  );
}

export function CategoriesScreen() {
  const cats = [
    { label: "Electronics", emoji: "💻", bg: "bg-blue-50 text-blue-700" },
    { label: "Books", emoji: "📚", bg: "bg-amber-50 text-amber-700" },
    { label: "Sports", emoji: "⚽", bg: "bg-green-50 text-green-700" },
    { label: "Fashion", emoji: "👕", bg: "bg-pink-50 text-pink-700" },
    { label: "Furniture", emoji: "🪑", bg: "bg-orange-50 text-orange-700" },
    { label: "Stationery", emoji: "✏️", bg: "bg-purple-50 text-purple-700" },
    { label: "Musical", emoji: "🎸", bg: "bg-red-50 text-red-700" },
    { label: "Others", emoji: "📦", bg: "bg-gray-50 text-gray-700" },
  ];
  return (
    <div className="h-full bg-white flex flex-col">
      <PhoneHeader title="Browse Categories" />
      <div className="flex-1 p-3 grid grid-cols-2 gap-2 content-start">
        {cats.map(c => (
          <div key={c.label} className={`${c.bg} rounded-xl p-3 flex items-center gap-2`}>
            <span className="text-lg leading-none">{c.emoji}</span>
            <span className="text-[9px] font-bold">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductScreen() {
  return (
    <div className="h-full bg-white flex flex-col">
      <PhoneHeader title="Product Detail" showBack />
      <div className="h-28 bg-blue-50 flex items-center justify-center">
        <Laptop size={40} className="text-blue-300" />
      </div>
      <div className="flex-1 p-3">
        <div className="flex items-start justify-between mb-1">
          <p className="text-[11px] font-bold text-gray-800 leading-tight flex-1">MacBook Air M2 (2023)<br />256GB Space Grey</p>
          <Heart size={14} className="text-gray-400 mt-0.5" />
        </div>
        <p className="text-[14px] font-bold text-green-600 mb-2">RM 2,500</p>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
            <User size={10} className="text-green-600" />
          </div>
          <div>
            <p className="text-[8px] font-semibold text-gray-700">Ahmad Faris</p>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={7} className="fill-amber-400 text-amber-400" />)}
              <span className="text-[7px] text-gray-500 ml-0.5">(24)</span>
            </div>
          </div>
          <span className="ml-auto text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-semibold">Verified</span>
        </div>
        <p className="text-[8px] text-gray-500 mb-3 leading-relaxed">Excellent condition, used for one semester only. Comes with original charger and box. Selling due to graduation.</p>
        <button className="w-full bg-green-600 text-white text-[10px] font-bold py-2 rounded-xl">
          Chat with Seller
        </button>
      </div>
    </div>
  );
}

export function SearchScreen() {
  const results = ["Sony WH-1000XM5", "JBL Tune 520BT", "Logitech H390", "AirPods Pro 2"];
  return (
    <div className="h-full bg-white flex flex-col">
      <div className="p-3 border-b border-gray-100">
        <div className="bg-gray-100 rounded-xl px-3 py-2 flex items-center gap-2">
          <Search size={12} className="text-green-600" />
          <span className="text-[10px] text-gray-500">headphones...</span>
        </div>
        <div className="flex gap-1.5 mt-2">
          {["Headphones", "< RM 200", "Used"].map(f => (
            <span key={f} className="text-[7px] bg-green-50 text-green-700 border border-green-200 px-1.5 py-0.5 rounded-full font-semibold">{f}</span>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="text-[9px] text-gray-500 px-3 pt-2 pb-1">4 results found</p>
        {results.map((r, i) => (
          <div key={r} className="flex items-center gap-3 px-3 py-2 border-b border-gray-50">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
              <Headphones size={16} className="text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-semibold text-gray-800 truncate">{r}</p>
              <p className="text-[9px] font-bold text-green-600">RM {[320, 120, 45, 480][i]}</p>
            </div>
            <Heart size={12} className="text-gray-300 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChatScreen() {
  return (
    <div className="h-full bg-white flex flex-col">
      <PhoneHeader title="Messages" />
      <div className="flex-1 overflow-hidden">
        {[
          { name: "Nur Aisyah", msg: "Is the laptop still available?", time: "2m", unread: 2 },
          { name: "Haziq M.", msg: "Okay, see you at Block A lobby", time: "15m", unread: 0 },
          { name: "Rahmah S.", msg: "Can you lower the price?", time: "1h", unread: 1 },
          { name: "Faris A.", msg: "Thanks for the purchase! 🙏", time: "3h", unread: 0 },
        ].map(chat => (
          <div key={chat.name} className="flex items-center gap-3 px-3 py-2.5 border-b border-gray-50">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <User size={14} className="text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold text-gray-800">{chat.name}</p>
                <span className="text-[7px] text-gray-400">{chat.time} ago</span>
              </div>
              <p className="text-[8px] text-gray-500 truncate">{chat.msg}</p>
            </div>
            {chat.unread > 0 && (
              <span className="w-4 h-4 rounded-full bg-green-600 text-white text-[7px] font-bold flex items-center justify-center shrink-0">{chat.unread}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProfileScreen() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <PhoneHeader title="My Profile" />
      <div className="bg-white px-4 py-4 flex flex-col items-center border-b border-gray-100">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-2">
          <User size={26} className="text-green-600" />
        </div>
        <p className="text-[11px] font-bold text-gray-800">Ahmad Faris</p>
        <p className="text-[8px] text-gray-500">KTDI Block A · Room 3-14</p>
        <div className="flex items-center gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={9} className="fill-amber-400 text-amber-400" />)}
          <span className="text-[7px] text-gray-500 ml-1">4.9 (24 reviews)</span>
        </div>
        <div className="flex gap-6 mt-3">
          {[{ n: "12", l: "Listings" }, { n: "8", l: "Sold" }, { n: "3", l: "Bought" }].map(s => (
            <div key={s.l} className="text-center">
              <p className="text-[13px] font-bold text-gray-800">{s.n}</p>
              <p className="text-[7px] text-gray-500">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-3">
        {[{ label: "My Listings", icon: Package }, { label: "Purchase History", icon: ShoppingBag }, { label: "Wishlist", icon: Heart }, { label: "Settings", icon: User }].map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 bg-white px-3 py-2.5 rounded-xl mb-2">
            <Icon size={14} className="text-green-600" />
            <span className="text-[9px] font-semibold text-gray-700 flex-1">{label}</span>
            <ChevronRight size={12} className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ListingsScreen() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <PhoneHeader title="My Listings" />
      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        {[
          { name: "MacBook Air M2", price: "RM 2,500", views: 47, status: "Active", icon: Laptop, bg: "bg-blue-50" },
          { name: "Casio Calculator", price: "RM 45", views: 12, status: "Active", icon: Calculator, bg: "bg-amber-50" },
          { name: "Physics Textbook", price: "RM 20", views: 8, status: "Sold", icon: BookOpen, bg: "bg-green-50" },
        ].map(item => (
          <div key={item.name} className="bg-white rounded-xl p-3 flex gap-3">
            <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
              <item.icon size={20} className="text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-bold text-gray-800 truncate">{item.name}</p>
              <p className="text-[10px] font-bold text-green-600">{item.price}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[7px] text-gray-500">{item.views} views</span>
                <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full ${item.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{item.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WishlistScreen() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <PhoneHeader title="Wishlist" />
      <div className="flex-1 p-3 grid grid-cols-2 gap-2 content-start overflow-hidden">
        {[
          { name: "Sony WH-1000XM5", price: "RM 320", icon: Headphones, bg: "bg-purple-50" },
          { name: "Gaming Controller", price: "RM 150", icon: Gamepad2, bg: "bg-red-50" },
          { name: "Bicycle MTB", price: "RM 400", icon: Bike, bg: "bg-teal-50" },
          { name: "JBL Speaker", price: "RM 180", icon: Headphones, bg: "bg-blue-50" },
        ].map(item => (
          <div key={item.name} className="bg-white rounded-xl p-2 relative">
            <Heart size={12} className="absolute top-2 right-2 fill-red-400 text-red-400" />
            <div className={`h-10 ${item.bg} rounded-lg flex items-center justify-center mb-1.5`}>
              <item.icon size={16} className="text-gray-400" />
            </div>
            <p className="text-[7px] font-semibold text-gray-700 leading-tight">{item.name}</p>
            <p className="text-[9px] font-bold text-green-600 mt-0.5">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function getAppScreens() {
  return [
    { label: "Home", screen: <HomeScreen /> },
    { label: "Categories", screen: <CategoriesScreen /> },
    { label: "Product Detail", screen: <ProductScreen /> },
    { label: "Search", screen: <SearchScreen /> },
    { label: "Chat", screen: <ChatScreen /> },
    { label: "Profile", screen: <ProfileScreen /> },
    { label: "My Listings", screen: <ListingsScreen /> },
    { label: "Wishlist", screen: <WishlistScreen /> },
  ];
}

export function PhoneShell({ children, floating = false }) {
  return (
    <div
      className={`relative w-[220px] h-[440px] rounded-[2.5rem] overflow-hidden flex-shrink-0 ${floating ? "" : ""}`}
      style={{
        background: "#111",
        boxShadow: "0 0 0 6px #1a1a1a, 0 0 0 8px #2a2a2a, 0 32px 80px rgba(0,0,0,0.5)",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111] z-20 rounded-b-2xl" />
      <div className="absolute top-0 left-0 right-0 h-5 flex items-center justify-between px-5 z-10">
        <span className="text-white text-[8px] font-mono font-bold">9:41</span>
        <div className="flex gap-0.5 items-center">
          <div className="w-3 h-1.5 rounded-sm border border-white/60 flex items-center pr-px">
            <div className="h-full w-2/3 bg-white/60 rounded-sm" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 top-5 overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}
