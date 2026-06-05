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
    <div className="page-container">
      
      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">certificate & achievement</h1>
         
         
        </div>
      </header>

      {/* CARDS SECTION */}
      <main className="cards-container">
        <div className="cards-grid">
          
          {/* Card 1 - Pure Image with Styled Crop */}
          <div className="card">
            
              <img 
                src={LogoImage1}
                alt="Certificate One" 
                className="card-image"
              />
          
          </div>

          {/* Card 2 - Pure Image with Styled Crop */}
          <div className="card">
            <div className="card-image">
              <img 
                src={LogoImage2}
                alt="Certificate Two" 
                className="card-image"
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