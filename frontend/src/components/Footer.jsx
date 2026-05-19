import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-8 border-t border-green-900">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h1 className="text-3xl font-bold text-green-400 mb-4">
            VIET WORLDGATE
          </h1>

          <p className="text-gray-400 leading-7 text-sm">
            Your trusted global education partner helping students
            achieve their dreams of studying abroad in Canada,
            UK, Australia, New Zealand and more.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">

            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center hover:bg-green-500 transition duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center hover:bg-green-500 transition duration-300 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center hover:bg-green-500 transition duration-300 cursor-pointer">
              <FaLinkedinIn />
            </div>

            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center hover:bg-green-500 transition duration-300 cursor-pointer">
              <FaYoutube />
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-green-400">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-green-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-green-400 cursor-pointer transition">
              Universities
            </li>

            <li className="hover:text-green-400 cursor-pointer transition">
              Scholarships
            </li>

            <li className="hover:text-green-400 cursor-pointer transition">
              AI Advisor
            </li>

            <li className="hover:text-green-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* STUDY DESTINATIONS */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-green-400">
            Study Destinations
          </h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>🇨🇦 Study in Canada</li>
            <li>🇬🇧 Study in UK</li>
            <li>🇦🇺 Study in Australia</li>
            <li>🇳🇿 Study in New Zealand</li>
            <li>🇩🇪 Study in Germany</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-green-400">
            Contact Us
          </h2>

          <div className="space-y-4 text-gray-400 text-sm">

            <div className="flex items-start gap-3">
              <MdLocationOn className="text-green-400 text-xl mt-1" />
              <p>
                Greater Noida, Uttar Pradesh, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-green-400 text-xl" />
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-green-400 text-xl" />
              <p>info@vietworldgate.com</p>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-green-900 mt-12 pt-6 text-center text-gray-500 text-sm px-4">

        <p>
          © 2026 VIET WORLDGATE. All Rights Reserved.
        </p>

        <p className="mt-2 text-green-500">
          AI-Powered Global Education Platform 🌍
        </p>

      </div>

    </footer>
  );
}