// ============================================================
// NEXUS ROBOTECHPRO — Resources Page
// Manuals, CAD, Technical Docs, Blog, Videos
// ============================================================

import { useState } from "react";
import { Link } from "wouter";
import { Download, FileText, Video, BookOpen, ChevronRight, Lock, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/data";

const BLOG_POSTS = [
  {
    id: "surgical-robot-buying-guide",
    title: "How to Choose the Right Surgical Robot for Your Hospital",
    category: "Product Guide",
    date: "2024-11-15",
    readTime: "8 min",
    excerpt: "A comprehensive guide for hospital procurement teams evaluating surgical robotic systems. Covers key specifications, certification requirements, and total cost of ownership.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    id: "robot-dog-research-applications",
    title: "5 Breakthrough Research Applications for Quadruped Robots in 2024",
    category: "Industry Insights",
    date: "2024-10-22",
    readTime: "6 min",
    excerpt: "From disaster response to underground mining inspection, quadruped robots are transforming research and industrial applications worldwide.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    id: "welding-automation-roi",
    title: "ROI Analysis: Arc Welding Automation in Manufacturing",
    category: "Industry Insights",
    date: "2024-09-18",
    readTime: "10 min",
    excerpt: "Detailed ROI calculation methodology for manufacturers considering welding robot automation. Includes labor cost savings, quality improvements, and payback period analysis.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  },
  {
    id: "exoskeleton-rehabilitation",
    title: "Exoskeleton Technology in Modern Rehabilitation Medicine",
    category: "Medical",
    date: "2024-08-30",
    readTime: "7 min",
    excerpt: "How robotic exoskeletons are revolutionizing physical rehabilitation for stroke patients and spinal cord injury recovery.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
  },
];

const VIDEOS = [
  { title: "NRT-S200 Pro Surgical Robot — Product Demo", duration: "4:32", type: "Product Demo", thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80", youtubeId: "dQw4w9WgXcQ" },
  { title: "Nexus Factory Tour — Production Facility", duration: "8:15", type: "Factory", thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470022895/2VJcLxvpuPkUTryZZjUQgV/factory-overview-VRNJ5YqLAKmwH9ev4rr4bD.webp", youtubeId: "dQw4w9WgXcQ" },
  { title: "NRD-Q2 Pro Robot Dog — All-Terrain Test", duration: "3:48", type: "Product Demo", thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470022895/2VJcLxvpuPkUTryZZjUQgV/robot-dog-product-JEZxSKzm82TDWqMnyNdFo2.webp", youtubeId: "dQw4w9WgXcQ" },
  { title: "BMW Manufacturing Case Study", duration: "5:20", type: "Case Study", thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80", youtubeId: "dQw4w9WgXcQ" },
];

function DownloadForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center mx-auto mb-4">
          <Download className="w-6 h-6 text-[#0EA5E9]" />
        </div>
        <h3 className="text-white font-bold mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>Download Ready</h3>
        <p className="text-[#64748B] text-sm mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>The file has been sent to your email.</p>
        <button onClick={onClose} className="btn-primary-glow px-4 py-2 rounded text-sm">Close</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>Download Document</h3>
      {[
        { label: "Full Name", key: "name", type: "text", placeholder: "John Smith" },
        { label: "Email", key: "email", type: "email", placeholder: "john@company.com" },
        { label: "Company", key: "company", type: "text", placeholder: "Your Company" },
      ].map(({ label, key, type, placeholder }) => (
        <div key={key}>
          <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Exo 2', sans-serif" }}>{label} *</label>
          <input
            type={type}
            required
            placeholder={placeholder}
            value={form[key as keyof typeof form]}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
            className="w-full bg-[#0C1829] border border-[#1A2E4A] rounded px-3 py-2.5 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#0EA5E9] transition-colors"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          />
        </div>
      ))}
      <div className="flex gap-3">
        <button type="submit" className="btn-primary-glow flex items-center gap-2 px-4 py-2.5 rounded text-sm flex-1">
          <Download className="w-4 h-4" /> Download
        </button>
        <button type="button" onClick={onClose} className="px-4 py-2.5 rounded text-sm border border-[#1A2E4A] text-[#64748B] hover:text-white transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function Resources() {
  const [activeTab, setActiveTab] = useState("manuals");
  const [downloadModal, setDownloadModal] = useState(false);

  const TABS = [
    { id: "manuals", label: "Product Manuals", icon: FileText },
    { id: "cad", label: "CAD Drawings", icon: Download },
    { id: "technical", label: "Technical Docs", icon: BookOpen },
    { id: "blog", label: "Blog & Insights", icon: BookOpen },
    { id: "videos", label: "Videos", icon: Video },
  ];

  return (
    <div className="min-h-screen bg-[#060D1A]">
      <Navbar />

      <section className="pt-28 pb-16 bg-[#0C1829] border-b border-[#1A2E4A] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="relative mx-auto px-3 sm:px-4 lg:px-6">
          <div className="section-label mb-3">Knowledge Center</div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>Resources</h1>
          <p className="text-[#94A3B8] max-w-2xl" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Product manuals, CAD drawings, technical documentation, industry insights, and video content for our global customers.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 z-30 bg-[#060D1A]/95 backdrop-blur-md border-b border-[#1A2E4A] py-3">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                id={id}
                onClick={() => setActiveTab(id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold transition-all duration-200 ${
                  activeTab === id ? "bg-[#0EA5E9] text-white" : "text-[#64748B] hover:text-[#0EA5E9] border border-[#1A2E4A]"
                }`}
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-3 sm:px-4 lg:px-6" style={{ width: "93%", maxWidth: "1400px" }}>

          {/* Product Manuals */}
          {activeTab === "manuals" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>Product Manuals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {PRODUCTS.map((p) => (
                  <div key={p.id} className="surface-card p-5 card-hover">
                    <div className="text-3xl mb-3">{p.icon}</div>
                    <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{p.name}</h3>
                    <p className="text-[#64748B] text-xs mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>User Manual, Installation Guide, Maintenance Guide</p>
                    <button
                      onClick={() => setDownloadModal(true)}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded text-xs border border-[#0EA5E9]/40 text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      <Download className="w-3.5 h-3.5" /> Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CAD Drawings */}
          {activeTab === "cad" && (
            <div>
              <div className="surface-card p-6 border-l-4 border-[#0EA5E9] mb-8">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>CAD Drawing Access</h3>
                    <p className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                      CAD drawings are available for qualified customers and system integrators. Please provide your company information to access the download.
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>CAD Drawings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {PRODUCTS.map((p) => (
                  <div key={p.id} className="surface-card p-5">
                    <div className="text-3xl mb-3">{p.icon}</div>
                    <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{p.name}</h3>
                    <p className="text-[#64748B] text-xs mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>STEP, IGES, DWG formats available</p>
                    <button
                      onClick={() => setDownloadModal(true)}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded text-xs bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-[#38BDF8] hover:bg-[#0EA5E9]/20 transition-colors"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      <Lock className="w-3 h-3" /> Request Access
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Docs */}
          {activeTab === "technical" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>Technical Documentation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { title: "Installation & Commissioning Guide", desc: "Step-by-step installation procedures for all product lines", type: "PDF", size: "4.2 MB" },
                  { title: "Maintenance & Service Manual", desc: "Preventive maintenance schedules and service procedures", type: "PDF", size: "8.7 MB" },
                  { title: "API & SDK Documentation", desc: "Integration guides for software developers and system integrators", type: "PDF", size: "12.3 MB" },
                  { title: "Safety Guidelines & Compliance", desc: "Safety protocols, risk assessment, and regulatory compliance", type: "PDF", size: "3.1 MB" },
                  { title: "Network & Connectivity Setup", desc: "WiFi, Ethernet, and cloud connectivity configuration", type: "PDF", size: "2.8 MB" },
                  { title: "Troubleshooting & Diagnostics", desc: "Common issues, error codes, and diagnostic procedures", type: "PDF", size: "5.4 MB" },
                ].map((doc) => (
                  <div key={doc.title} className="surface-card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#0EA5E9]/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#0EA5E9]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{doc.title}</h3>
                      <p className="text-[#64748B] text-xs mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>{doc.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#475569] text-xs mono-text">{doc.type} · {doc.size}</span>
                        <button
                          onClick={() => setDownloadModal(true)}
                          className="flex items-center gap-1.5 text-xs text-[#0EA5E9] hover:underline"
                          style={{ fontFamily: "'Exo 2', sans-serif" }}
                        >
                          <Download className="w-3.5 h-3.5" /> Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog */}
          {activeTab === "blog" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>Blog & Industry Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BLOG_POSTS.map((post) => (
                  <Link key={post.id} href={`/resources/blog/${post.id}`} className="group surface-card overflow-hidden card-hover block">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="product-tag">{post.category}</span>
                        <span className="text-[#475569] text-xs mono-text">{post.date}</span>
                        <span className="text-[#475569] text-xs">{post.readTime} read</span>
                      </div>
                      <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                        {post.title}
                      </h3>
                      <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {activeTab === "videos" && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>Videos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {VIDEOS.map((video) => (
                  <div key={video.title} className="group surface-card overflow-hidden card-hover cursor-pointer">
                    <div className="relative h-48">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-[#0EA5E9]/90 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] border-transparent border-l-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-0.5 rounded text-white text-xs mono-text">{video.duration}</div>
                      <div className="absolute top-3 left-3">
                        <span className="product-tag">{video.type}</span>
                      </div>
                    </div>
                    <div className="p-4 flex items-start justify-between gap-3">
                      <h3 className="text-white font-bold text-sm group-hover:text-[#0EA5E9] transition-colors" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                        {video.title}
                      </h3>
                      <a href={`https://youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="text-[#64748B] hover:text-[#0EA5E9] flex-shrink-0">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Download Modal */}
      {downloadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setDownloadModal(false)} />
          <div className="relative surface-card rounded-xl p-6 w-full max-w-md">
            <DownloadForm onClose={() => setDownloadModal(false)} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
