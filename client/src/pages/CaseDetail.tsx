// ============================================================
// NEXUS ROBOTECHPRO — Case Study Detail Page
// ============================================================

import { Link, useParams } from "wouter";
import { ArrowLeft, CheckCircle, ChevronRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TallyForm from "@/components/TallyForm";
import { CASE_STUDIES, PRODUCTS } from "@/lib/data";

export default function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = CASE_STUDIES.find(c => c.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#060D1A] flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>Case Not Found</h2>
          <Link href="/cases" className="btn-primary-glow px-6 py-3 rounded text-sm inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Cases
          </Link>
        </div>
      </div>
    );
  }

  const product = PRODUCTS.find(p => p.id === caseStudy.product);
  const relatedCases = CASE_STUDIES.filter(c => c.id !== caseStudy.id && c.industry === caseStudy.industry).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 bg-[#0C1829] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-[#64748B]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            <Link href="/" className="hover:text-[#0EA5E9]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/cases" className="hover:text-[#0EA5E9]">Case Studies</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#94A3B8]">{caseStudy.industry}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="relative h-80 overflow-hidden">
          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto px-3 sm:px-4 lg:px-6 pb-8">
              <span className="product-tag mb-3 inline-block">{caseStudy.industry}</span>
              <h1 className="text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                {caseStudy.title}
              </h1>
              <div className="flex items-center gap-4 mt-3 text-[#64748B] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                <span>📍 {caseStudy.location}</span>
                <span>🏢 {caseStudy.customer}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <div className="surface-card p-6">
                <h2 className="text-xl font-bold text-white mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  The Challenge
                </h2>
                <p className="text-[#94A3B8] leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="surface-card p-6">
                <h2 className="text-xl font-bold text-white mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Our Solution
                </h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  {caseStudy.solution}
                </p>
                {product && (
                  <Link href={`/products/${product.id}`} className="inline-flex items-center gap-2 px-4 py-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded text-sm text-[#38BDF8] hover:bg-[#0EA5E9]/20 transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {product.icon} View {product.name} <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              {/* Results */}
              <div className="surface-card p-6">
                <h2 className="text-xl font-bold text-white mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Results Achieved
                </h2>
                <div className="space-y-3">
                  {caseStudy.results.map((r) => (
                    <div key={r} className="flex items-start gap-3 p-3 bg-[#060D1A] rounded">
                      <CheckCircle className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                      <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="surface-card p-6 border-l-4 border-[#0EA5E9]">
                <Quote className="w-8 h-8 text-[#0EA5E9]/30 mb-3" />
                <p className="text-[#94A3B8] text-lg italic leading-relaxed mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  "{caseStudy.testimonial}"
                </p>
                <div className="text-[#0EA5E9] text-sm font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  — {caseStudy.testimonialAuthor}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="surface-card p-5">
                <h3 className="section-label mb-4">Customer Profile</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-[#475569] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>Organization</div>
                    <div className="text-white text-sm font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>{caseStudy.customer}</div>
                  </div>
                  <div>
                    <div className="text-[#475569] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>Location</div>
                    <div className="text-white text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{caseStudy.location}</div>
                  </div>
                  <div>
                    <div className="text-[#475569] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>Industry</div>
                    <span className="product-tag">{caseStudy.industry}</span>
                  </div>
                </div>
              </div>

              {/* Product Used */}
              {product && (
                <div className="surface-card p-5">
                  <h3 className="section-label mb-4">Product Used</h3>
                  <Link href={`/products/${product.id}`} className="group block">
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-3 group-hover:opacity-90 transition-opacity" />
                    <div className="text-white font-bold text-sm group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{product.name}</div>
                    <div className="text-[#64748B] text-xs mt-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{product.tagline}</div>
                  </Link>
                </div>
              )}

              {/* Inquiry */}
              <div className="surface-card p-5">
                <h3 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Similar Project?
                </h3>
                <TallyForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-[#0C1829]">
          <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
            <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>Related Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedCases.map((c) => (
                <Link key={c.id} href={`/cases/${c.id}`} className="group surface-card overflow-hidden card-hover block">
                  <img src={c.image} alt={c.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-4">
                    <h3 className="text-white font-bold text-sm group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{c.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
