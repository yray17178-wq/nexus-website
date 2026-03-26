// ============================================================
// NEXUS ROBOTECHPRO — Home Page
// Design: Precision Dark Tech
// Sections: Hero, Products, Stats, Solutions, Cases, About, CTA
// ============================================================

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Shield, Globe, Zap, Award, Factory, Users, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TallyForm from "@/components/TallyForm";
import { PRODUCTS, SOLUTIONS, CASE_STUDIES, COMPANY_STATS, CERTIFICATIONS } from "@/lib/data";

// Animated counter hook
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index }: { stat: typeof COMPANY_STATS[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(stat.value.replace(/\D/g, ""));
  const count = useCounter(numericValue, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number text-4xl font-black text-[#0EA5E9] mono-text">
        {stat.value === "2008" ? stat.value : count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-[#64748B] text-base mt-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>{stat.label}</div>
    </div>
  );
}

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered fade-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #060D1A 0%, #0C1829 50%, #060D1A 100%)",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663470022895/2VJcLxvpuPkUTryZZjUQgV/hero-robot-main-WHooiC2RupiUrj9TXghqou.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        {/* Hex pattern overlay */}
        <div className="absolute inset-0 hex-pattern opacity-60" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A] via-[#060D1A]/80 to-transparent" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0EA5E9]/5 blur-[100px]" />

        <div className="relative z-10 mx-auto px-3 sm:px-4 lg:px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="section-label">Global Robot Manufacturer</span>
              <span className="w-8 h-px bg-[#0EA5E9]" />
              <span className="product-tag">Est. 2008</span>
            </div>

            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Exo 2', sans-serif", letterSpacing: "-0.03em" }}
            >
              Precision
              <br />
              <span className="text-[#0EA5E9]">Robotics</span>
              <br />
              For The World
            </h1>

            <p className="text-[#94A3B8] text-xl leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              From surgical robots to industrial arms — Nexus RoboTechPro delivers FDA/CE certified robotic systems to hospitals, research institutes, and manufacturers in 50+ countries.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/products"
                className="btn-primary-glow flex items-center gap-2 px-6 py-3.5 rounded text-base font-semibold"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setInquiryOpen(true)}
                className="flex items-center gap-2 px-6 py-3.5 rounded text-base font-semibold border border-[#1A2E4A] text-[#94A3B8] hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all duration-300"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                Get a Quote
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: Shield, text: "FDA / CE Certified" },
                { icon: Globe, text: "50+ Countries" },
                { icon: Award, text: "120+ Patents" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#0EA5E9]" />
                  <span className="text-[#64748B] text-base" style={{ fontFamily: "'Exo 2', sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#475569] text-sm tracking-widest uppercase" style={{ fontFamily: "'Exo 2', sans-serif" }}>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#0EA5E9] to-transparent" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#0C1829] border-y border-[#1A2E4A] py-10">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {COMPANY_STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-20 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="text-center mb-16">
            <div className="section-label mb-4">Product Portfolio</div>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              8 Specialized Product Lines
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              From surgical precision to industrial strength — each product line is engineered for specific applications with customization available.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.slice(0, 8).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group surface-card overflow-hidden card-hover block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="product-tag">{product.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-base group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                      {product.name}
                    </h3>
                    <span className="text-lg">{product.icon}</span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1 text-[#0EA5E9] text-sm font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary-glow px-8 py-3.5 rounded text-base font-semibold inline-flex items-center gap-2">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-20 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="text-center mb-16">
            <div className="section-label mb-4">Industry Solutions</div>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Tailored for Your Industry
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              We understand the unique challenges of each sector. Our solutions are proven to increase efficiency and reduce operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.slice(0, 6).map((sol) => (
              <Link
                key={sol.id}
                href={`/solutions/${sol.id}`}
                className="group surface-card p-6 card-hover block"
              >
                <div className="text-4xl mb-4">{sol.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  {sol.name}
                </h3>
                <p className="text-[#94A3B8] text-base mb-4 leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  {sol.description}
                </p>
                <div className="flex items-center gap-1 text-[#0EA5E9] text-sm font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Learn More <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions" className="btn-primary-glow px-8 py-3.5 rounded text-base font-semibold inline-flex items-center gap-2">
              Explore All Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-20 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="text-center mb-16">
            <div className="section-label mb-4">Success Stories</div>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Proven Results Worldwide
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              See how leading organizations have transformed their operations with Nexus RoboTechPro solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 3).map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/cases/${caseStudy.id}`}
                className="group surface-card overflow-hidden card-hover block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="product-tag">{caseStudy.industry}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {caseStudy.title}
                  </h3>
                  <p className="text-[#64748B] text-sm mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {caseStudy.location}
                  </p>
                  <div className="space-y-1 mb-3">
                    {caseStudy.results.slice(0, 2).map((result) => (
                      <div key={result} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                        <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[#0EA5E9] text-sm font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Read Case <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/cases" className="btn-primary-glow px-8 py-3.5 rounded text-base font-semibold inline-flex items-center gap-2">
              View All Cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Global Certifications & Standards
            </h2>
            <p className="text-[#94A3B8] text-lg" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              All products meet international safety and quality standards
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {CERTIFICATIONS.slice(0, 6).map((cert) => (
              <div key={cert.name} className="surface-card p-6 text-center">
                <Award className="w-8 h-8 text-[#0EA5E9] mx-auto mb-3" />
                <div className="text-white font-semibold text-base" style={{ fontFamily: "'Exo 2', sans-serif" }}>{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Ready to Transform?</div>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Get a Free Technical Consultation
              </h2>
              <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Our robotics experts will analyze your requirements and propose the optimal solution for your business. Response within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary-glow px-8 py-3.5 rounded text-base font-semibold inline-flex items-center gap-2">
                  Contact Sales <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources" className="px-8 py-3.5 rounded text-base font-semibold border border-[#1A2E4A] text-[#94A3B8] hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all inline-flex items-center gap-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Download Brochure
                </Link>
              </div>
            </div>
            <div className="surface-card p-8">
              <TallyForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
