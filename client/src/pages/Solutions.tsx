// ============================================================
// NEXUS ROBOTECHPRO — Solutions Page
// 7 industry solutions with pain points, metrics, products
// ============================================================

import { Link } from "wouter";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SOLUTIONS, PRODUCTS } from "@/lib/data";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="section-label mb-3">Industry Solutions</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Solutions by Industry
          </h1>
          <p className="text-[#94A3B8] max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            We understand that every industry has unique challenges. Our solutions are tailored to address specific pain points and deliver measurable results.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="space-y-8">
            {SOLUTIONS.map((sol, i) => {
              const relatedProducts = PRODUCTS.filter(p => sol.products.includes(p.id));
              return (
                <div key={sol.id} className="surface-card overflow-hidden">
                  <div className={`grid lg:grid-cols-5 ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                    {/* Image */}
                    <div className="lg:col-span-2 relative">
                      <img
                        src={sol.image}
                        alt={sol.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0C1829]/80 hidden lg:block" />
                      <div className="absolute top-4 left-4">
                        <span className="text-4xl">{sol.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-6 lg:p-8">
                      <div className="section-label mb-2">{sol.name}</div>
                      <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                        {sol.description}
                      </h2>

                      {/* Pain Points */}
                      <div className="mb-5">
                        <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>Industry Challenges</div>
                        <div className="grid grid-cols-2 gap-2">
                          {sol.painPoints.map((pain) => (
                            <div key={pain} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-1.5 flex-shrink-0" />
                              <span className="text-[#94A3B8] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{pain}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {sol.metrics.map((m) => (
                          <div key={m.label} className="bg-[#060D1A] rounded p-3 text-center">
                            <div className="text-[#0EA5E9] font-black text-xl mono-text">{m.value}</div>
                            <div className="text-[#475569] text-xs mt-0.5" style={{ fontFamily: "'Exo 2', sans-serif" }}>{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Related Products */}
                      <div className="mb-5">
                        <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>Recommended Products</div>
                        <div className="flex flex-wrap gap-2">
                          {relatedProducts.map((p) => (
                            <Link key={p.id} href={`/products/${p.id}`} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded text-xs text-[#38BDF8] hover:bg-[#0EA5E9]/20 transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                              {p.icon} {p.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link href={`/solutions/${sol.id}`} className="btn-primary-glow flex items-center gap-2 px-4 py-2.5 rounded text-sm">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="flex items-center gap-2 px-4 py-2.5 rounded text-sm border border-[#1A2E4A] text-[#94A3B8] hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                          Technical Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
