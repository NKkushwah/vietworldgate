import React, { useState } from 'react';
import './TermsConditions.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PolicyPage = () => {
  const [activeTab, setActiveTab] = useState('terms');

  return (

    <>
      <Navbar />

      <div className="policy-container">
        {/* Header Section */}
        <header className="policy-header">
          <div className="header-content">
            <span className="brand-subtext">Viet Worldgate</span>
            <h1 className="header-title">Legal & Privacy Center</h1>
            <p className="header-desc">
              Please read our Terms & Conditions and Privacy Policy carefully to understand our services and guidelines.
            </p>
          </div>

        </header>

        {/* Main Content */}
        <main className="policy-main">

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              onClick={() => setActiveTab('terms')}
              className={`tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            >
              Privacy Policy
            </button>
          </div>

          {/* Dynamic Content Box */}
          <div className="content-card">

            {/* TERMS & CONDITIONS SECTION */}
            {activeTab === 'terms' && (
              <div className="tab-pane-content">
                <h2 className="section-heading">Terms & Conditions</h2>
                <p className="intro-text">
                  Welcome to <strong>Viet Worldgate</strong>. By accessing our website and using our consultancy services, you agree to comply with the following Terms & Conditions.
                </p>

                <div className="sections-wrapper">
                  <section className="content-section">
                    <h3 className="sub-heading">
                      <span className="step-num"></span> Services Offered
                    </h3>
                    <p className="section-p">We provide consultancy and support services including:</p>
                    <ul className="services-grid">
                      <li>Study Visa Assistance</li>
                      <li>Visit Visa Assistance</li>
                      <li>Documentation Guidance</li>
                      <li>Application Filing Support</li>
                      <li>SOP / Cover Letter Guidance</li>
                      <li>IELTS Preparation Guidance</li>
                    </ul>
                  </section>

                  <section className="content-section">
                    <h3 className="sub-heading">
                      <span className="step-num"></span> Nature of Services
                    </h3>
                    <div className="alert-box warning-box">
                      <p className="alert-title">Important Disclaimer:</p>
                      <p>Our services are advisory and consultancy-based only. We do not guarantee visa approvals or job placements.</p>
                    </div>
                    <p className="section-p">We explicitly do <strong>NOT</strong> guarantee:</p>
                    <ul className="bullet-list">
                      <li>Visa Approval / Admission Confirmation</li>
                      <li>Job Placement / Scholarship Approval</li>
                      <li>IELTS/PTE Results</li>
                    </ul>
                    <p className="footnote">All final decisions are made solely by the respective universities, embassies, consulates, and immigration authorities.</p>
                  </section>

                  <section className="content-section">
                    <h3 className="sub-heading">
                      <span className="step-num"></span> Client Responsibilities
                    </h3>
                    <ul className="bullet-list text-list">
                      <li>Provide accurate and genuine information</li>
                      <li>Submit authentic documents</li>
                      <li>Attend interviews, biometrics, and appointments when required</li>
                      <li>Follow timelines and instructions provided by our team</li>
                      <li>Pay agreed fees on time</li>
                    </ul>
                  </section>

                  <section className="content-section">
                    <h3 className="sub-heading">
                      <span className="step-num"></span> Fees & Payments
                    </h3>
                    <p className="section-p">
                      All consultancy fees, processing charges, government fees, biometric fees, booking charges, and third-party charges must be paid as agreed.
                    </p>
                    <p className="highlight-text">Payment obligations remain applicable once the process has been initiated.</p>
                  </section>

                  <section className="content-section">
                    <h3 className="sub-heading">
                      <span className="step-num"></span> Refund Policy
                    </h3>
                    <p className="section-p">Refunds will <strong>not</strong> be provided if:</p>
                    <ul className="bullet-list">
                      <li>Visa applications are rejected or clients voluntarily withdraw applications.</li>
                      <li>Incorrect, misleading, incomplete, or fraudulent documents are submitted.</li>
                      <li>Services have already been initiated.</li>
                    </ul>
                    <div className="alert-box success-box">
                      Refunds may be considered only if the company fails to initiate the agreed process after receiving payment.
                    </div>
                  </section>

                  <section className="content-section">
                    <h3 className="sub-heading">
                      <span className="step-num"></span> No Guarantee Disclaimer
                    </h3>
                    <p className="section-p text-justify">
                      Visa approval, admission offers, scholarships, and immigration outcomes depend entirely on external authorities. The company shall not be responsible for visa refusals, processing delays, admission rejection, embassy decisions, or financial/travel losses resulting from such decisions.
                    </p>
                  </section>

                  <div className="two-column-row">
                    <div>
                      <h4 className="mini-title">Communication</h4>
                      <p className="mini-desc">Email shall be considered the primary official mode of communication. Verbal discussions or informal assurances shall not override written agreements.</p>
                    </div>
                    <div>
                      <h4 className="mini-title"> Document Handling</h4>
                      <p className="mini-desc">Clients voluntarily submit documents. Reasonable care will be taken, but we are not liable for delays or losses caused by couriers, embassies, or third-parties.</p>
                    </div>
                  </div>

                  <div className="alert-box danger-box">
                    <p className="alert-title">Misrepresentation Alert</p>
                    <p>Submission of forged, fake, or misleading documents may result in immediate termination of services, no refund eligibility, and reporting to relevant authorities where required.</p>
                  </div>

                  <footer className="footer-notes">
                    <p><strong>Limitation of Liability:</strong> Limited strictly to services directly provided.</p>
                    <p><strong>Force Majeure:</strong> Not responsible for delays caused by policy changes, natural disasters, etc.</p>
                  </footer>
                </div>
              </div>
            )}

            {/* PRIVACY POLICY SECTION */}
            {activeTab === 'privacy' && (
              <div className="tab-pane-content">
                <h2 className="section-heading">Privacy Policy</h2>
                <p className="intro-text">
                  <strong>Viet Worldgate</strong> respects your privacy and is committed to protecting your personal information.
                </p>

                <div className="sections-wrapper">
                  <section className="content-section">
                    <h3 className="sub-heading-simple">1. Information We Collect</h3>
                    <div className="badge-container">
                      <span className="badge">Full Name</span>
                      <span className="badge">Email Address</span>
                      <span className="badge">Phone Number</span>
                      <span className="badge">Passport Information</span>
                      <span className="badge">Educational Documents</span>
                      <span className="badge">Financial Documents</span>
                      <span className="badge">Application Info</span>
                      <span className="badge">Communication Records</span>
                    </div>
                  </section>

                  <section className="content-section">
                    <h3 className="sub-heading-simple">2. How We Use Information</h3>
                    <ul className="bullet-list spacing-list">
                      <li>Evaluate eligibility and process applications.</li>
                      <li>Prepare documentation and visa submission forms.</li>
                      <li>Communicate updates and provide expert consultancy services.</li>
                      <li>Maintain strict internal compliance records.</li>
                    </ul>
                  </section>

                  <div className="two-column-row gray-cards">
                    <div className="info-card">
                      <h4 className="mini-title">3. Document Storage & Security</h4>
                      <p className="mini-desc">We securely store copies for application processing, compliance, and internal records. We implement reasonable technical measures to protect against unauthorized access or misuse.</p>
                    </div>
                    <div className="info-card">
                      <h4 className="mini-title">4. Sharing of Information</h4>
                      <p className="mini-desc">Shared only when necessary with Universities, Embassies, Immigration Authorities, or authorized third-party providers. <strong className="text-red">We never sell data.</strong></p>
                    </div>
                  </div>

                  <section className="content-section">
                    <h3 className="sub-heading-simple">5. Marketing Consent</h3>
                    <p className="section-p">
                      By using our services, you allow us to use non-sensitive information (Name, Testimonials, Success Stories, Reviews) for promotional purposes. Sensitive data like passport or financial documents will never be disclosed without explicit consent.
                    </p>
                  </section>

                  <div className="three-column-row">
                    <div>
                      <h5 className="column-title">6. Cookies & Analytics</h5>
                      <p className="column-desc">Used to improve user experience, monitor web performance, and analyze traffic behavior.</p>
                    </div>
                    <div>
                      <h5 className="column-title">7. Data Retention</h5>
                      <p className="column-desc">Information is retained as long as required for operational, legal, and compliance laws.</p>
                    </div>
                    <div>
                      <h5 className="column-title">8. Your Rights</h5>
                      <p className="column-desc">You can request access, correction, or deletion (where legally permissible) of your personal data.</p>
                    </div>
                  </div>

                  <div className="contact-banner">
                    <div>
                      <p className="banner-title">9. Policy Updates</p>
                      <p className="banner-desc">We reserve the right to update this policy at any time. Changes will reflect immediately on this page.</p>
                    </div>
                    <div className="banner-action">
                      <p>Questions regarding privacy?</p>
                      <button
                        className="contact-link-btn"
                        onClick={() => window.open("https://wa.me/+917982295530", "_blank")}
                      >
                        Contact Official Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="page-footer-text">
            By continuing to browse Viet Worldgate, you acknowledge that you have read and accepted these terms.
          </p>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default PolicyPage;