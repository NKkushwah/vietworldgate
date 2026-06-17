import React, { useRef, useState } from "react";
import "./Socialresponsibility.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Lucide Icons Import (Sirf safe utility icons ko rkha hai, no social brands to avoid Vite crash)
import { 
  UserCheck, 
  GraduationCap, 
  ShieldCheck, 
  Home,
  Play,
  Pause
} from "lucide-react";

// Inline Standard SVG Wrappers for Social Brands (Safe, fast, and crash-proof)
const InstagramIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const YoutubeIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const LinkedinIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const FacebookIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

// Videos imports
import video1 from "../assets/story1video.mp4";
import video2 from "../assets/story2video.Mov";
import video3 from "../assets/story3video.mp4";
import video4 from "../assets/story4video.mp4";
import video5 from "../assets/story5video.mp4";

// Feed Images
import post2Img from "../assets/vietworldgate.png";
import post3Img from "../assets/vietworldgate.png";
import post4Img from "../assets/vietworldgate.png";
import post1Img from "../assets/vietworldgate.png";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/viet.india",
  youtube: "https://www.youtube.com/@viet.worldgate",
  linkedin: "https://linkedin.com/company/vietworldgate",
  facebook: "https://www.facebook.com/vietworldgate", 
};

const VIDEOS = [
  { src: video1, duration: "0:39", title: "A candidate's journey...", tag: "Candidate story", platform: "youtube" },
  { src: video2, duration: "3:28", title: "Candidate's testimonial story...", tag: "Candidate story", platform: "youtube" },
  { src: video3, duration: "7:25", title: "A candidate's journey...", tag: "Candidate story", platform: "instagram" },
  { src: video4, duration: "5:35", title: "Verified employ opport...", tag: "Candidate story", platform: "instagram" },
  { src: video5, duration: "3:35", title: "Support after departure...", tag: "Candidate story", platform: "instagram" },
];

const SOCIAL_POSTS = [
  { platform: "instagram", image: post1Img, title: "Candidate testimonial from South Korea", url: SOCIAL_LINKS.instagram },
  { platform: "instagram", image: post2Img, title: "Candidate testimonial from South Korea", url: SOCIAL_LINKS.instagram },
  { platform: "linkedin", image: post3Img, title: "Candidate testimonial from South Korea",  url: SOCIAL_LINKS.linkedin },
  { platform: "linkedin", image: post4Img, title: "Candidate testimonial from South Korea", url: SOCIAL_LINKS.linkedin },
];

const IMPACT_STATS = [
  { value: "1000+", label: "student placed abroad" },
  { value: "120+", label: "Verified partner employers" },
  { value: "50+", label: "Countries we operate in" },
  { value: "0", label: "Hidden fees, by policy" },
];

const JOURNEY = [
  { icon: UserCheck, title: "Honest counselling" },
  { icon: GraduationCap, title: "Skill & language readiness" },
  { icon: ShieldCheck, title: "Verified employers only" },
  { icon: Home, title: "Support after departure" },
];

