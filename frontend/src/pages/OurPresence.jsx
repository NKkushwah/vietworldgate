import React, { useState } from "react";
import "./OurPresence.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


// ── LUCIDE ICONS IMPORT ─────────────────────────────────────
import { 
  GraduationCap, 
  Globe, 
  Briefcase, 
  Plane, 
  Users, 
  Building2, 
  MapPin, 
  Search, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Compass, 
  Cpu,
  Phone,
  Mail
} from "lucide-react";

// ── DATA ────────────────────────────────────────────────────

const services = [
  {
    icon: <GraduationCap size={24} />,
    name: "Student Visa Solutions",
    desc: "Comprehensive university admissions support, premium SOP review, strategic financial documentation guidance, and error-free visa filing for elite institutions.",
    countries: ["Canada", "Australia", "Dubai", "Germany", "Italy", "Japan", "New Zealand", "UK"],
    highlight: false,
  },
  {
    icon: <Globe size={24} />,
    name: "PR & Settle Abroad",
    desc: "Permanent residency pathways, skilled migration profiles, and tailored consulting for long-term global settlement and career security.",
    countries: ["Canada", "Australia", "Dubai", "Germany", "Italy", "Japan", "New Zealand", "UK"],
    highlight: false,
  },
  {
    icon: <Briefcase size={24} />,
    name: "Global Work Permits",
    desc: "Employer-sponsored visas, skilled worker pathways, LMIA processing assistance, and complete executive relocation management.",
    countries: ["Canada", "Australia", "Dubai", "Germany", "Italy", "Japan", "New Zealand", "UK"],
    highlight: false,
  },
  {
    icon: <Plane size={24} />,
    name: "Tourist & Visitor Permits",
    desc: "Fast-track travel and visit visa applications featuring precise document mapping, appointment coordination, and strict legal verification.",
    countries: ["Canada", "Australia", "Dubai", "Germany", "Italy", "Japan", "New Zealand", "UK"],
    highlight: false,
  },
  {
    icon: <Users size={24} />,
    name: "Family Reunification",
    desc: "Spouse visas, dependent child additions, and family settlement applications managed with deep legal care to keep your loved ones together.",
    countries: ["Canada", "Australia", "Dubai", "Germany", "Italy", "Japan", "New Zealand", "UK"],
    highlight: false,
  },
  {
    icon: <Building2 size={24} />,
    name: "Business & Investor Visas",
    desc: "Short-stay corporate permits and long-term residency-by-investment programs for entrepreneurs seeking dynamic international footprints.",
    countries: ["Canada", "Australia", "Dubai", "Germany", "Italy", "Japan", "New Zealand", "UK"],
    highlight: false,
  },
];

// FIXED: Text flags converted to standard Flag Image URLs
const destinations = [
  { flag: "https://flagcdn.com/us.svg", name: "United States", types: "Ivy League · Stem · Tech Work", popular: true },
  { flag: "https://flagcdn.com/gb.svg", name: "United Kingdom", types: "Master's Pathways · Skilled Work", popular: true },
  { flag: "https://flagcdn.com/ca.svg", name: "Canada", types: "Express Entry · Study · PNP", popular: true },
  { flag: "https://flagcdn.com/au.svg", name: "Australia", types: "Higher Ed · Regional PR · Subclass", popular: true },
  { flag: "https://flagcdn.com/de.svg", name: "Germany", types: "Free Education · Technical Fields", popular: false },
  { flag: "https://flagcdn.com/ae.svg", name: "UAE / Dubai", types: "Corporate Hub · Investor Pass", popular: false },
  { flag: "https://flagcdn.com/sg.svg", name: "Singapore", types: "Global Tech · Business Executive", popular: false },
  { flag: "https://flagcdn.com/jp.svg", name: "Japan", types: "Advanced Research · Global Work", popular: false },
  { flag: "https://flagcdn.com/nz.svg", name: "New Zealand", types: "Green List Careers · Pathways", popular: false },
  { flag: "https://flagcdn.com/pt.svg", name: "Portugal", types: "D7 Visa · Cultural Immersion", popular: false },
  { flag: "https://flagcdn.com/ie.svg", name: "Ireland", types: "Silicon Docks Careers · Post-Study", popular: false },
  { flag: "https://flagcdn.com/nl.svg", name: "Netherlands", types: "Highly Skilled Migrant · Tech", popular: false },
];

