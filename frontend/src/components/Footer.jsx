import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white p-6 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Blood Donation Platform. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <FaFacebook className="cursor-pointer hover:text-gray-200" />
          <FaTwitter className="cursor-pointer hover:text-gray-200" />
          <FaInstagram className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
