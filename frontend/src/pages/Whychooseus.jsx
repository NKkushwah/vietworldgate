import React from "react";
import "./Whychooseus.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/vietworldgate.png";
import { MessageCircle, Phone } from "lucide-react"; 

const WhyChooseUs = () => {
  const whatsappNumber = "917982295530";
  const phoneNumber = "+917982295530";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const features = [
    {
      title: "Expert Guidance",
      desc: "Experienced consultants guide you at every step of your journey.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "High Visa Success",
      desc: "Strong track record with maximum visa approval success rate.",
      img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
      title: "Top Universities",
      desc: "We connect you with globally recognized universities.",
      img: "https://cdn-icons-png.flaticon.com/512/8074/8074809.png",
    },
    {
      title: "End-to-End Support",
      desc: "From application to visa approval and travel assistance.",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
      title: "Affordable Processing",
      desc: "Transparent pricing with no hidden charges.",
      img: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
    },
    {
      title: "Fast Processing",
      desc: "Quick documentation and faster application processing.",
      img: "https://cdn-icons-png.flaticon.com/512/189/189792.png",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="heros">
        <div className="heros-left">
          <h1>
            Study Abroad with <br />
            <span className="brand">
              <img src={logo} className="heros-logo" alt="VietWorldGate Logo" /> 
              VietWorldGate
            </span>
          </h1>

          <div className="hero-action-btns">
            <button className="whatsapp-btn" onClick={openWhatsApp}>
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
            <a href={`tel:${phoneNumber}`} className="phone-btn-animated">
              <Phone size={18} /> Schedule Call
            </a>
          </div>
        </div>

        {/* FIXED UNIFORM RESPONSIVE GRID */}
        <div className="heros-right">
          <div className="card">
            <img src="https://flagcdn.com/w320/ca.png" alt="Canada" />
            <span>Canada</span>
          </div>
          <div className="card">
            <img src="https://flagcdn.com/w320/au.png" alt="Australia" />
            <span>Australia</span>
          </div>
          <div className="card">
            <img src="https://flagcdn.com/w320/gb.png" alt="UK" />
            <span>UK</span>
          </div>
          <div className="card">
            <img src="https://flagcdn.com/w320/jp.png" alt="Japan" />
            <span>Japan</span>
          </div>
          <div className="card">
            <img src="https://flagcdn.com/w320/it.png" alt="Italy" />
            <span>Italy</span>
          </div>
          <div className="card">
            <img src="https://flagcdn.com/w320/ae.png" alt="Dubai" />
            <span>Dubai</span>
          </div>
          <div className="card">
            <img src="https://flagcdn.com/w320/de.png" alt="Germany" />
            <span>Germany</span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US GRID SECTION */}
      <div className="whys-container">
        <h2>Why Choose Us</h2>
        <div className="why-container">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <img src={item.img} alt={item.title} className="why-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default WhyChooseUs;