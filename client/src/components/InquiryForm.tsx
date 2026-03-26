// ============================================================
// NEXUS ROBOTECHPRO — Inquiry Form Component
// Reusable form for product inquiries and quotation requests
// ============================================================

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

interface InquiryFormProps {
  defaultProduct?: string;
  compact?: boolean;
}

export default function InquiryForm({ defaultProduct = "", compact = false }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: defaultProduct,
    message: "",
    needQuote: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `w-full bg-[#0C1829] border border-[#1A2E4A] rounded px-3 py-2.5 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/30 transition-colors`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center mb-4">
          <CheckCircle className="w-7 h-7 text-[#0EA5E9]" />
        </div>
        <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          Inquiry Received!
        </h3>
        <p className="text-[#64748B] text-sm max-w-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          Our sales team will respond within 24 hours. Check your email for confirmation.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[#0EA5E9] text-sm hover:underline"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-4`}>
        <div>
          <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Company *
          </label>
          <input
            type="text"
            required
            placeholder="Your Company Name"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Email *
          </label>
          <input
            type="email"
            required
            placeholder="john@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            placeholder="+1 234 567 8900"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          Product of Interest *
        </label>
        <select
          required
          value={form.product}
          onChange={(e) => setForm({ ...form, product: e.target.value })}
          className={inputClass}
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          <option value="">Select a product...</option>
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
          <option value="multiple">Multiple Products</option>
          <option value="custom">Custom Solution</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          Message / Requirements *
        </label>
        <textarea
          required
          rows={compact ? 3 : 4}
          placeholder="Please describe your requirements, quantity needed, application scenario, or any specific technical questions..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="needQuote"
          checked={form.needQuote}
          onChange={(e) => setForm({ ...form, needQuote: e.target.checked })}
          className="w-4 h-4 rounded border-[#1A2E4A] bg-[#0C1829] accent-[#0EA5E9]"
        />
        <label htmlFor="needQuote" className="text-sm text-[#94A3B8]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          I need a formal quotation / pricing proposal
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary-glow w-full flex items-center justify-center gap-2 px-6 py-3 rounded text-sm disabled:opacity-70"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Inquiry
          </>
        )}
      </button>

      <p className="text-[#475569] text-xs text-center" style={{ fontFamily: "'Exo 2', sans-serif" }}>
        We respond within 24 hours. Your information is kept strictly confidential.
      </p>
    </form>
  );
}
