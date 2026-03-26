// ============================================================
// NEXUS ROBOTECHPRO — Support Page
// Technical consultation, after-sales, FAQs
// ============================================================

import { useState } from "react";
import { MessageSquare, Phone, Mail, Globe, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TallyForm from "@/components/TallyForm";

const FAQS = [
  {
    q: "What is the minimum order quantity (MOQ) for your robots?",
    a: "For standard models, MOQ is 1 unit. For OEM/custom projects, MOQ varies by product line — typically 3–5 units. Contact our sales team for specific requirements.",
  },
  {
    q: "Do your products come with FDA and CE certification?",
    a: "Yes. Our surgical robots and exoskeletons hold FDA 510(k) clearance and CE marking. Industrial products carry CE marking. All certifications are available for review upon request.",
  },
  {
    q: "What is the typical lead time for standard models?",
    a: "Standard models are typically delivered within 2–4 weeks from order confirmation. Custom configurations require 12–16 weeks. Rush orders may be accommodated — please contact us.",
  },
  {
    q: "Do you offer customization services?",
    a: "Yes. We offer OEM customization including modified specifications, custom branding, special coatings, and integration support. Custom projects are handled by our dedicated engineering team.",
  },
  {
    q: "What shipping terms do you offer?",
    a: "We offer EXW, FOB, CIF, and DDP shipping terms. We work with major international freight forwarders and can arrange door-to-door delivery to most countries.",
  },
  {
    q: "What warranty do your products carry?",
    a: "Standard warranty is 12 months from delivery date. Extended warranties of 24 or 36 months are available. Warranty covers manufacturing defects and component failures under normal use.",
  },
  {
    q: "Do you provide installation and training support?",
    a: "Yes. We offer on-site installation and commissioning services globally. Remote training via video conference is included with all purchases. On-site training is available at additional cost.",
  },
  {
    q: "How do I become an authorized dealer or agent?",
    a: "Visit our Dealer & Agent page to learn about our partnership program. Requirements include technical capability, market presence, and minimum annual purchase commitment. Apply online or contact our partnership team.",
  },
  {
    q: "What after-sales support do you provide?",
    a: "We provide 24/7 technical hotline support, remote diagnostics, spare parts supply, and on-site service through our global service network. Annual maintenance contracts are also available.",
  },
  {
    q: "Can I visit your factory before placing an order?",
    a: "Yes, we welcome factory visits from qualified buyers. Please contact us to schedule a visit. We can arrange factory tours, product demonstrations, and technical meetings.",
  },
];

const SERVICE_REGIONS = [
  { region: "Asia Pacific", office: "Shenzhen HQ", coverage: "China, Japan, South Korea, Southeast Asia, Australia" },
  { region: "North America", office: "Los Angeles Office", coverage: "USA, Canada, Mexico" },
  { region: "Europe", office: "Munich Office", coverage: "Germany, UK, France, Italy, Netherlands, Nordics" },
  { region: "Middle East", office: "Dubai Office", coverage: "UAE, Saudi Arabia, Qatar, Israel" },
  { region: "South Asia", office: "Singapore Hub", coverage: "India, Singapore, Malaysia, Indonesia" },
];

function FAQItem({ faq }: { faq: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="surface-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
      >
        <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{faq.q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-[#0EA5E9] flex-shrink-0 mt-0.5" /> : <ChevronDown className="w-4 h-4 text-[#64748B] flex-shrink-0 mt-0.5" />}
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-[#1A2E4A]">
          <p className="text-[#94A3B8] text-sm leading-relaxed pt-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function Support() {
  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="section-label mb-3">Customer Support</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>Support Center</h1>
          <p className="text-[#94A3B8] max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Technical consultation, after-sales service, and comprehensive FAQ resources for our global customers.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-[#060D1A] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Phone, title: "Technical Hotline", value: "+86 400-888-9999", sub: "24/7 Support Available", href: "tel:+864008889999" },
              { icon: Mail, title: "Email Support", value: "support@nexusrobotechpro.com", sub: "Response within 4 hours", href: "mailto:support@nexusrobotechpro.com" },
              { icon: Globe, title: "WhatsApp / WeChat", value: "+86 138-0000-0000", sub: "Instant messaging support", href: "https://wa.me/8613800000000" },
            ].map(({ icon: Icon, title, value, sub, href }) => (
              <a key={title} href={href} className="surface-card p-5 flex items-start gap-4 card-hover">
                <div className="w-10 h-10 rounded bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div>
                  <div className="text-[#64748B] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{title}</div>
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{value}</div>
                  <div className="text-[#475569] text-xs mt-0.5" style={{ fontFamily: "'Exo 2', sans-serif" }}>{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Consultation */}
      <section id="consultation" className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="section-label mb-3">Technical Consultation</div>
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Expert Technical Guidance
              </h2>
              <p className="text-[#94A3B8] mb-6 leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Our team of application engineers provides free technical consultation to help you select the right robotic solution for your specific requirements.
              </p>
              <div className="space-y-3">
                {[
                  "Product selection guidance based on your application",
                  "Technical specification review and comparison",
                  "Integration feasibility assessment",
                  "Regulatory compliance consultation",
                  "ROI and cost-benefit analysis",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="surface-card p-6">
              <h3 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>Request Consultation</h3>
              <TallyForm />
            </div>
          </div>
        </div>
      </section>

      {/* After-Sales Service */}
      <section id="aftersales" className="py-16 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">After-Sales Service</div>
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Global Service Network
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Warranty Policy */}
            <div className="surface-card p-6">
              <h3 className="text-white font-bold text-lg mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>Warranty Policy</h3>
              <div className="space-y-3">
                {[
                  { label: "Standard Warranty", value: "12 months" },
                  { label: "Extended Warranty", value: "24 / 36 months" },
                  { label: "Response Time", value: "< 4 hours" },
                  { label: "On-Site Service", value: "Global coverage" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-[#1A2E4A]">
                    <span className="text-[#64748B] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{label}</span>
                    <span className="text-[#0EA5E9] font-semibold text-sm mono-text">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Process */}
            <div className="surface-card p-6">
              <h3 className="text-white font-bold text-lg mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>Maintenance Process</h3>
              <div className="space-y-3">
                {[
                  { step: "01", text: "Submit service request via hotline or portal" },
                  { step: "02", text: "Remote diagnosis by technical engineer" },
                  { step: "03", text: "Spare parts dispatch if required" },
                  { step: "04", text: "On-site service dispatch if needed" },
                  { step: "05", text: "Service completion and documentation" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="text-[#0EA5E9] font-bold text-xs mono-text flex-shrink-0 mt-0.5">{step}</span>
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Regions */}
            <div className="surface-card p-6">
              <h3 className="text-white font-bold text-lg mb-4 tech-border-left" style={{ fontFamily: "'Exo 2', sans-serif" }}>Service Regions</h3>
              <div className="space-y-3">
                {SERVICE_REGIONS.map((r) => (
                  <div key={r.region} className="pb-3 border-b border-[#1A2E4A] last:border-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-semibold text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{r.region}</span>
                      <span className="text-[#0EA5E9] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{r.office}</span>
                    </div>
                    <p className="text-[#475569] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{r.coverage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">Frequently Asked Questions</div>
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Exo 2', sans-serif" }}>FAQs</h2>
          <div className="max-w-3xl space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
