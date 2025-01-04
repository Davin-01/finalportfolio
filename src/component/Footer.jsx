import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-theme-darkBlue text-theme-palePeach py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-palePeach hover:text-theme-redOrange transition duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-palePeach hover:text-theme-softTeal transition duration-300"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-palePeach hover:text-theme-deepBrown transition duration-300"
          >
            <FaTwitter size={30} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-theme-softTeal text-sm">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
