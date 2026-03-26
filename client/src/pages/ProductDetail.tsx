// ============================================================
// NEXUS ROBOTECHPRO — Product Detail Page
// Individual product page with specs, applications, inquiry
// ============================================================

import { Link, useParams } from "wouter";
import { ArrowLeft, Download, MessageSquare, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TallyForm from "@/components/TallyForm";
import { PRODUCTS } from "@/lib/data";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#060D1A] flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <div className="text-[#0EA5E9] text-6xl mb-4">404</div>
          <h2 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>Product Not Found</h2>
          <Link href="/products" className="btn-primary-glow px-6 py-3 rounded text-sm inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 bg-[#0C1829] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-[#64748B]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            <Link href="/" className="hover:text-[#0EA5E9] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-[#0EA5E9] transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#94A3B8]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div>
              <div className="relative rounded-xl overflow-hidden border border-[#1A2E4A]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="product-tag">{product.category}</span>
                  {product.certifications.map(cert => (
                    <span key={cert} className="product-tag">{cert}</span>
                  ))}
                </div>
              </div>
              {/* Model selector */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.models.map((model) => (
                  <div key={model} className="surface-card p-3 text-center cursor-pointer hover:border-[#0EA5E9]/50 transition-colors">
                    <div className="text-white text-xs font-bold mono-text">{model}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="section-label mb-2">{product.category}</div>
              <h1 className="text-5xl font-black text-white mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                {product.name}
              </h1>
              <p className="text-[#0EA5E9] text-xl font-semibold mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                {product.tagline}
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                {product.description}
              </p>

              {/* Specs Table */}
              <div className="mb-8">
                <h3 className="section-label mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="surface-card p-3">
                      <div className="text-[#0EA5E9] font-bold text-sm mono-text">{spec.value}</div>
                      <div className="text-[#64748B] text-xs mt-0.5" style={{ fontFamily: "'Exo 2', sans-serif" }}>{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="section-label mb-4">Application Scenarios</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span className="px-3 py-1.5 bg-[#0C1829] border border-[#1A2E4A] rounded text-sm text-[#94A3B8]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary-glow flex items-center gap-2 px-5 py-3 rounded text-base font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  Request Quote
                </Link>
                <button className="flex items-center gap-2 px-5 py-3 rounded text-base font-semibold border border-[#1A2E4A] text-[#94A3B8] hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  <Download className="w-4 h-4" />
                  Product Manual
                </button>
                <button className="flex items-center gap-2 px-5 py-3 rounded text-base font-semibold border border-[#1A2E4A] text-[#94A3B8] hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  <Download className="w-4 h-4" />
                  CAD Drawing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Note */}
      <section className="py-12 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="surface-card p-6 lg:p-8 border-l-4 border-[#0EA5E9]">
            <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Customization Available
            </h3>
            <p className="text-[#94A3B8] text-base mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              All {product.name} models are available as standard configurations for fast delivery, or can be customized to meet specific application requirements. Custom projects typically require 12–16 weeks lead time.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Custom payload", "Modified reach", "Special coatings", "OEM branding", "Integration support", "Extended warranty"].map(item => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span className="text-[#64748B] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="section-label mb-3">Get in Touch</div>
              <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Inquire About {product.name}
              </h2>
              <p className="text-[#94A3B8] text-lg mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Our product specialists will provide detailed technical consultation and a customized quotation within 24 hours.
              </p>
            </div>
            <div className="surface-card p-6">
              <TallyForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group surface-card overflow-hidden card-hover block">
                <img src={p.image} alt={p.name} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4">
                  <h3 className="text-white font-bold text-base group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{p.name}</h3>
                  <p className="text-[#64748B] text-sm mt-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{p.tagline}</p>
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
