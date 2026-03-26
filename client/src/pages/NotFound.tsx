// ============================================================
// NEXUS ROBOTECHPRO — 404 Not Found Page
// Design: Precision Dark Tech
// ============================================================

import { Link } from "wouter";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060D1A] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Hex pattern bg */}
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />

      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-12 relative z-10">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
          <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" fill="none" stroke="#0EA5E9" strokeWidth="1.5"/>
          <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" fill="#0EA5E9" fillOpacity="0.15" stroke="#0EA5E9" strokeWidth="1"/>
          <path d="M12 18 L18 12 L24 18" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12 L18 24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="18" r="2" fill="#0EA5E9"/>
        </svg>
        <span className="text-white font-bold text-base" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          Nexus <span className="text-[#0EA5E9]">RoboTech</span>Pro
        </span>
      </Link>

      <div className="text-center max-w-lg relative z-10">
        <div className="text-[#0EA5E9] font-black text-8xl mb-4 mono-text">404</div>
        <h1 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          Page Not Found
        </h1>
        <p className="text-[#64748B] mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to our homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-primary-glow flex items-center justify-center gap-2 px-6 py-3 rounded text-sm"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/products"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded text-sm border border-[#1A2E4A] text-[#94A3B8] hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
