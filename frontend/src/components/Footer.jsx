import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white mt-10 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 BloodLink. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <FaFacebook className="hover:text-gray-200 cursor-pointer" />
          <FaInstagram className="hover:text-gray-200 cursor-pointer" />
          <FaTwitter className="hover:text-gray-200 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
