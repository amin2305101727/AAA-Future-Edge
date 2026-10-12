"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <footer className="container mx-auto px-5 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <div className="relative mb-6 h-28 w-[180px] rounded-lg bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl lg:h-32 lg:w-[250px]">
            <Image
              src="/flogo.png"
              alt="Future Edge Logo"
              fill
              sizes="(min-width: 1024px) 250px, 180px"
              className="object-contain"
            />
          </div>
          <p className="text-gray-400">
            AAA has adopted the highest standards of IT service and consultancy
            quality, enabling clients across industries to transform into truly
            digital, data-driven enterprises.
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.facebook.com/groups/796711704378134/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
            >
              <FaFacebookSquare className="text-2xl hover:text-blue-500 transition duration-300" />
            </a>
            <button
              type="button"
              onClick={() => alert("Coming soon!")}
              aria-label="Instagram"
              className="border-0 bg-transparent p-0"
            >
              <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
            </button>
            <a
              href="https://www.linkedin.com/in/riadmahmud/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl hover:text-blue-300 transition duration-300" />
            </a>
            <button
              type="button"
              onClick={() => alert("Coming soon!")}
              aria-label="Twitter"
              className="border-0 bg-transparent p-0"
            >
              <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
            </button>
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Solutions</h3>
          <div className="space-y-3">
            <Link
              href="/it-strategy"
              className="hover:text-orange-500 transition duration-300"
            >
              IT Strategy
            </Link>{" "}
            <br />
            <Link
              href="/hr-strategy"
              className="hover:text-orange-500 transition duration-300"
            >
              HR Strategy
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <div className="space-y-3">
            <Link
              href="/it-services"
              className="hover:text-orange-500 transition duration-300"
            >
              IT Services
            </Link>
            <br />
            <Link
              href="/hr-services"
              className="hover:text-orange-500 transition duration-300"
            >
              HR Services
            </Link>
            <br />
            <Link
              href="/career-counselling"
              className="hover:text-orange-500 transition duration-300"
            >
              Career Counselling
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MdLocationOn className="text-2xl text-orange-500" />
              <p>House-774, Road-11, Avenue-02, Mirpur DOHS, Dhaka-1216</p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail className="text-2xl text-orange-500" />
              <p>riadmahmud@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <BsTelephoneFill className="text-2xl text-orange-500" />
              <p>+8801922000025</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center py-5 bg-gray-800">
        <p className="text-sm text-gray-500">
          © 2024 Design & Developed By{" "}
          <a
            href="https://360dsoul.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-orange-500 hover:underline"
          >
            360D Soul Ltd.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
