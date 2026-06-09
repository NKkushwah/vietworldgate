// OurServices.jsx
import "./OurServices.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const services = [
  {
    id: 1,
    title: "Course Advice",
    description:
      "Our expert counsellors assist you in selecting the correct program that is the right fit for you and help you navigate your academic journey with confidence.",
    img: "https://images.pexels.com/photos/30677597/pexels-photo-30677597.jpeg",
    alt: "Counsellor advising a student",
    link: "/CourseAdvice",
  },
  {
    id: 2,
    title: "Shortlist Universities",
    description:
      "After choosing the right course, our advisors help you match your personal, academic, and financial profiles to the right university.",
    img: "https://images.pexels.com/photos/17099655/pexels-photo-17099655.jpeg",
    alt: "Student reviewing university notes",
    link: "/ShortlistUniversities",
  },
  {
    id: 3,
    title: "Visa Assistance",
    description:
      "We will walk you through the application process and assist you in preparing the necessary paperwork for your visa submission.",
    img: "https://images.pexels.com/photos/8061986/pexels-photo-8061986.jpeg",
    alt: "Visa application documents on desk",
    link: "/VisaAssistance",
  },
  {
    id: 4,
    title: "Pre-departure Guidelines",
    description:
      "Congratulations on your upcoming study abroad adventure! We know it can be daunting to move to a new country — we'll make sure you're fully prepared.",
    img: "https://images.pexels.com/photos/12767103/pexels-photo-12767103.jpeg",
    alt: "Travel planning with a map and airplane",
    link: "/PreDeparture",
  },
];

// Simple house SVG icon for breadcrumb
function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

export default function OurServices() {
  return (
    <> 
  
    <Navbar />
    <main>
      {/* ── Hero Banner ── */}
      <section className="services-heros" aria-label="Our Services banner">
        <img
          className="services-heros__img"
          src="https://images.pexels.com/photos/4977346/pexels-photo-4977346.jpeg"
          alt="Happy diverse group of students"
        />
        <div className="services-heros__overlay" />
        <div className="services-heros__content">
        
          <nav className="services-heros__breadcrumb" aria-label="Breadcrumb">
           
           
          </nav>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="servicess-section">
        <h2 className="servicess-section__heading">
          Our <span>Services</span>
        </h2>

        <div className="servicess-grid">
          {services.map((svc) => (
            <article className="services-card" key={svc.id}>
              <div className="services-card__img-wrapper">
                <img
                  className="services-card__img"
                  src={svc.img}
                  alt={svc.alt}
                  loading="lazy"
                />
              </div>
              <div className="services-card__body">
                <h3 className="services-card__title">{svc.title}</h3>
                <p className="services-card__desc">{svc.description}</p>
                <a href={svc.link} className="services-card__btn">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
     </>
  );
}