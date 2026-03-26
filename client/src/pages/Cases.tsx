// ============================================================
// NEXUS ROBOTECHPRO — Case Studies Page
// ============================================================

import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CASE_STUDIES } from "@/lib/data";

const INDUSTRIES = ["All", "Medical", "Research", "Food", "Manufacturing", "Logistics"];

export default function Cases() {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filtered = activeIndustry === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.industry === activeIndustry || c.industry.includes(activeIndustry));

  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="section-label mb-3">Success Stories</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Case Studies
          </h1>
          <p className="text-[#94A3B8] max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Real-world deployments across hospitals, research labs, factories, and logistics centers worldwide.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-30 bg-[#060D1A]/95 backdrop-blur-md border-b border-[#1A2E4A] py-3">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`flex-shrink-0 px-3 py-1.5 rounded text-xs font-semibold transition-all duration-200 ${
                  activeIndustry === ind
                    ? "bg-[#0EA5E9] text-white"
                    : "text-[#64748B] hover:text-[#0EA5E9] border border-[#1A2E4A] hover:border-[#0EA5E9]/50"
                }`}
                style={{ fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.03em" }}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <Link key={c.id} href={`/cases/${c.id}`} className="group surface-card overflow-hidden card-hover block">
                <div className="relative h-52 overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="product-tag">{c.industry}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-[#94A3B8] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    📍 {c.location}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#0EA5E9] transition-colors line-clamp-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {c.title}
                  </h3>
                  <p className="text-[#64748B] text-xs leading-relaxed mb-4 line-clamp-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {c.challenge}
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {c.results.slice(0, 2).map((r) => (
                      <div key={r} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                        <span className="text-[#94A3B8] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[#0EA5E9] text-xs font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Read Full Case <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
