// ============================================================
// NEXUS ROBOTECHPRO — Contact Us Page
// Global contact info, inquiry form, service network map
// ============================================================

import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TallyForm from "@/components/TallyForm";

const OFFICES = [
  {
    region: "Headquarters",
    city: "Shenzhen, China",
    address: "No. 88 Innovation Road, Nanshan District, Shenzhen, Guangdong 518000",
    phone: "+86 400-888-9999",
    email: "info@nexusrobotechpro.com",
    hours: "Mon–Fri 9:00–18:00 CST",
  },
  {
    region: "North America",
    city: "Los Angeles, USA",
    address: "1234 Technology Drive, Suite 500, Los Angeles, CA 90025",
    phone: "+1 (310) 555-0100",
    email: "usa@nexusrobotechpro.com",
    hours: "Mon–Fri 9:00–17:00 PST",
  },
  {
    region: "Europe",
    city: "Munich, Germany",
    address: "Technologiepark 45, 80807 Munich, Germany",
    phone: "+49 89 555-0200",
    email: "europe@nexusrobotechpro.com",
    hours: "Mon–Fri 9:00–17:00 CET",
  },
  {
    region: "Asia Pacific",
    city: "Singapore",
    address: "1 One-North Crescent, #08-01, Singapore 138538",
    phone: "+65 6555-0300",
    email: "apac@nexusrobotechpro.com",
    hours: "Mon–Fri 9:00–18:00 SGT",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="section-label mb-3">Get in Touch</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>Contact Us</h1>
          <p className="text-[#94A3B8] max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Our global sales and technical teams are ready to assist you. Reach out through any channel — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-12 bg-[#060D1A] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Mail, title: "Email", value: "sales@nexusrobotechpro.com", sub: "General inquiries & quotations", href: "mailto:sales@nexusrobotechpro.com", color: "text-[#0EA5E9]" },
              { icon: Phone, title: "Phone", value: "+86 400-888-9999", sub: "24/7 technical support", href: "tel:+864008889999", color: "text-[#38BDF8]" },
              { icon: MessageCircle, title: "WhatsApp", value: "+86 138-0000-0000", sub: "Instant messaging", href: "https://wa.me/8613800000000", color: "text-[#0EA5E9]" },
              { icon: Globe, title: "WeChat", value: "NexusRoboTech", sub: "Scan QR code to add", href: "#", color: "text-[#38BDF8]" },
            ].map(({ icon: Icon, title, value, sub, href, color }) => (
              <a key={title} href={href} className="surface-card p-5 card-hover block">
                <div className={`${color} mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-[#64748B] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{title}</div>
                <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{value}</div>
                <div className="text-[#475569] text-xs mt-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Inquiry Form + Info */}
      <section className="py-16 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 surface-card p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>Send an Inquiry</h2>
              <p className="text-[#64748B] text-sm mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>Fill out the form and our team will respond within 24 hours.</p>
              <TallyForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="surface-card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#0EA5E9]" />
                  <h3 className="text-white font-bold text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>Response Times</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { type: "General Inquiries", time: "< 24 hours" },
                    { type: "Technical Questions", time: "< 4 hours" },
                    { type: "Quotation Requests", time: "< 24 hours" },
                    { type: "Emergency Support", time: "< 1 hour" },
                  ].map(({ type, time }) => (
                    <div key={type} className="flex justify-between items-center py-2 border-b border-[#1A2E4A] last:border-0">
                      <span className="text-[#94A3B8] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{type}</span>
                      <span className="text-[#0EA5E9] text-xs font-bold mono-text">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card p-5">
                <h3 className="section-label mb-4">Headquarters</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                      No. 88 Innovation Road, Nanshan District, Shenzhen, Guangdong 518000, China
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0EA5E9]" />
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>+86 400-888-9999</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#0EA5E9]" />
                    <a href="mailto:info@nexusrobotechpro.com" className="text-[#94A3B8] hover:text-[#0EA5E9] text-sm transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>info@nexusrobotechpro.com</a>
                  </div>
                </div>
              </div>

              <div className="surface-card p-5">
                <h3 className="section-label mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>Monday – Friday</span>
                    <span className="text-white text-sm font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>9:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>Saturday</span>
                    <span className="text-white text-sm font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>9:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>Technical Support</span>
                    <span className="text-[#0EA5E9] text-sm font-bold" style={{ fontFamily: "'Exo 2', sans-serif" }}>24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">Global Presence</div>
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Our Global Offices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICES.map((office) => (
              <div key={office.region} className="surface-card p-5 card-hover">
                <div className="product-tag mb-3">{office.region}</div>
                <h3 className="text-white font-bold text-base mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>{office.city}</h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#64748B] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    <span className="text-[#94A3B8] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    <a href={`mailto:${office.email}`} className="text-[#94A3B8] hover:text-[#0EA5E9] text-xs transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>{office.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    <span className="text-[#64748B] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
