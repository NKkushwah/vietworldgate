import React, { useState } from "react";
import "./EducationFair.css";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaWhatsapp, FaPassport, FaGlobe, FaGraduationCap } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMoneyBillWave, FaUniversity, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";



const countriesDataList = [
  { name: "United Kingdom", visaType: "Tier 4 Student Visa", speed: "15 Days Processing", flag: "🇬🇧" },
  { name: "Canada", visaType: "Study Permit (SDS)", speed: "20 Days Processing", flag: "🇨🇦" },
  { name: "Australia", visaType: "Subclass 500", speed: "14 Days Processing", flag: "🇦🇺" },
  { name: "United States", visaType: "F-1 Student Visa", speed: "30 Days Processing", flag: "🇺🇸" },
  { name: "Germany", visaType: "National Visa (D)", speed: "25 Days Processing", flag: "🇩🇪" },
  { name: "France", visaType: "VLS-TS Visa", speed: "18 Days Processing", flag: "🇫🇷" },
  { name: "Ireland", visaType: "Stamp 2 Visa", speed: "20 Days Processing", flag: "🇮🇪" },
  { name: "New Zealand", visaType: "Fee Paying Student", speed: "22 Days Processing", flag: "🇳🇿" },
];



const benefits = [
  {
    icon: <FaMoneyBillWave />,
    title: "Save Application Fees",
    desc: "Apply to multiple universities without paying extra charges."
  },
  {
    icon: <FaUniversity />,
    title: "Direct Admission Guidance",
    desc: "Get expert support directly from university representatives."
  },
  {
    icon: <FaGraduationCap />,
    title: "Scholarship Opportunities and finalcial aid",
    desc: "Discover exclusive scholarships and financial aid options."
  },
  {
    icon: <FaUserTie />,
    title: "Career Counseling",
    desc: "Get personalized career advice from professionals."
  },
   {
    icon: <FaUserTie />,
    title: "Get Accurate information directly from expert",
    desc: "Get Accurate information directly from expert."
  },
 {
    icon: <FaUniversity />,
    title: " Meet universities in one place ",
    desc: "This save both time and research efforts"
  }
];

const coursesData = [
  "Global MBA & Management",
  "Engineering & Technology",
  "Medical & Healthcare",
  "Aviation & Aerospace",
  "Data Science & AI",
  "International Law",
  "Hospitality & Tourism",
  "Media & Mass Communication",
  "Biomedical Sciences",
  "Finance & Banking",
];

const globalUniversities = [
  {
    name: "University of Toronto",
    location: "Canada",
    fees: "$ 35,000 | Annual Tuition",
    programs: "150+ Programs",
    visaSuccess: "98% Visa Success Rate",
    img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
  },
  {
    name: "University of Melbourne",
    location: "Australia",
    fees: "$ 38,000 | Annual Tuition",
    programs: "120+ Programs",
    visaSuccess: "96% Visa Success Rate",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Technical University of Munich",
    location: "Germany",
    fees: "€ 0 - 3,000 | Minimal Tuition",
    programs: "80+ Programs",
    visaSuccess: "95% Visa Success Rate",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    name: "Coventry University",
    location: "United Kingdom",
    fees: "£ 16,500 | Annual Tuition",
    programs: "110+ Programs",
    visaSuccess: "97% Visa Success Rate",
    img: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    name: "Arizona State University",
    location: "USA",
    fees: "$ 31,000 | Annual Tuition",
    programs: "200+ Programs",
    visaSuccess: "94% Visa Success Rate",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
  },
];

