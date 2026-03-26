// ============================================================
// NEXUS ROBOTECHPRO — About Us Page
// Company profile, factory, certifications, team & R&D
// ============================================================

import { Link } from "wouter";
import { Award, Factory, Users, Zap, Globe, Shield, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CERTIFICATIONS, COMPANY_STATS } from "@/lib/data";

const TIMELINE = [
  { year: "2008", event: "Nexus RoboTechPro founded in Shenzhen, China. Initial focus on industrial robotic arms." },
  { year: "2011", event: "Received first CE certification. Expanded to European market with welding robots." },
  { year: "2014", event: "Launched surgical robot division. Began FDA 510(k) clearance process." },
  { year: "2016", event: "Achieved FDA clearance for NRT-S100 surgical robot. Entered US medical market." },
  { year: "2018", event: "Launched quadruped robot dog platform. Partnered with 20+ research universities." },
  { year: "2020", event: "Introduced exoskeleton and delivery robot product lines. Surpassed 5,000 units deployed." },
  { year: "2022", event: "Opened R&D centers in Germany and Singapore. Achieved ISO 13485 certification." },
  { year: "2024", event: "Surpassed 10,000 robots deployed globally. Expanded to 50+ countries." },
];

const TEAM_MEMBERS = [
  { name: "Dr. Chen Wei", title: "CEO & Co-Founder", bg: "bg-[#0EA5E9]/10", initials: "CW" },
  { name: "Dr. Sarah Liu", title: "CTO & Head of R&D", bg: "bg-[#38BDF8]/10", initials: "SL" },
  { name: "Michael Zhang", title: "VP Global Sales", bg: "bg-[#0EA5E9]/10", initials: "MZ" },
  { name: "Dr. James Park", title: "Chief Medical Officer", bg: "bg-[#38BDF8]/10", initials: "JP" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="section-label mb-3">About Nexus RoboTechPro</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            16 Years of Robotic<br />Manufacturing Excellence
          </h1>
          <p className="text-[#94A3B8] max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            From a small engineering team in Shenzhen to a global leader in advanced robotics — our journey is defined by precision, innovation, and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#060D1A] border-b border-[#1A2E4A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number">{stat.value}{stat.suffix}</div>
                <div className="text-[#64748B] text-sm mt-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section id="company" className="py-20 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-3">Company Profile</div>
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                A Global Leader in Advanced Robotics
              </h2>
              <div className="space-y-4 text-[#94A3B8] text-sm leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                <p>
                  Founded in 2008, Nexus RoboTechPro has grown from a focused engineering startup into one of the world's leading manufacturers of advanced robotic systems. Headquartered in Shenzhen, China, with R&D centers in Germany and Singapore, we serve customers in 50+ countries across medical, industrial, research, and logistics sectors.
                </p>
                <p>
                  Our core philosophy is simple: build robots that solve real-world problems with uncompromising precision. Every product we manufacture undergoes rigorous testing and quality control to meet the highest international standards, including FDA, CE, ISO 9001, and ISO 13485 certifications.
                </p>
                <p>
                  With a 300+ strong R&D team holding 120+ patents, we continuously push the boundaries of what's possible in robotics. Our standard product lines ensure fast delivery and proven performance, while our customization capabilities allow us to address unique application requirements.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Globe, title: "Global Presence", desc: "Operations in 50+ countries with regional offices in USA, Germany, Japan, and Singapore" },
                { icon: Zap, title: "Innovation-Driven", desc: "120+ patents, 300+ R&D engineers, and annual R&D investment exceeding 15% of revenue" },
                { icon: Shield, title: "Quality Certified", desc: "FDA, CE, ISO 9001, ISO 13485 — meeting the strictest global quality standards" },
                { icon: Users, title: "Customer-Centric", desc: "Dedicated account managers and 24/7 technical support for all enterprise clients" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 surface-card p-4">
                  <div className="w-10 h-10 rounded bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5" style={{ fontFamily: "'Exo 2', sans-serif" }}>{title}</div>
                    <div className="text-[#64748B] text-xs" style={{ fontFamily: "'Exo 2', sans-serif" }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development History */}
      <section className="py-20 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3 text-center">Our Journey</div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Development History
          </h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#1A2E4A]" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className={`relative flex ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} gap-8`}>
                  <div className="flex-1 pl-12 sm:pl-0">
                    <div className={`surface-card p-5 ${i % 2 === 0 ? "sm:mr-8" : "sm:ml-8"}`}>
                      <div className="text-[#0EA5E9] font-black text-xl mono-text mb-2">{item.year}</div>
                      <p className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-[#0EA5E9] border-2 border-[#060D1A] -translate-x-1/2 mt-6" />
                  <div className="flex-1 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factory & Production */}
      <section id="factory" className="py-20 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">Manufacturing Excellence</div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Factory & Production
          </h2>
          <p className="text-[#94A3B8] mb-10 max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Our 50,000 m² manufacturing facility in Shenzhen houses state-of-the-art production lines, clean rooms, and testing laboratories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-xl overflow-hidden border border-[#1A2E4A]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663470022895/2VJcLxvpuPkUTryZZjUQgV/factory-overview-VRNJ5YqLAKmwH9ev4rr4bD.webp"
                alt="Factory Overview"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50,000 m²", label: "Manufacturing Area" },
                { value: "12", label: "Production Lines" },
                { value: "500+", label: "Production Staff" },
                { value: "ISO 9001", label: "Quality Certified" },
              ].map((item) => (
                <div key={item.label} className="surface-card p-5 flex flex-col justify-center">
                  <div className="text-[#0EA5E9] font-black text-2xl mono-text mb-1">{item.value}</div>
                  <div className="text-[#64748B] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Clean Room Production", "Automated Assembly", "Quality Testing Lab", "Precision Machining"].map((item) => (
              <div key={item} className="surface-card p-4 text-center">
                <div className="w-10 h-10 rounded bg-[#0EA5E9]/10 flex items-center justify-center mx-auto mb-3">
                  <Factory className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div className="text-white text-xs font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-[#060D1A]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">Quality Assurance</div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Certifications & Standards
          </h2>
          <p className="text-[#94A3B8] mb-10 max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Our products meet the highest international standards across medical, industrial, and environmental categories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="surface-card p-5 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <div className="text-white font-black text-sm mono-text">{cert.name}</div>
                    <div className="product-tag mt-0.5">{cert.category}</div>
                  </div>
                </div>
                <p className="text-[#64748B] text-xs leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & R&D */}
      <section id="team" className="py-20 bg-[#0C1829]">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="section-label mb-3">Leadership & Innovation</div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Team & R&D
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#94A3B8] mb-6 leading-relaxed" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Our 300+ R&D engineers come from top universities and research institutions worldwide. With backgrounds in mechanical engineering, AI, computer vision, and medical device development, they drive continuous innovation across all product lines.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: "300+", label: "R&D Engineers" },
                  { value: "120+", label: "Patents Filed" },
                  { value: "15%", label: "Revenue in R&D" },
                  { value: "3", label: "R&D Centers" },
                ].map((item) => (
                  <div key={item.label} className="surface-card p-4">
                    <div className="text-[#0EA5E9] font-black text-2xl mono-text mb-1">{item.value}</div>
                    <div className="text-[#64748B] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {["AI-powered motion control algorithms", "Computer vision and sensor fusion", "Medical-grade safety systems", "Human-robot interaction research"].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0EA5E9]" />
                    <span className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="surface-card p-5 text-center">
                  <div className={`w-16 h-16 rounded-full ${member.bg} border border-[#0EA5E9]/20 flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-[#0EA5E9] font-bold text-lg" style={{ fontFamily: "'Exo 2', sans-serif" }}>{member.initials}</span>
                  </div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>{member.name}</div>
                  <div className="text-[#64748B] text-xs mt-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{member.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
