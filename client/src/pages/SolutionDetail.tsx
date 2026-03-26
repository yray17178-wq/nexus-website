// ============================================================
// NEXUS ROBOTECHPRO — Solution Detail Page
// ============================================================

import { Link, useParams } from "wouter";
import { ArrowLeft, CheckCircle, ChevronRight, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TallyForm from "@/components/TallyForm";
import { SOLUTIONS, PRODUCTS, CASE_STUDIES } from "@/lib/data";

const IMPLEMENTATION_STEPS = [
  { step: "01", title: "Needs Assessment", desc: "Our engineers analyze your specific requirements, environment, and constraints." },
  { step: "02", title: "Solution Design", desc: "We design a customized robotic solution with detailed technical specifications." },
  { step: "03", title: "Prototype & Testing", desc: "Prototype development and rigorous testing in simulated environments." },
  { step: "04", title: "Installation & Integration", desc: "On-site installation, system integration, and staff training." },
  { step: "05", title: "Go-Live & Support", desc: "Full operational handover with 24/7 technical support and maintenance." },
];

export default function SolutionDetail() {
  const { id } = useParams<{ id: string }>();
  const solution = SOLUTIONS.find(s => s.id === id);

  if (!solution) {
    return (
      <div className="min-h-screen bg-[#060D1A] flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>Solution Not Found</h2>
          <Link href="/solutions" className="btn-primary-glow px-6 py-3 rounded text-sm inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => solution.products.includes(p.id));
  const relatedCases = CASE_STUDIES.filter(c => solution.products.includes(c.product)).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 bg-[#0C1829] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-[#64748B]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            <Link href="/" className="hover:text-[#0EA5E9]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/solutions" className="hover:text-[#0EA5E9]">Solutions</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#94A3B8]">{solution.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={solution.image} alt={solution.name} className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A] to-[#060D1A]/80" />
        </div>
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-6xl mb-4">{solution.icon}</div>
          <div className="section-label mb-3">Industry Solution</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            {solution.name}
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            {solution.description}
          </p>
        </div>
      </section>

      {/* Pain Points + Metrics */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>Industry Pain Points</h2>
              <div className="space-y-4">
                {solution.painPoints.map((pain, i) => (
                  <div key={pain} className="flex items-start gap-4 surface-card p-4">
                    <div className="w-8 h-8 rounded bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0EA5E9] text-xs font-bold mono-text">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{pain}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>Proven Results</h2>
              <div className="space-y-4">
                {solution.metrics.map((m) => (
                  <div key={m.label} className="surface-card p-5 flex items-center gap-5">
                    <div className="text-[#0EA5E9] font-black text-3xl mono-text flex-shrink-0">{m.value}</div>
                    <div className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group surface-card overflow-hidden card-hover block">
                <img src={p.image} alt={p.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{p.name}</h3>
                  <p className="text-[#64748B] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <h2 className="text-2xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Exo 2', sans-serif" }}>Implementation Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {IMPLEMENTATION_STEPS.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="surface-card p-5 text-center h-full">
                  <div className="text-[#0EA5E9] font-black text-2xl mono-text mb-3">{step.step}</div>
                  <h3 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>{step.title}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>{step.desc}</p>
                </div>
                {i < IMPLEMENTATION_STEPS.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 -right-2 w-4 h-px bg-[#0EA5E9]/40 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-[#060D1A]">
          <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
            <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>Related Case Studies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedCases.map((c) => (
                <Link key={c.id} href={`/cases/${c.id}`} className="group surface-card overflow-hidden card-hover block">
                  <img src={c.image} alt={c.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-5">
                    <span className="product-tag mb-2 inline-block">{c.industry}</span>
                    <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{c.title}</h3>
                    <div className="space-y-1">
                      {c.results.slice(0, 2).map(r => (
                        <div key={r} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                          <span className="text-[#64748B] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Ready to Transform Your {solution.name.split("&")[0].trim()} Operations?
              </h2>
              <p className="text-[#94A3B8] mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Get a free technical consultation and discover how Nexus RoboTechPro can solve your specific challenges.
              </p>
              <div className="flex gap-3">
                <Link href="/contact" className="btn-primary-glow flex items-center gap-2 px-5 py-3 rounded text-sm">
                  <MessageSquare className="w-4 h-4" /> Get Consultation
                </Link>
              </div>
            </div>
            <div className="surface-card p-6">
              <TallyForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