const steps = [
  { num: "1", icon: <Search size={22} />, title: "Profile Mapping", desc: "We evaluate your academic goals and professional history to choose ideal destinations within 24 hours." },
  { num: "2", icon: "🤝", title: "Institutional Matching", desc: "Securing admissions, verifying course criteria, and polishing your SOP to stand out to selection boards." },
  { num: "3", icon: <CheckCircle2 size={22} />, title: "File Optimization", desc: "Compiling financial statements, sponsorships, and visa applications with zero errors for peak compliance." },
  { num: "4", icon: <Compass size={22} />, title: "Immigration Prep", desc: "Rigorous mock visa interviews, confidence coaching, and lifestyle orientation for your transition." },
  { num: "5", icon: <Award size={22} />, title: "Worldgate Cleared", desc: "Collect your visa stamp, receive pre-departure checklists, and embark on life-changing international journey." },
];

// FIXED: Text flags converted to standard Flag Image URLs for the visual bar section
const approvalRates = [
  { flag: "https://flagcdn.com/us.svg", country: "United States", rate: 93 },
  { flag: "https://flagcdn.com/ca.svg", country: "Canada", rate: 98 },
  { flag: "https://flagcdn.com/gb.svg", country: "United Kingdom", rate: 96 },
  { flag: "https://flagcdn.com/au.svg", country: "Australia", rate: 97 },
  { flag: "https://flagcdn.com/de.svg", country: "Germany", rate: 95 },
  { flag: "https://flagcdn.com/ae.svg", country: "UAE / Dubai", rate: 96 },
  { flag: "https://flagcdn.com/jp.svg", country: "Japan", rate: 99 },
  { flag: "https://flagcdn.com/nz.svg", country: "New Zealand", rate: 95 },
];

const corePillars = [
  { icon: <ShieldCheck size={24} />, title: "Trusted Global Reliability", desc: "Known for meticulous attention to legal detail, absolute transparency in processing, and verifiable institutional success." },
  { icon: <TrendingUp size={24} />, title: "Empowering Future Leaders", desc: "We don't just secure visas; we advise on strategic career paths, scholarships, and professional alignment." },
  { icon: <Globe size={24} />, title: "Expanding Partnerships", desc: "Deep operational ties with top-tier international universities and regulatory bodies across 40+ countries." },
  { icon: <Cpu size={24} />, title: "Digital-First Solutions", desc: "Utilizing modern tracking mechanisms, real-time secure document portals, and future-focused consulting methods." },
];

const testimonials = [
  {
    stars: "★★★★★",
    quote: "VIET Worldgate mapped out my journey to Canada brilliantly. From course matching to the visa seal, everything was transparent and flawless.",
    name: "Ishita Verma",
    visa: "UK Student Visa · University of Toronto",
    initials: "RD",
  },
  {
    stars: "★★★★★",
    quote: "After previous rejections elsewhere, their specific counseling and structured mock interviews unlocked my US visa on the first try.",
    name: "Lakshya Sharma",
    visa: "UK F-1 Student Visa · NYU Steinhardt",
    initials: "MN",
  },
  {
    stars: "★★★★★",
    quote: "Exceptional transparency throughout. They handled my UK Skilled Migrant application and spouse dependent visa together with absolute ease.",
    name: "Dharshini",
    visa: "UK Skilled Worker & Dependent Route",
    initials: "AT",
  },
];

// FIXED: Cleaned array structure, added custom SVG flag images, separated addresses properly
const globalDesks = [
  { 
    flag: "https://flagcdn.com/gb.svg", 
    city: "London", 
    address: "A Oxford Street, London",
    country: "United Kingdom", 
    phone: "+91 79822 95530", 
    email: "info@vietworldgate.com", 
    url: "ContactLondon", 
    hq: true 
  },
  { 
    flag: "https://flagcdn.com/in.svg", 
    city: "Ghaziabad", 
    address: "Ghaziabad ",
    country: "India", 
    phone: "+91 79822 95530", 
    email: "info@vietworldgate.com", 
    url: "ContactGhaziabad" 
  },
  { 
    flag: "https://flagcdn.com/in.svg", 
    city: "Noida", 
    address: "Noida ",
    country: "India", 
    phone: "+91 79822 95530", 
    email: "info@vietworldgate.com", 
    url: "ContactNoida" 
  },
  { 
    flag: "https://flagcdn.com/in.svg", 
    city: "Delhi", 
    address: "Delhi ",
    country: "India", 
    phone: "+91 79822 95530", 
    email: "info@vietworldgate.com", 
    url: "ContactDelhi" 
  },
];

