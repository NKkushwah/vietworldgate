import { useEffect } from "react";
import "./CompanyHistory.css";
import Navbar from "../components/Navbar";
import surajsir from "../assets/vietworldgate.png";
import Footer from "../components/Footer";
import { FaMapMarkerAlt } from "react-icons/fa";


import { FaBuilding, FaGraduationCap, FaGlobe, FaHandshake } from "react-icons/fa";

const TIMELINE = [
  {
    year: "2020",
    icon: <FaBuilding />,
    title: "The Beginning",
    desc: "Started our journey from Delhi with a mission to simplify international student visa processes for global education."
  },

  {
    year: "2026",
    icon: <FaGraduationCap />,
    title: "1,000+ Success Stories",
    desc: "Crossed a major milestone of processing over 1,000 successful student visas for the UK, USA, and Canada and other countries."
  },

  {
    year: "2018",
    icon: <FaGlobe />,
    title: "Going Global",
    desc: "Opened our international hub in London to provide direct on-ground post-arrival support to our students."
  },

  {
    year: "2024",
    icon: <FaHandshake />,
    title: "Expansion Phase",
    desc: "Expanded footprints heavily across Delhi NCR by establishing state-of-the-art consultancy branches in Noida & Ghaziabad."
  },
];


const ACHIEVEMENTS = [
  { icon: "🏅", title: "Best Immigration Consultant", desc: "Recognised consecutively as Northern India's trusted visa and study abroad consultants." },
  { icon: "📜", title: "100% Secure Processing", desc: "ISO certified document verification system ensuring zero error in application file management." },
  { icon: "🏫", title: "200+ Global University Ties", desc: "Direct tie-ups with premium universities across the UK, Europe, Australia & Canada." },
  { icon: "👩‍🎓", title: "98.4% Visa Success Rate", desc: "One of the highest visa approval rates in the country backed by expert documentation lawyers." },
];

const STATS = [
  { val: "6+", lbl: "Years of Trust" },
  { val: "15,000+", lbl: "Visas Approved" },
  { val: "4", lbl: "Strategic Branches" },
  { val: "15+", lbl: "Countries Offered" },
  { val: "200+", lbl: "Partner Colleges" },
  { val: "50+", lbl: "Expert Counselors" },
];

// FIXED: Branches data containing flag CDN links and accurate Google Maps search targets
const OFFICES = [
  {
    city: "London",
    country: "United Kingdom",
    flagUrl: "https://flagcdn.com/w160/gb.png",
    desc: " University Coordination, Student Support Abroad",
    mapUrl: "https://maps.google.com/?q=401A+Oxford+Rd,+Reading+RG30+1HA,+UK"
  },
  {
    city: "Delhi",
    country: "India (Head Office)",
    flagUrl: "https://flagcdn.com/w160/in.png",
    desc: "Visa Guidance, Career Counseling",
    mapUrl: "https://maps.google.com/?q=Lajpat+Nagar+III,+New+Delhi,+Delhi+110024"
  },
  {
    city: "Noida",
    country: "India (Regional)",
    flagUrl: "https://flagcdn.com/w160/in.png",
    desc: "Counseling, Admissions, Visa Assistance.",
    mapUrl: "https://maps.google.com/?q=28.62936,77.37881"
  },
  {
    city: "Ghaziabad",
    country: "India (Branch)",
    flagUrl: "https://flagcdn.com/w160/in.png",
    desc: "Student Counseling, Documentation Support.",
    mapUrl: "https://maps.google.com/?q=28.673900, 77.364600"
  },
];

/* ── 2. SCROLL REVEAL INTERSECTION EFFECT ── */
function useReveal(selector) {

  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}

