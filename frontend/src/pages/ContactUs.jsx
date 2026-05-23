import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

import "./ContactUs.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import logo from "../assets/contactimage.jpeg";

export default function ContactUs() {

  const addresses = [
    {
      type: "International Head Office",
      title: "London, United Kingdom",
      text: "401, A Oxford Street, London, United Kingdom",
    },
    {
      type: "Domestic Corporate Office",
      title: "Noida, India",
      text: "36, Block H, Sector 5, Noida, Uttar Pradesh 201301",
    },
    {
      type: "Domestic Branch Office",
      title: "Ghaziabad, India",
      text: "A-112, First Floor, Shyam Park Extension, Sahibabad",
    },
  ];

  const phoneNumbers = [
    {
      label: "Domestic (India):",
      number: "+91-7982295530",
    },
    {
      label: "International:",
      number: "+44 7500494401",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="contact-container">

        {/* Hero Section */}
        <div
          className="hero-banner"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>

            <div className="breadcrumb">
              <span>🏠</span>
              <span>➔</span>
              <span>Contact</span>
            </div>
          </div>
        </div>

        <div className="main-wrapper">

          {/* Info Cards */}
          <div className="info-cards-grid">

            {/* Address Cards */}
            {addresses.map((addr, idx) => (
              <div className="info-card" key={idx}>

                <div className="icon-circle">
                  <MapPin size={28} />
                </div>

                <span className="card-badge">
                  {addr.type}
                </span>

                <h3 className="card-title">
                  {addr.title}
                </h3>

                <p className="card-text">
                  {addr.text}
                </p>

              </div>
            ))}

            {/* Phone Card */}
            <div className="info-card">

              <div className="icon-circle">
                <Phone size={28} />
              </div>

              <span className="card-badge">
                Support Lines
              </span>

              <h3 className="card-title">
                Phone Numbers
              </h3>

              {phoneNumbers.map((phone, idx) => (
                <div key={idx}>

                  <strong className="phone-label">
                    {phone.label}
                  </strong>

                  <p className="card-text">
                    {phone.number}
                  </p>

                </div>
              ))}

            </div>

            {/* Email Card */}
            <div className="info-card">

              <div className="icon-circle">
                <Mail size={28} />
              </div>

              <span className="card-badge">
                Global Inbox
              </span>

              <h3 className="card-title">
                Email Address
              </h3>

              <p
                className="card-text"
                style={{
                  wordBreak: "break-word",
                  marginTop: "4px",
                }}
              >
                info@vietworldgate.com
              </p>

            </div>

          </div>

          {/* Map + WhatsApp */}
          <div className="content-grid">

            {/* Google Map */}
            <div className="map-container">

              <iframe
                title="Location Map"
                src="https://www.google.com/maps?q=28.6293590,77.3788000&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />

            </div>

            {/* WhatsApp Section */}
            <div className="form-container">

              <span className="form-tag">
                Quick Support
              </span>

              <h2 className="form-heading">
                Chat on <span>WhatsApp</span>
              </h2>

              <p
                style={{
                  marginBottom: "20px",
                  color: "#6b7280",
                }}
              >
                Click below to start chatting instantly with our team.
              </p>

              <a
                href="https://wa.me/917982295530?text=Hello%20VIET%20WORLDGATE"
                target="_blank"
                rel="noopener noreferrer"
                className="submit-btn"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Start WhatsApp Chat
              </a>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}