// ============================================================
// NEXUS ROBOTECHPRO — Navbar Component
// Design: Precision Dark Tech — transparent to solid on scroll
// ============================================================

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, MessageSquare } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060D1A]/95 backdrop-blur-md border-b border-[#1A2E4A] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: '93%', maxWidth: '1400px' }}>
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
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

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      className="nav-link flex items-center gap-1 px-3 py-2 rounded text-sm"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link href={item.href} className="nav-link px-3 py-2 rounded text-sm block">
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 min-w-[200px] surface-elevated rounded-lg py-2 shadow-xl"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#94A3B8] hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/5 transition-colors duration-150"
                          style={{ fontFamily: "'Exo 2', sans-serif" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary-glow px-4 py-2 rounded text-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#94A3B8] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0C1829]/98 backdrop-blur-md border-t border-[#1A2E4A] max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2.5 text-[#94A3B8] hover:text-[#0EA5E9] text-sm font-medium"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-[#64748B] hover:text-[#0EA5E9] transition-colors"
                              style={{ fontFamily: "'Exo 2', sans-serif" }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-[#94A3B8] hover:text-[#0EA5E9] text-sm font-medium transition-colors"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-[#1A2E4A]">
                <Link
                  href="/contact"
                  className="btn-primary-glow w-full flex items-center justify-center gap-2 px-4 py-3 rounded text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Inquiry Button */}
      <Link href="/contact" className="float-inquiry">
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">Inquiry</span>
      </Link>
    </>
  );
}
