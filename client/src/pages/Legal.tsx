// ============================================================
// NEXUS ROBOTECHPRO — Legal Pages (Privacy, Terms, Sitemap)
// ============================================================

import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS, SOLUTIONS } from "@/lib/data";

export function Privacy() {
  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />
      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">Legal</div>
          <h1 className="text-4xl font-black text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>Privacy Policy</h1>
          <p className="text-[#64748B] mt-2 text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>Last updated: January 1, 2024</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-8">
            {[
              {
                title: "1. Information We Collect",
                content: "We collect information you provide directly to us, such as when you fill out inquiry forms, contact us, or request product information. This includes your name, company name, email address, phone number, and any other information you choose to provide."
              },
              {
                title: "2. How We Use Your Information",
                content: "We use the information we collect to respond to your inquiries, provide product information and quotations, send relevant technical documentation, improve our services, and comply with legal obligations."
              },
              {
                title: "3. Information Sharing",
                content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to fulfill your requests (such as shipping products to your location)."
              },
              {
                title: "4. Data Security",
                content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
              },
              {
                title: "5. Contact Us",
                content: "If you have questions about this Privacy Policy, please contact us at privacy@nexusrobotechpro.com or write to us at No. 88 Innovation Road, Nanshan District, Shenzhen, Guangdong 518000, China.",
                isContact: true
              },
            ].map((section) => (
              <div key={section.title} className="surface-card p-6">
                <h2 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>{section.title}</h2>
                {section.isContact ? (
                  <p className="text-[#94A3B8] text-sm leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@nexusrobotechpro.com" className="text-[#0EA5E9] hover:text-[#38BDF8] transition-colors">privacy@nexusrobotechpro.com</a>
                    {" "}or write to us at No. 88 Innovation Road, Nanshan District, Shenzhen, Guangdong 518000, China.
                  </p>
                ) : (
                  <p className="text-[#94A3B8] text-sm leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function Terms() {
  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />
      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">Legal</div>
          <h1 className="text-4xl font-black text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>Terms of Use</h1>
          <p className="text-[#64748B] mt-2 text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>Last updated: January 1, 2024</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website."
              },
              {
                title: "2. Use of Website",
                content: "This website is provided for informational and business purposes. You may use this website to learn about our products, request quotations, and contact our team. You may not use this website for any unlawful purpose."
              },
              {
                title: "3. Intellectual Property",
                content: "All content on this website, including text, images, logos, and product information, is the property of Nexus RoboTechPro Co., Ltd. and is protected by applicable intellectual property laws."
              },
              {
                title: "4. Product Information",
                content: "Product specifications and information on this website are subject to change without notice. Please contact our sales team for the most current product specifications and pricing."
              },
              {
                title: "5. Limitation of Liability",
                content: "Nexus RoboTechPro shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or any information contained herein."
              },
            ].map((section) => (
              <div key={section.title} className="surface-card p-6">
                <h2 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>{section.title}</h2>
                <p className="text-[#94A3B8] text-sm leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function Sitemap() {
  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />
      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">Navigation</div>
          <h1 className="text-4xl font-black text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>Sitemap</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Products */}
            <div>
              <h2 className="text-white font-bold text-lg mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>Products</h2>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-[#0EA5E9] text-sm hover:underline" style={{ fontFamily: "'Exo 2', sans-serif" }}>All Products</Link></li>
                {PRODUCTS.map(p => (
                  <li key={p.id}><Link href={`/products/${p.id}`} className="text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{p.name}</Link></li>
                ))}
              </ul>
            </div>
            {/* Solutions */}
            <div>
              <h2 className="text-white font-bold text-lg mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>Solutions</h2>
              <ul className="space-y-2">
                <li><Link href="/solutions" className="text-[#0EA5E9] text-sm hover:underline" style={{ fontFamily: "'Exo 2', sans-serif" }}>All Solutions</Link></li>
                {SOLUTIONS.map(s => (
                  <li key={s.id}><Link href={`/solutions/${s.id}`} className="text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{s.name}</Link></li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <h2 className="text-white font-bold text-lg mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>Company</h2>
              <ul className="space-y-2">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Case Studies", "/cases"],
                  ["Contact Us", "/contact"],
                  ["Dealer & Agent", "/dealer"],
                ].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h2 className="text-white font-bold text-lg mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>Resources & Support</h2>
              <ul className="space-y-2">
                {[
                  ["Resources Center", "/resources"],
                  ["Product Manuals", "/resources"],
                  ["CAD Drawings", "/resources"],
                  ["Support Center", "/support"],
                  ["FAQs", "/support"],
                  ["Privacy Policy", "/privacy"],
                  ["Terms of Use", "/terms"],
                ].map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
