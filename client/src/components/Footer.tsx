// ============================================================
// NEXUS ROBOTECHPRO — Footer Component
// Design: Precision Dark Tech — dark navy with blue accents
// ============================================================

import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#040A14] border-t border-[#1A2E4A]">
      <div className="mx-auto px-3 sm:px-4 lg:px-6 py-16" style={{ width: '93%', maxWidth: '1400px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" fill="none" stroke="#0EA5E9" strokeWidth="1.5"/>
                  <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" fill="#0EA5E9" fillOpacity="0.15" stroke="#0EA5E9" strokeWidth="1"/>
                  <path d="M12 18 L18 12 L24 18" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 12 L18 24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="18" r="2" fill="#0EA5E9"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Nexus <span className="text-[#0EA5E9]">RoboTech</span>Pro
                </span>
                <div className="text-[#94A3B8] text-[9px] tracking-[0.15em] uppercase -mt-0.5">Global Robot Manufacturer</div>
              </div>
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Leading global manufacturer of advanced robotic systems since 2008. Serving hospitals, research institutes, manufacturers, and logistics companies in 50+ countries.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:sales@nexusrobotechpro.com" className="flex items-center gap-2.5 text-[#64748B] hover:text-[#0EA5E9] text-sm transition-colors">
                <Mail className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                sales@nexusrobotechpro.com
              </a>
              <a href="tel:+86-400-888-9999" className="flex items-center gap-2.5 text-[#64748B] hover:text-[#0EA5E9] text-sm transition-colors">
                <Phone className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                +86 400-888-9999
              </a>
              <div className="flex items-start gap-2.5 text-[#64748B] text-sm">
                <MapPin className="w-4 h-4 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                <span>No. 88 Innovation Road, Shenzhen, Guangdong, China 518000</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded border border-[#1A2E4A] flex items-center justify-center text-[#64748B] hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-[#1A2E4A] flex items-center justify-center text-[#64748B] hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-[#1A2E4A] flex items-center justify-center text-[#64748B] hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="section-label mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                ["Surgical Robots", "/products/surgical-robots"],
                ["Robot Dogs", "/products/robot-dogs"],
                ["Cooking Robots", "/products/cooking-robots"],
                ["Welding Robots", "/products/welding-robots"],
                ["Special Robots", "/products/special-robots"],
                ["Exoskeletons", "/products/exoskeletons"],
                ["Delivery Robots", "/products/delivery-robots"],
                ["Robot Parts", "/products/robot-parts"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#64748B] hover:text-[#0EA5E9] text-sm transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Company */}
          <div>
            <h4 className="section-label mb-4">Solutions</h4>
            <ul className="space-y-2 mb-6">
              {[
                ["Medical & Healthcare", "/solutions/medical-healthcare"],
                ["Research & Security", "/solutions/research-security"],
                ["Food & Catering", "/solutions/food-catering"],
                ["Manufacturing", "/solutions/manufacturing-welding"],
                ["Logistics & Delivery", "/solutions/logistics-delivery"],
                ["Rehabilitation", "/solutions/rehabilitation-exoskeleton"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#64748B] hover:text-[#0EA5E9] text-sm transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="section-label mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                ["About Us", "/about"],
                ["Case Studies", "/cases"],
                ["Certifications", "/about#certifications"],
                ["Dealer & Agent", "/dealer"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#64748B] hover:text-[#0EA5E9] text-sm transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="section-label mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {[
                ["Product Manuals", "/resources#manuals"],
                ["CAD Drawings", "/resources#cad"],
                ["Technical Docs", "/resources#technical"],
                ["Blog & Insights", "/resources/blog"],
                ["Videos", "/resources#videos"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#64748B] hover:text-[#0EA5E9] text-sm transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="section-label mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                ["Technical Consultation", "/support#consultation"],
                ["After-Sales Service", "/support#aftersales"],
                ["FAQs", "/support#faq"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#64748B] hover:text-[#0EA5E9] text-sm transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="mt-12 pt-8 border-t border-[#1A2E4A]">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[#64748B] text-xs uppercase tracking-wider">Certified:</span>
            {["FDA", "CE", "ISO 9001", "ISO 13485", "RoHS", "FCC", "ATEX"].map((cert) => (
              <span key={cert} className="product-tag">{cert}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[#475569] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              © 2024 Nexus RoboTechPro Co., Ltd. All rights reserved. | ICP No. 2024XXXXXX
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-[#475569] hover:text-[#0EA5E9] text-xs transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[#475569] hover:text-[#0EA5E9] text-xs transition-colors">Terms of Use</Link>
              <a href="https://nexus-website-3ar.pages.dev/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#0EA5E9] text-xs transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
