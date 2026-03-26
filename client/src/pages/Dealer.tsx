// ============================================================
// NEXUS ROBOTECHPRO — Dealer & Agent Page
// Partnership program, requirements, application form
// ============================================================

import { useState } from "react";
import { CheckCircle, Globe, TrendingUp, Shield, Users, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DEALER_BENEFITS = [
  { icon: TrendingUp, title: "Competitive Margins", desc: "Industry-leading dealer margins with volume-based incentives and annual bonus programs." },
  { icon: Shield, title: "Exclusive Territory", desc: "Protected sales territories to prevent channel conflicts and ensure your market investment." },
  { icon: Users, title: "Technical Training", desc: "Comprehensive product training, certification programs, and ongoing technical support." },
  { icon: Globe, title: "Marketing Support", desc: "Co-marketing funds, demo units, trade show support, and localized marketing materials." },
];

const REQUIREMENTS = [
  "Established business entity with 2+ years of operation",
  "Technical capability to provide pre-sales and after-sales support",
  "Existing customer base in target market (medical, industrial, or research)",
  "Minimum annual purchase commitment (varies by region and product line)",
  "Dedicated sales team with robotics or automation background",
  "Service infrastructure for installation and maintenance",
];

const PROCESS_STEPS = [
  { step: "01", title: "Submit Application", desc: "Complete the online dealer application form with your company profile and market information." },
  { step: "02", title: "Initial Review", desc: "Our partnership team reviews your application within 5 business days." },
  { step: "03", title: "Video Interview", desc: "A 30-minute video call with our regional sales director to discuss partnership details." },
  { step: "04", title: "Agreement & Training", desc: "Sign the dealer agreement and complete our product certification training program." },
  { step: "05", title: "Launch & Support", desc: "Receive your starter kit, demo units, and dedicated account manager support." },
];

const SUCCESS_STORIES = [
  {
    company: "MedTech Solutions GmbH",
    region: "Germany",
    years: "5 years",
    products: "Surgical Robots, Exoskeletons",
    achievement: "Became the #1 surgical robot distributor in DACH region within 3 years.",
  },
  {
    company: "Pacific Robotics Inc.",
    region: "Australia",
    years: "3 years",
    products: "Robot Dogs, Delivery Robots",
    achievement: "Deployed 200+ units across Australian hospitals and universities.",
  },
  {
    company: "AutoWeld Systems",
    region: "USA",
    years: "4 years",
    products: "Welding Robots, Robot Parts",
    achievement: "Generated $8M annual revenue serving automotive manufacturers.",
  },
];

export default function Dealer() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    company: "", name: "", email: "", phone: "", country: "",
    businessType: "", yearsInBusiness: "", targetProducts: "",
    annualRevenue: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = "w-full bg-[#0C1829] border border-[#1A2E4A] rounded px-3 py-2.5 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/30 transition-colors";

  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="section-label mb-3">Partnership Program</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Dealer & Agent Program
          </h1>
          <p className="text-[#94A3B8] max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Join our global network of authorized dealers and agents. Build a profitable business representing the world's most advanced robotic systems.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3 text-center">Why Partner With Us</div>
          <h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Dealer Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEALER_BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="surface-card p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>{title}</h3>
                <p className="text-[#64748B] text-xs leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="section-label mb-3">Eligibility</div>
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Cooperation Requirements
              </h2>
              <div className="space-y-3">
                {REQUIREMENTS.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label mb-3">Application Process</div>
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                How to Apply
              </h2>
              <div className="space-y-4">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0EA5E9] text-xs font-bold mono-text">{step.step}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5" style={{ fontFamily: "'Exo 2', sans-serif" }}>{step.title}</div>
                      <div className="text-[#64748B] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3 text-center">Dealer Success Stories</div>
          <h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Our Partners' Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map((story) => (
              <div key={story.company} className="surface-card p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{story.company}</div>
                    <div className="text-[#64748B] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{story.region} · {story.years} partner</div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="product-tag">{story.products.split(",")[0]}</span>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  {story.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-label mb-3">Apply Now</div>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Dealer Application Form
              </h2>
            </div>

            {submitted ? (
              <div className="surface-card p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#0EA5E9]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>Application Submitted!</h3>
                <p className="text-[#64748B]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Our partnership team will review your application and contact you within 5 business days.
                </p>
              </div>
            ) : (
              <div className="surface-card p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: "Company Name", key: "company", type: "text", placeholder: "Your Company Ltd." },
                      { label: "Contact Name", key: "name", type: "text", placeholder: "Full Name" },
                      { label: "Email", key: "email", type: "email", placeholder: "email@company.com" },
                      { label: "Phone / WhatsApp", key: "phone", type: "tel", placeholder: "+1 234 567 8900" },
                      { label: "Country / Region", key: "country", type: "text", placeholder: "e.g. Germany" },
                      { label: "Years in Business", key: "yearsInBusiness", type: "text", placeholder: "e.g. 8 years" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key}>
                        <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>{label} *</label>
                        <input
                          type={type}
                          required
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={e => setForm({ ...form, [key]: e.target.value })}
                          className={inputClass}
                          style={{ fontFamily: "'Exo 2', sans-serif" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>Business Type *</label>
                    <select
                      required
                      value={form.businessType}
                      onChange={e => setForm({ ...form, businessType: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      <option value="">Select business type...</option>
                      <option value="distributor">Distributor</option>
                      <option value="agent">Sales Agent</option>
                      <option value="integrator">System Integrator</option>
                      <option value="reseller">Value-Added Reseller</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>Target Products *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Surgical Robots, Welding Robots"
                      value={form.targetProducts}
                      onChange={e => setForm({ ...form, targetProducts: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>Company Introduction & Market Capabilities</label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your company, existing customer base, technical capabilities, and why you want to partner with Nexus RoboTechPro..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-glow w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded text-sm disabled:opacity-70"
                  >
                    {loading ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Submit Application</>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