/* ── 3. MAIN INTEGRATED RENDER FRAMEWORK ── */
export default function CompanyHistory() {
  useReveal(".ch-tl-item");
  useReveal(".ch-stat");

  return (
    <>
      <Navbar />
      <div className="ch-wrapper">

        {/* SECTION 1: HERO CONTAINER */}
        <section className="ch-hero">
          <div className="ch-hero__img-col">
            <div className="ch-hero__img-card">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80&auto=format&fit=crop"
                alt="Students visa counseling success"
              />
              <div className="ch-hero__img-badge">
                <span className="ch-hero__img-badge-num">6+</span>
                <span className="ch-hero__img-badge-lbl">Years of Global Success</span>
              </div>
            </div>
          </div>

          <div className="ch-hero__content">
            <span className="ch-hero__tag">Global Visa Experts</span>
            <h1 className="ch-hero__h1">
              Your Gateway to<br />
              <em>Global Education</em>
            </h1>
            <p className="ch-hero__sub">
              From seamless documentation processing to guaranteed university admissions, we clear your paths to study and settle in top abroad countries.
            </p>

            <div className="ch-hero__pills">
              <div className="ch-hero__pill">
                <span className="ch-hero__pill-val">15k+</span>
                <span className="ch-hero__pill-lbl">Approved Visas</span>
              </div>
              <div className="ch-hero__pill">
                <span className="ch-hero__pill-val">4</span>
                <span className="ch-hero__pill-lbl">Key Branches</span>
              </div>
              <div className="ch-hero__pill">
                <span className="ch-hero__pill-val">98%</span>
                <span className="ch-hero__pill-lbl">Success Rate</span>
              </div>
            </div>

            <div className="ch-hero__btns">
              <a href="#global-presence" className="ch-btn ch-btn--primary">
                Locate Our Branches ↓
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSefWVUVnbBT3GSCLjJM9bKP7hymqVhPTHbixEvbltPcJtVbMA/viewform?usp=publish-editor" className="ch-btn ch-btn--ghost">
                Book Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: TIMELINE METRICS */}
        <section className="ch-timeline" id="timeline">
          <div className="sec-head">
            <span className="eyebrow">Our Milestones</span>
            <h2 className="sec-title">How We Built Excellence</h2>
          </div>
          <div className="ch-tl-wrap">
            {TIMELINE.map(item => (
              <div className="ch-tl-item" key={item.year}>
                <div className="ch-tl-card">
                  <div className="ch-tl-icon">{item.icon}</div>
                  <div className="ch-tl-year">{item.year}</div>
                  <h3 className="ch-tl-title">{item.title}</h3>
                  <p className="ch-tl-desc">{item.desc}</p>
                </div>
                <div className="ch-tl-node"><div className="ch-tl-dot" /></div>
                <div className="ch-tl-blank" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CREDENTIALS */}
        <section className="ch-achieve">
          <div className="sec-head">
            <span className="eyebrow eyebrow--white">Credentials &amp; Recognition</span>
            <h2 className="sec-title sec-title--green">Why Thousands Trust Us</h2>
          </div>
          <div className="ch-achieve-grid">
            {ACHIEVEMENTS.map(a => (
              <div className="ch-ach-card" key={a.title}>
                <div className="ch-ach-icon">{a.icon}</div>
                <h4 className="ch-ach-title">{a.title}</h4>
                <p className="ch-ach-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CORPORATE MESSAGE */}
        <section className="ch-founder">
          <div className="ch-founder-inner">
            <div className="ch-founder-img-wrap">
              <div className="ch-founder-ph">
                <div className="image-wrapper">
                  <img src={surajsir} className="image-dir" alt="Suraj Sir" />
                  <div className="image-dirs" >  <span>VIET WORLDGATE</span></div>

                </div>
                <span className="ch-founder-initials"></span>

              </div>
            </div>
            <div>
              <span className="eyebrow">Director's Message</span>
              <p className="ch-founder-quote">
                Studying abroad is not just an application, it's a future career blueprint.
              </p>
              <div className="ch-founder-divider" />
              <p className="ch-founder-body">
                When we started our first consulting setup in Delhi, we observed how complex and unguided the visa processes were for young aspirants. We vowed to make transparency our greatest asset.
              </p>
              <p className="ch-founder-body">
                Today, expanding into Ghaziabad, Noida, and having active corporate channels in London ensures our students receive support before they board, and also after they safely land in their destination countries.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: DATA RECORDS */}
        <section className="ch-stats">
          <div className="sec-head">
            <span className="eyebrow">Track Record</span>
            <h2 className="sec-title">Our Growth in Numbers</h2>
          </div>
          <div className="ch-stats-grid">
            {STATS.map((s, i) => (
              <div className="ch-stat" key={s.lbl} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="ch-stat-val">{s.val}</span>
                <span className="ch-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FIXED SECTION 6: GLOBAL PRESENCE (White Background, Flag Images & Map Icons) */}
        <section className="ch-global-new" id="global-presence">
          <div className="sec-head">
            <span className="eyebrow">Our Global Presence</span>
            <h2 className="sec-title">Our Authorized Network &amp; Branches</h2>
            <p className="sec-sub">
              Click on any branch card or live map pin to instantly open its tracking location and routing on Google Maps.
            </p>
          </div>

          {/* Modern Interactive Map Graphic Box Container */}
          <div className="ch-map-container-new">
            <div className="ch-world-map-overlay"></div>

            {/* Animated Pins positioned on the map graphic context */}
            <div className="ch-map-pins-wrapper">

              <div
                className="ch-live-pin pin-london"
                onClick={() => window.open('https://maps.google.com/?q=401A+Oxford+Rd,+Reading+RG30+1HA,+UK', '_blank')}
              >
                <span className="pin-pulse"></span> <FaMapMarkerAlt className="pin-icon" />
                <span className="pin-text">London Office</span>
              </div>

              <div
                className="ch-live-pin pin-delhi"
                onClick={() => window.open('https://maps.google.com/?q=Lajpat+Nagar+III,+New+Delhi,+Delhi+110024', '_blank')}
              >
                <span className="pin-pulse"></span> <FaMapMarkerAlt className="pin-icon" />
                <span className="pin-text">Delhi NCR Hub</span>
              </div>

              <div
                className="ch-live-pin pin-noida"
                onClick={() => window.open('https://maps.google.com/?q=28.62936,77.37881', '_blank')}
              >
                <span className="pin-pulse"></span> <FaMapMarkerAlt className="pin-icon" />
                <span className="pin-text">Noida NCR Hub</span>
              </div>

              <div
                className="ch-live-pin pin-ghaziabad"
                onClick={() => window.open('https://maps.google.com/?q=28.673900, 77.364600', '_blank')}
              >
                <span className="pin-pulse"></span>   <FaMapMarkerAlt className="pin-icon" />
                <span className="pin-text">Ghaziabad Office</span>
              </div>

            </div>
          </div>

          {/* Brand Clickable Grid Cards with Custom Flag Images */}
          <div className="ch-branches-grid-new">
            {OFFICES.map((o) => (
              <a href={o.mapUrl} target="_blank" rel="noopener noreferrer" className="ch-branch-card-new" key={o.city}>
                <div className="ch-card-top-row">
                  <div className="ch-flag-wrapper">
                    <img src={o.flagUrl} alt={`${o.city} Flag`} className="ch-branch-flag-img" />
                  </div>
                  <div className="ch-map-icon-indicator">
                    <FaMapMarkerAlt className="pin-icon" />
                  </div>
                </div>

                <div className="ch-card-body-row">
                  <h3 className="ch-branch-title-text">{o.city}</h3>
                  <span className="ch-branch-country-text">{o.country}</span>
                  <p className="ch-branch-desc-text">{o.desc}</p>
                </div>

                <div className="ch-card-footer-action">
                  <span className="ch-action-link-text">Get Directions on Map →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SECTION 7: FINAL CTA CONTAINER */}
        <section className="ch-cta">
          <div className="ch-cta-inner">
            <span className="eyebrow">Start Your File Today</span>
            <h2 className="sec-title" style={{ marginBottom: 18 }}>
              Ready to Plan Your Next<br />International Semester?
            </h2>
            <p className="sec-sub" style={{ margin: "0 auto 44px" }}>
              Connect with our certified visa agents at Ghaziabad, Noida, Delhi, or London for a free profile evaluation session.
            </p>
            <div className="ch-cta-btns">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSefWVUVnbBT3GSCLjJM9bKP7hymqVhPTHbixEvbltPcJtVbMA/viewform?usp=publish-editor" className="ch-btn ch-btn--primary">Contact me</a>
            </div>
          </div>
        </section>



      </div>
      <Footer />
    </>
  );
}