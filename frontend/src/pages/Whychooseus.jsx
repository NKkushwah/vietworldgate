import React from "react";
import "./Whychooseus.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/vietworldgate.png";

const WhyChooseUs = () => {
  const whatsappNumber = "917982295530"; // 👉 change this

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
  Study Abroad with
  
  <span className="brand"> <img src={logo} className="heros-logo" /> VietWorldGate</span>
</h1>

          <button className="whatsapp-btn" onClick={openWhatsApp}>
            Chat on WhatsApp
          </button>
        </div>
<div className="heros-right">
  <div className="card">
    <img src="https://flagcdn.com/w320/ca.png" alt="Canada" />
    Canada
  </div>

  <div className="card">
    <img src="https://flagcdn.com/w320/au.png" alt="Australia" />
    Australia
  </div>

  <div className="card">
    <img src="https://flagcdn.com/w320/gb.png" alt="UK" />
    UK
  </div>

  <div className="card">
    <img src="https://flagcdn.com/w320/jp.png" alt="Japan" />
    Japan
  </div>

  <div className="card">
    <img src="https://flagcdn.com/w320/it.png" alt="Italy" />
    Italy
  </div>

  <div className="card">
    <img src="https://flagcdn.com/w320/ae.png" alt="Dubai" />
    Dubai
  </div>

  <div className="card">
    <img src="https://flagcdn.com/w320/de.png" alt="Germany" />
    Germany
  </div>
</div>
      </section>
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