const EducationFair = () => {
    const [flagIndex, setFlagIndex] = useState(0);
const [showMoreCountries, setShowMoreCountries] = useState(false);
  const [topIndex, setTopIndex] = useState(0);
  const [searchIndex, setSearchIndex] = useState(0);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const phoneNumber = "917982295530"; 
  const message = "Hi, I am looking to study abroad and want assistance with admission and student visas.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  

  // Top Colleges Slider Logic
  const nextTop = () => {
    if (topIndex < globalUniversities.length - 1) setTopIndex(topIndex + 1);
  };
  const prevTop = () => {
    if (topIndex > 0) setTopIndex(topIndex - 1);
  };

  // Most Searches Slider Logic
  const nextSearch = () => {
    if (searchIndex < globalUniversities.length - 1) setSearchIndex(searchIndex + 1);
  };
  const prevSearch = () => {
    if (searchIndex > 0) setSearchIndex(searchIndex - 1);
  };

  const visibleCourses = showAllCourses ? coursesData : coursesData.slice(0, 4);
  // Slider Navigation Controls
const nextFlags = () => {
  if (flagIndex < countriesDataList.slice(0, 4).length - 1) {
    setFlagIndex(flagIndex + 1);
  }
};

const prevFlags = () => {
  if (flagIndex > 0) {
    setFlagIndex(flagIndex - 1);
  }
};

  return (
    <>
    <Navbar />
      {/* HERO SECTION */}
      <section className="heros">
        <div className="heros-container">
          <div className="heros-left">
            <span className="badges">✈️ Global Admissions & Visa Experts</span>
            <h1>
              Study At Your Dream Global College. <br />
              <span>We Handle The Visa!</span>
            </h1>

            <p>
              Get end-to-end guidance from picking premium international universities to seamless visa processing. Turn your global education dreams into reality today.
            </p>

            <div className="statss">
              <div className="cards">
                <h2>500+</h2>
                <p>Global Universities</p>
              </div>
              <div className="cards">
                <h2>100%</h2>
                <p>Visa Assistance</p>
              </div>
              <div className="cards">
                <h2>15+</h2>
                <p>Countries Options</p>
              </div>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapps-hero-btn">
              <FaWhatsapp /> Talk to a Visa Expert
            </a>
          </div>

          <div className="heros-right">
            <img src="https://images.pexels.com/photos/7972741/pexels-photo-7972741.jpeg" alt="Global graduates" />
          </div>
        </div>
      </section>

       <section className="benefitss">
      <div className="containers">
        
        <div className="benefitss-header">
          <h2>Why Attend Our Education Fair?</h2>
          <p>Unlock opportunities, save money, and get expert guidance — all in one place.</p>
        </div>

        <div className="benefitss-grid">
          {benefits.map((item, index) => (
            <div className="benefits-card" key={index}>
              <div className="icons">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="benefitss-cta">
            <a  href={whatsappLink} target="_blank" rel="noopener noreferrer" >
          <button  href={whatsappLink}  className="benefitss-btn">Register Now</button>
          </a>
        </div>

      </div>
    </section>

      {/* TOP COLLEGES SECTION WITH WORKING SLIDER */}
      <section className="tops-colleges">
        <div className="containers">
          <div className="headers">
            <div>
              <h2>Top Global Universities</h2>
              <p>Explore world-class campuses across popular study destinations</p>
            </div>
            <div className="arrowss">
             
            </div>
          </div>
   
   
         <div className="sliders-container">
    {/* Clean responsive grid wrapper */}
    <div className="universities-grid">
      {globalUniversities.map((college, idx) => (
        <div className="customs-card" key={idx}>
          <img src={college.img} alt={college.name} />
          <div className="cards-body">
            <h3>{college.name}</h3>
            <p className="locations"><FaMapMarkerAlt /> {college.location}</p>
            <div className="infos">
              <span>{college.programs}</span>
              <strong>{college.fees}</strong>
            </div>
            <div className="visas-badge"><FaPassport /> {college.visaSuccess}</div>
            <button onClick={() => window.open(whatsappLink, '_blank')} className="applys-btn">
              Apply & Process Visa
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Center aligned "Show More" Button */}
    <div className="buttons-container">
      <a href='/CoursePortal'>
        <button className="tops-college-button">Show More</button>
      </a>
    </div>
  </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="coursess">
        <div className="containers">
          <h2 className="titles">Popular Global Programs</h2>
         

          <div className="courses-grid">
            {visibleCourses.map((course, idx) => (
                 <a href = "/CoursePortal">
              <div className="courses-card" key={idx} >
              
                <FaGraduationCap className="courses-icon" />
                <span>{course}</span>
           
              </div>
                   </a>
            ))}
          </div>

          <div className="shows-more">
            <button onClick={() => setShowAllCourses(!showAllCourses)}>
              {showAllCourses ? "Show Less" : "Show More Fields"}
            </button>
          </div>
        </div>
      </section>

      {/* MOST SEARCHED DESTINATIONS WITH WORKING SLIDER */}


   

               
              


  <section className="whatsapps-section">
  <div className="whatsapps-box">
    
    <span className="tags">CONTACT US</span>

    <h2>
      Ready To Get Started? <br />
      <span>Let’s Talk To Us Today</span>
    </h2>

    <p>
      Get expert guidance on college selection, visa process, and scholarships.
      Our consultants are ready to help you step-by-step.
    </p>

    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapps-btn"
    >
      <FaWhatsapp /> Get Started
    </a>

  </div>
</section>

     {/*  testimonial showcase */}

     {/* RECENT REVIEWS SECTION */}
<section className="recents-reviews">
  <div className="containers">
    
    <div className="reviewss-header">
      <h2>Recent Reviews</h2>
      <p>
        Hear from our global students who successfully obtained their visas and admission 
        to top-tier international universities.
      </p>
    </div>

    <div className="reviewss-grid">
      
      {/* CARD 1 */}
      <div className="reviews-card">
        <div className="reviewers-avatar">
          {/* <img src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/669726e7b6388b54f9aa2769_66553f0390479b8e5a3fc524_image_CMEex1C1_1716770910814_raw.jpeg" alt="Student" /> */}
        </div>
        <p className="reviews-text">
          "The admission team mapped my profile perfectly to top UK universities, and the visa desk got my Tier-4 student visa approved in just 10 days with minimum effort on my end!"
        </p>
        <div className="reviews-footer">
          <div className="reviewers-info">
            <h4>Vikas Yadav</h4>
            <span>MSc Data Science,UK</span>
          </div>
          <div className="ratings">⭐⭐⭐⭐⭐</div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="reviews-card">
        <div className="reviewers-avatar">
          {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Student" /> */}
        </div>
        <p className="review-text">
          "Highly professional services. From SOP documentation to visa interview mock prep, their consultants guided me every step of the way for my Canadian student permit."
        </p>
        <div className="reviews-footer">
          <div className="reviewers-info">
            <h4>Rahul Singh</h4>
            <span>MBA Graduate, Canada</span>
          </div>
          <div className="ratings">⭐⭐⭐⭐⭐</div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="reviews-card">
        <div className="reviewers-avatar">
          {/* <img src="https://miro.medium.com/1*LqClB-Wa__W9WrNqP74I3Q.jpeg" alt="Student" /> */}
        </div>
        <p className="reviews-text">
          "I was worried about my gap years, but their specialized immigration legal desk structured my file flawlessly. Got my Australian subclass 500 visa without a single hitch!"
        </p>
        <div className="reviews-footer">
          <div className="reviewers-info">
            <h4>Arjun Mehra</h4>
            <span>B.Eng Student, Australia</span>
          </div>
          <div className="ratings">⭐⭐⭐⭐⭐</div>
        </div>
      </div>

    </div>

  </div>
</section>
      <Footer />
      {/* COUNTRY FLAGS SLIDER & GRID SECTION */}
   
    </>
  );
};

export default EducationFair;