import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#2f1316] border-t font-[biondi] text-[#f7f0f1] px-8 sm:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo_two.png" alt="Asknova Logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold tracking-wide">ASKANOVA</h1>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#f7f0f1]/80">
        Askanova Property is an excellent real estate brokerage headquartered in
        Dubai. Founded by a passionate team of seasoned real estate
        professionals, we focus on advising our clients about property
        investments in Dubai
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="text-sm mb-3 uppercase tracking-wide">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-[#a97a67] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#a97a67] transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="hover:text-[#a97a67] transition-colors duration-300"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#a97a67] transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#a97a67] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm mb-3 uppercase tracking-wide">Socials</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#a97a67] transition-colors duration-300"
              >
                INST
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#a97a67] transition-colors duration-300"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#a97a67] transition-colors duration-300"
              >
                FB
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-sm mb-3 uppercase tracking-wide">Address</h3>
          <p className="text-sm leading-relaxed">
            City avenue building, <br />
             Deira,<br />
            Dubai <br />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