export default function SocialResponsibility() {
  const videoRefs = useRef([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(-1);

  const handleVideoClick = (index) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (currentlyPlaying === index) {
      currentVideo.pause();
      setCurrentlyPlaying(-1);
    } else {
      if (currentlyPlaying !== -1 && videoRefs.current[currentlyPlaying]) {
        videoRefs.current[currentlyPlaying].pause();
      }
      currentVideo.muted = false; 
      currentVideo.play().catch((err) => console.log("Video play interrupted:", err));
      setCurrentlyPlaying(index);
    }
  };

  return (
    <>
      <Navbar />
      <main className="vwg-page">
        
        {/* Fixed Hero Background Image & Gradient Overlays */}
        <section className="vwg-hero-bg-container">
          <div className="vwg-hero-bg-content">
            <p className="vwg-eyebrow-light">VietWorldGate &middot; Social responsibility</p>
            <h1 className="vwg-hero-title-light">
              Every visa we issue carries <br className="desktop-br"/>someone's future. 
              <span className="vwg-hero-title-accent-light"> We don't treat that lightly.</span>
            </h1>
            <p className="vwg-hero-sub-light">We help people leave home to build a better one...</p>
          </div>
        </section>

        {/* Impact Board */}
        <section className="vwg-board">
          <div className="vwg-board-header">Our impact</div>
          <div className="vwg-board-grid">
            {IMPACT_STATS.map((stat, idx) => (
              <div className="vwg-board-cell" key={idx}>
                <div className="vwg-board-value">{stat.value}</div>
                <div className="vwg-board-caption">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="vwg-journey">
          <h2 className="vwg-section-title vwg-center-title">How we take responsibility, step by step</h2>
          <div className="vwg-journey-track">
            {JOURNEY.map((item, idx) => {
              const JourneyIcon = item.icon;
              return (
                <div className="vwg-journey-item" key={idx}>
                  <div className="vwg-journey-icon-wrap">
                    <span className="vwg-step-icon">
                      <JourneyIcon size={24} className="vwg-social-icon" />
                    </span>
                  </div>
                  <h3 className="vwg-journey-title">{item.title}</h3>
                  {idx < JOURNEY.length - 1 && <div className="vwg-journey-line" />}
                </div>
              );
            })}
          </div>
        </section>

        {/* Video Gallery with Native Playable Fixed State */}
        <section className="vwg-videos">
          <h2 className="vwg-section-title">See it for yourself</h2>
          <div className="vwg-videos-grid">
            {VIDEOS.map((video, idx) => (
              <div className="vwg-video-card" key={idx}>
                <div 
                  className="vwg-video-thumb" 
                  onClick={() => handleVideoClick(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <video 
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={video.src} 
                    preload="metadata" 
                    controls 
                    playsInline
                    className="vwg-native-video"
                    onPlay={() => setCurrentlyPlaying(idx)}
                    onPause={() => {
                      if (currentlyPlaying === idx) setCurrentlyPlaying(-1);
                    }}
                  />
                  <div className="vwg-video-badge-top">video{idx+1}</div>
                  <div className="vwg-video-duration">{video.duration}</div>
                  
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(15, 23, 42, 0.65)",
                    borderRadius: "50%",
                    padding: "12px",
                    display: currentlyPlaying === idx ? "none" : "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none"
                  }}>
                    <Play size={20} color="#fff" fill="#fff" />
                  </div>
                </div>
                <div className="vwg-video-info">
                  <span className="vwg-video-tag">{video.tag}</span>
                  <h4 className="vwg-video-card-title">{video.title}</h4>
                  <a href={video.platform === "youtube" ? SOCIAL_LINKS.youtube : SOCIAL_LINKS.instagram} className="vwg-video-action-link" target="_blank" rel="noreferrer">
                    {video.platform === "youtube" ? <YoutubeIcon size={18} className="vwg-social-icon" /> : <InstagramIcon size={18} className="vwg-social-icon" />}
                    <span>Show more on {video.platform === "youtube" ? "YouTube" : "Instagram"}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Clickable Feed Grid Section */}
        <section className="vwg-posts">
          <h2 className="vwg-section-title">From our feed</h2>
          <div className="vwg-posts-grid">
            {SOCIAL_POSTS.map((post, idx) => (
              <a 
                href={post.url} 
                className="vwg-post-card-link" 
                target="_blank" 
                rel="noreferrer" 
                key={idx}
              >
                <div className="vwg-post-card">
                  <div className="vwg-post-img-container">
                    <img src={post.image} alt="Feed content" className="vwg-post-img" />
                    <div className={`vwg-feed-icon-badge badge-${post.platform}`}>
                      {post.platform === "instagram" ? <InstagramIcon size={16} className="vwg-social-icon" /> : <LinkedinIcon size={16} className="vwg-social-icon" />}
                    </div>
                  </div>
                  <div className="vwg-post-details">
                    <div className="vwg-post-header-row">
                      <span className="vwg-post-desc">{post.title}</span>
                      <span className="vwg-inline-icon">{post.platform === "instagram" ? <InstagramIcon size={14} className="vwg-social-icon" /> : <LinkedinIcon size={14} className="vwg-social-icon" />}</span>
                    </div>
                    {post.subTitle && <p className="vwg-post-subtext">{post.subTitle}</p>}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Dynamic Follow Strip Block */}
        <section className="vwg-social-strip">
          <div className="vwg-social-strip-text">
            <h2>Follow along</h2>
            <p>We share the journeys, not just the paperwork</p>
          </div>
          <div className="vwg-social-cards">
            <a href={SOCIAL_LINKS.instagram} className="vwg-bottom-card card-insta" target="_blank" rel="noreferrer">
              <InstagramIcon size={28} className="vwg-social-icon" />
              <h4>Instagram</h4>
              <span>Daily stories & reels</span>
            </a>
            <a href={SOCIAL_LINKS.facebook} className="vwg-bottom-card card-fb" target="_blank" rel="noreferrer">
              <FacebookIcon size={28} className="vwg-social-icon" />
              <h4>Facebook</h4>
              <span>Community & news</span>
            </a>
            <a href={SOCIAL_LINKS.youtube} className="vwg-bottom-card card-yt" target="_blank" rel="noreferrer">
              <YoutubeIcon size={28} className="vwg-social-icon" />
              <h4>YouTube</h4>
              <span>Full candidate journeys</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="vwg-bottom-card card-li" target="_blank" rel="noreferrer">
              <LinkedinIcon size={28} className="vwg-social-icon" />
              <h4>LinkedIn</h4>
              <span>Company updates</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}