// ============================================================
// NEXUS ROBOTECHPRO — Products Page
// All 8 product lines with filtering by category
// ============================================================

import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/data";

const CATEGORIES = ["All", "Medical", "Research & Security", "Food & Catering", "Manufacturing", "Special Scenarios", "Rehabilitation & Industrial", "Logistics", "Components"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => {
        if (activeCategory === "Components") return p.category === "Components";
        if (activeCategory === "Medical") return p.category === "Medical";
        if (activeCategory === "Research & Security") return p.category === "Research & Security";
        if (activeCategory === "Food & Catering") return p.category === "Food & Catering";
        if (activeCategory === "Manufacturing") return p.category.includes("Manufacturing") || p.category.includes("Welding");
        if (activeCategory === "Special Scenarios") return p.category === "Special Scenarios";
        if (activeCategory === "Rehabilitation & Industrial") return p.category.includes("Rehabilitation") || p.category.includes("Exoskeleton");
        if (activeCategory === "Logistics") return p.category === "Logistics";
        return false;
      });

  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="section-label mb-3">Product Portfolio</div>
          <h1 className="text-6xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Our Robot Products
          </h1>
          <p className="text-[#94A3B8] max-w-2xl text-lg" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            8 specialized product lines serving medical, industrial, research, and logistics sectors worldwide. All products available as standard models with customization options.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-[#060D1A]/95 backdrop-blur-md border-b border-[#1A2E4A] py-3">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="w-4 h-4 text-[#64748B] flex-shrink-0" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-3 py-1.5 rounded text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#0EA5E9] text-white"
                    : "text-[#64748B] hover:text-[#0EA5E9] border border-[#1A2E4A] hover:border-[#0EA5E9]/50"
                }`}
                style={{ fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.03em" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group surface-card overflow-hidden card-hover block"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    <span className="product-tag">{product.category}</span>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-1">
                    {product.certifications.slice(0, 2).map(cert => (
                      <span key={cert} className="text-[9px] font-bold px-1.5 py-0.5 bg-[#0EA5E9]/20 border border-[#0EA5E9]/40 rounded text-[#38BDF8]">{cert}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-base group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                      {product.name}
                    </h3>
                    <span className="text-xl ml-2">{product.icon}</span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {product.description}
                  </p>
                  {/* Key specs preview */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.specs.slice(0, 2).map((spec) => (
                      <div key={spec.label} className="bg-[#0C1829] rounded p-2">
                        <div className="text-[#0EA5E9] font-bold text-sm mono-text">{spec.value}</div>
                        <div className="text-[#475569] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{spec.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#0EA5E9] text-sm font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                      View Details <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <Link
                      href="/contact"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm px-3 py-1.5 rounded border border-[#0EA5E9]/40 text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      Inquire
                    </Link>
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
