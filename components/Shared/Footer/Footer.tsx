"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiArrowUp, FiChevronRight } from "react-icons/fi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateBackToTopVisibility = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    updateBackToTopVisibility();
    window.addEventListener("scroll", updateBackToTopVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateBackToTopVisibility);
    };
  }, []);

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const linkClass =
    "group flex items-center gap-2.5 text-sm text-slate-200 transition-colors hover:text-[#ff8500] sm:text-[15px]";
  const contactCardClass =
    "flex min-h-[52px] items-center gap-3 rounded-xl bg-white/[0.07] px-3 py-2 text-sm leading-6 text-slate-100 transition-colors hover:bg-white/[0.11]";
  const contactIconClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#ff8500] text-xl text-[#ff8500]";

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(115deg,#001a30_0%,#002443_48%,#00162b_100%)] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-8 h-[420px] w-[52%] opacity-20 [mask-image:linear-gradient(to_left,black,transparent)] [background-image:radial-gradient(circle,#0870a5_1.6px,transparent_1.8px)] [background-size:12px_12px]"
      />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-7 px-6 py-8 sm:px-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.2fr_0.85fr_0.85fr_1.15fr] lg:gap-0 lg:px-12 lg:py-9 xl:px-16">
        <section className="lg:pr-10">
          <Link
            href="/"
            aria-label="AAA Future Edge home"
            className="mb-3 inline-flex"
          >
            <Image
              src={logo}
              alt="Future Edge — A Trust Builder"
              className="h-auto w-[155px] object-contain sm:w-[175px]"
            />
          </Link>
          <p className="max-w-md text-sm leading-6 text-slate-300 sm:text-[15px]">
            AAA has adopted the highest standards of IT service and consultancy
            quality, enabling clients across industries to transform into truly
            digital, data-driven enterprises.
          </p>
          <div className="mt-3 flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/groups/796711704378134/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-colors hover:border-[#ff8500] hover:text-[#ff8500]"
            >
              <FaFacebookF />
            </a>
            <button
              type="button"
              onClick={() => alert("Coming soon!")}
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-lg text-white transition-colors hover:border-[#ff8500] hover:text-[#ff8500]"
            >
              <FaInstagram />
            </button>
            <a
              href="https://www.linkedin.com/in/riadmahmud/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-colors hover:border-[#ff8500] hover:text-[#ff8500]"
            >
              <FaLinkedinIn />
            </a>
            <button
              type="button"
              onClick={() => alert("Coming soon!")}
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-lg text-white transition-colors hover:border-[#ff8500] hover:text-[#ff8500]"
            >
              <FaTwitter />
            </button>
          </div>
        </section>

        <section className="border-white/15 md:border-l md:pl-8 lg:px-10">
          <h2 className="text-xl font-bold">Solutions</h2>
          <span className="mt-2.5 block h-0.5 w-10 bg-[#ff8500]" />
          <ul className="mt-5 space-y-3">
            <li>
              <Link href="/it-strategy" className={linkClass}>
                <FiChevronRight className="shrink-0 text-xl text-[#ff8500] transition-transform group-hover:translate-x-1" />
                IT Strategy
              </Link>
            </li>
            <li>
              <Link href="/hr-strategy" className={linkClass}>
                <FiChevronRight className="shrink-0 text-xl text-[#ff8500] transition-transform group-hover:translate-x-1" />
                HR Strategy
              </Link>
            </li>
          </ul>
        </section>

        <section className="border-white/15 md:border-l md:pl-8 lg:px-10">
          <h2 className="text-xl font-bold">Services</h2>
          <span className="mt-2.5 block h-0.5 w-10 bg-[#ff8500]" />
          <ul className="mt-5 space-y-3">
            <li>
              <Link href="/it-services" className={linkClass}>
                <FiChevronRight className="shrink-0 text-xl text-[#ff8500] transition-transform group-hover:translate-x-1" />
                IT Services
              </Link>
            </li>
            <li>
              <Link href="/hr-services" className={linkClass}>
                <FiChevronRight className="shrink-0 text-xl text-[#ff8500] transition-transform group-hover:translate-x-1" />
                HR Services
              </Link>
            </li>
            <li>
              <Link href="/career-counselling" className={linkClass}>
                <FiChevronRight className="shrink-0 text-xl text-[#ff8500] transition-transform group-hover:translate-x-1" />
                Career Counselling
              </Link>
            </li>
          </ul>
        </section>

        <section className="border-white/15 md:col-span-2 md:border-t md:pt-7 lg:col-span-1 lg:border-l lg:border-t-0 lg:py-0 lg:pl-10">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <span className="mt-2.5 block h-0.5 w-10 bg-[#ff8500]" />
          <div className="mt-5 space-y-2.5">
            <a
              href="https://maps.google.com/?q=House-774,+Road-11,+Avenue-02,+Mirpur+DOHS,+Dhaka-1216"
              target="_blank"
              rel="noreferrer noopener"
              className={contactCardClass}
            >
              <span className={contactIconClass}>
                <MdLocationOn />
              </span>
              <span>House-774, Road-11, Avenue-02, Mirpur DOHS, Dhaka-1216</span>
            </a>
            <a href="mailto:riadmahmud@gmail.com" className={contactCardClass}>
              <span className={contactIconClass}>
                <MdEmail />
              </span>
              <span className="break-all">riadmahmud@gmail.com</span>
            </a>
            <a href="tel:+8801922000025" className={contactCardClass}>
              <span className={contactIconClass}>
                <BsTelephoneFill className="text-lg" />
              </span>
              <span>+8801922000025</span>
            </a>
          </div>
        </section>
      </div>

      <div className="relative border-t border-white/20">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-6 py-3 text-sm text-slate-200 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p>
              © 2026{" "}
              <span className="font-bold text-[#ff8500]">Future-Edge.</span>{" "}
              All Rights Reserved.
            </p>
            <span
              aria-hidden="true"
              className="hidden h-4 border-l border-white/30 sm:block"
            />
            <p>
              Developed By{" "}
              <a
                href="https://github.com/ruhulamin18"
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-[#ff8500] hover:underline"
              >
                Md. Ruhul Amin
              </a>
            </p>
          </div>
          {showBackToTop && (
            <button
              type="button"
              onClick={backToTop}
              aria-label="Back to top"
              className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff8500] text-3xl text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#f47700]"
            >
              <FiArrowUp />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
