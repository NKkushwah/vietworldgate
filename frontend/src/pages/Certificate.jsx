import React from 'react';
import './Certificate.css';
import LogoImage1 from '../assets/componycertificate/certificate1.jpg';
import LogoImage2 from '../assets/componycertificate/certificate2.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Certificate = () => {
  return (
    <>
      <Navbar />
      <div className="cert-page">

        {/* HERO SECTION */}
        <header className="cert-hero">
          <div className="cert-hero__content">
            <h1 className="cert-hero__title">certificate & achievement</h1>
          </div>
        </header>

        {/* CARDS SECTION */}
        <main className="cert-cards">
          <div className="cert-cards__grid">

            {/* Card 1 */}
            <div className="cert-card">
              <img
                src={LogoImage1}
                alt="Certificate One"
                className="cert-card__img"
              />
            </div>

            {/* Card 2 */}
            <div className="cert-card">
              <div className="cert-card__img">
                <img
                  src={LogoImage2}
                  alt="Certificate Two"
                  className="cert-card__img"
                />
              </div>
            </div>

          </div>
        </main>

      </div>
      <Footer />
    </>
  );
};

export default Certificate;