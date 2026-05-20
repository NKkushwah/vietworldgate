import React, { useState } from 'react';
import './FaqSection.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FaqSection = () => {
  // Pehla item accordion me automatically khula rahega (Jaise screenshot me hai)
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What is VIEC?",
      answer: "VIEC is a leading overseas education consultancy in India that guides students through every step of the study abroad process—from selecting universities to securing visas."
    },
    {
      question: "How long has VIEC been in operation?",
      answer: "VIEC has been successfully guiding students for over 28 years with a massive network of global institution partners."
    },
    {
      question: "Which countries does VIEC assist with for overseas education?",
      answer: "We offer comprehensive guidance for top study destinations including Australia, UK, Canada, New Zealand, USA, Ireland, and more."
    },
    {
      question: "How can VIEC help me choose the right university?",
      answer: "Our expert counsellors evaluate your academic profile, budget, and career goals to suggest the most appropriate courses and highly reputed global universities."
    },
    {
      question: "Does VIEC assist with visa applications?",
      answer: "Yes, we provide end-to-end support for documentation, visa file preparation, and mock interview sessions to maximize your success rate."
    },
    {
      question: "Will VIEC support me after I reach my study destination?",
      answer: "Absolutely! We provide pre-departure briefings and assist with accommodation connections and post-arrival networks."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-heading-wrapper">
        <h2>
          Frequently Asked Questions <span className="purple-italic">(FAQ)</span>
        </h2>
      </div>

      <div className="faq-container">
        
        {/* Left Side Art Component */}
        <div className="faq-left-artwork">
          <div className="circle-bg-layer layer-1"></div>
          <div className="circle-bg-layer layer-2"></div>
          {/* Apni pointing student transparent image ka path yaha setup karein */}
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=500&auto=format&fit=crop" 
            alt="Student pointing" 
            className="faq-student-img" 
          />
        </div>

        {/* Right Side Accordion Component */}
        <div className="faq-accordion-wrapper">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <div 
                  className="faq-header" 
                  onClick={() => toggleFaq(index)}
                >
                  <span className="faq-question">{faq.question}</span>
                  <div className="faq-toggle-icon">
                    {isOpen ? <FaMinus className="icon-m" /> : <FaPlus className="icon-p" />}
                  </div>
                </div>
                
                {isOpen && (
                  <div className="faq-body">
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;