const heroStats = [
  { icon: <ShieldCheck size={24} />, num: "100%", label: "Transparent Processing" },
  { icon: <Building2 size={24} />, num: "500+", label: "Partner Institutions" },
  { icon: <TrendingUp size={24} />, num: "96.4%", label: "Visa Success Ratio" },
  { icon: <Globe size={24} />, num: "40+", label: "Destinations Covered" },
];

const presenceNumbers = [
  { val: "40", suf: "+", label: "Countries Served" },
  { val: "100", suf: "%", label: "Vetted Opportunities" },
  { val: "1", suf: <ShieldCheck size={20} style={{ display: 'inline', marginLeft: '4px' }} />, label: "Trusted Platform" },
  { val: "Thousands", suf: "", label: "Success Stories" },
];

// ── COMPONENT ────────────────────────────────────────────────

export default function OurPresence() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <>
      <Navbar />

      <div className="viet-worldgate-platform">

        {/* ── HERO ── */}
        <section className="vw-hero">
          <div className="container">
            <div className="hero-inner">
              <div>
                <div className="hero-badge">
                  <span className="live-dot" />
                  Intakes & Applications Active
                </div>
                <h1 className="hero-title">
                  Opening Doors to Global Success.<br />
                  <span className="gold-text">Empowering Futures.</span>
                </h1>
                <p className="hero-sub">
                  VIET Worldgate is a premier global education and immigration consultancy. 
                  We turn international ambitions into life-changing realities through high-quality counseling, 
                  absolute transparency, and a relentless commitment to professional outcomes.
                </p>
                <div className="hero-btns">
                  <a href = "/contact-us" className="btn-gold">Begin Profile Evaluation →</a>
                  <a  href="https://wa.me/917982295530" target="_blank" rel="noopener noreferrer" className="btn-ghost">Connect with Our Consultants</a>
                </div>
              </div>

              <div className="hero-stats-col">
                {heroStats.map((s, i) => (
                  <div key={i} className="hstat-card">
                    <div className="hstat-inner-icon">{s.icon}</div>
                    <div>
                      <div className="hstat-num">{s.num}</div>
                      <div className="hstat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="services-section" id="services">
          <div className="container">
            <div className="sec-header">
              <div>
                <span className="eyebrow">Our Specialisations</span>
                <h2 className="sec-title">Delivering Service Excellence</h2>
              </div>
              <p className="sec-desc">
                From premium university applications and visa filing to complete legal pathways 
                for families and professionals, we protect your dream at every milestone.
              </p>
            </div>

            <div className="services-grid">
              {services.map((s, i) => (
                <div key={i} className={`svc-card${s.highlight ? " highlight" : ""}`}>
                  <div className="svc-icon">{s.icon}</div>
                  <h3 className="svc-name">{s.name}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <div className="svc-countries">
                    {s.countries.map((c, j) => (
                      <span key={j} className="ctag">{c}</span>
                    ))}
                  </div>
                  <a href="https://wa.me/917982295530" target="_blank" rel="noopener noreferrer" className="btn-services">
                    Contact via WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="process-section">
          <div className="container">
            <div className="process-head">
              <span className="eyebrow">Strategic Workflow</span>
              <h2 className="sec-title">The Path to International Success</h2>
              <p className="sec-desc">
                Our systematic approach provides absolute structural clarity from profile analysis 
                to finding your new international horizon.
              </p>
            </div>

            <div className="steps-row">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`step ${activeStep === i ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className="step-num">{s.num}</div>
                  <div className="step-icon">{s.icon}</div>
                  <div className="step-title">{s.title}</div>
                  <p className="step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE PILLARS & METRICS ── */}
        <section className="why-section">
          <div className="container">
            <div className="why-grid">
              <div>
                <span className="eyebrow">Our Guiding Vision</span>
                <h2 className="sec-title">Building Lifelong Global Relationships</h2>
                <ul className="why-features">
                  {corePillars.map((w, i) => (
                    <li key={i} className="wf-item">
                      <div className="wf-icon">{w.icon}</div>
                      <div className="wf-text">
                        <h4>{w.title}</h4>
                        <p>{w.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="why-visual">
                <div className="why-visual-title">Verified Visa Approvals By Destination</div>
                <div className="approval-bars">
                  {approvalRates.map((a, i) => (
                    <div key={i} className="abar-row">
                      <div className="abar-country">
                        {/* FIXED: Replaced standard string format with custom Flag Image rendering */}
                        <span className="abar-flag-text">
                          <img src={a.flag} alt={a.country} style={{ width: "24px", height: "auto", borderRadius: "2px", display: "inline-block", verticalAlign: "middle" }} />
                        </span>
                        <span>{a.country}</span>
                      </div>
                      <div className="abar-wrap">
                        <div className="abar-fill" style={{ width: `${a.rate}%` }} />
                      </div>
                      <div className="abar-val">{a.rate}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="testimonials-section">
          <div className="container">
            <div className="testimonials-head">
              <span className="eyebrow">Transformations</span>
              <h2 className="sec-title">Real Success Stories, Real Impacts</h2>
            </div>

            <div className="testi-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="testi-card">
                  <div className="testi-stars">{t.stars}</div>
                  <p className="testi-quote">"{t.quote}"</p>
                  <div className="testi-author">
                    <div className="testi-avatar">{t.initials}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-visa">{t.visa}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="show-more-wrapper">
              <a href="/feedback" className="show-more-btn">
                Show More
              </a>
            </div>
          </div>
        </section>
    
        {/* ── GLOBAL DESKS ── */}
        <section className="offices-section" id="desks">
          <div className="container">
            <div className="sec-header">
              <div>
                <span className="eyebrow">Global Support Gateway</span>
                <h2 className="sec-title">Connect with VIET Worldgate</h2>
              </div>
              <p className="sec-desc">
                Reach out to our specialized consulting teams across our international liaison desks for smooth management of your file.
              </p>
            </div>

            <div className="offices-grid">
              {globalDesks.map((o, i) => (
                <div key={i} className={`office-card${o.hq ? " hq" : ""}`}>
                  
                  {o.hq && <span className="hq-badge">Primary Hub</span>}

                  {/* FIXED: Render structured SVG images instead of static icons */}
                  <div className="office-flag" style={{ marginBottom: "12px", display: "block" }}>
                    <img 
                      src={o.flag} 
                      alt={`${o.country} Flag`} 
                      style={{ width: "35px", height: "24px", objectFit: "cover", borderRadius: "3px", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} 
                    />
                  </div>

                  {/* FIXED: Re-aligned cleanly using Lucide MapPin globally inside layout */}
                  <div className="office-city" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <MapPin size={16} style={{ color: "var(--gold, #d4af37)" }} /> {o.city}
                  </div>
                  <div className="office-country">{o.country}</div>
                  <p style={{ fontSize: "12px", color: "#8c8c8c", marginTop: "2px", marginBottom: "12px" }}>{o.address}</p>

                  <ul className="office-info">
                    {/* 📞 Phone Click */}
                    <li>
                      <span className="ic"><Phone size={14} /></span>
                      <a href={`tel:${o.phone.replace(/\s+/g, "")}`} className="contact-link">
                        {o.phone}
                      </a>
                    </li>

                    {/* ✉️ Email Click */}
                    <li>
                      <span className="ic"><Mail size={14} /></span>
                      <a href={`https://mail.google.com/mail/?view=cm&to=${o.email}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                        {o.email}
                      </a>
                    </li>
                  </ul>

                  {/* ✅ Read More Button */}
                  <a href={o.url} className="read-more-btn">
                    Read More →
                  </a>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <span className="eyebrow">Ignite Your Potential</span>
              <h2 className="cta-title">
                Your Gateway to International Success<br />
                <span className="gold-text">Starts with an Expert Session.</span>
              </h2>
              <p className="cta-sub">
                Schedule a focused consultation with a qualified global migration coordinator. 
                Gain absolute strategic clarity with no hidden liabilities or commitments.
              </p>
            </div>
            <div className="cta-btns">
              {/* 📞 Call Button */}
              <a href="tel:+917982295530" className="btn-gold">
                📞 Schedule Free Advisory Call →
              </a>

              {/* 💬 WhatsApp Button */}
              <a href="https://wa.me/917982295530" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                 Contact via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
   
    </>
  );
}