"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const CareerCouncilingBanner = () => {
  return (
    <section
      id="career-counselling"
      className="relative flex min-h-[580px] items-center overflow-hidden bg-[#f4f9ff] bg-cover bg-[62%_center] bg-no-repeat px-5 py-12 sm:px-8 lg:min-h-[min(650px,calc(100svh-78px))] lg:bg-center lg:px-0"
      style={{ backgroundImage: "url('/images/Career-Counselling.png')" }}
    >
      <div className="relative mx-auto w-full max-w-[1760px] lg:pl-12">
        <div className="max-w-[620px]">
          <div className="mb-3 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#24466e] sm:text-xs">
            <span className="h-1 w-12 rounded-full bg-[#1688e8]" />
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Guidance</span>
              <span className="text-[#1688e8]">·</span>
              <span>Planning</span>
              <span className="text-[#1688e8]">·</span>
              <span>Growth</span>
            </span>
          </div>

          <h1 className="whitespace-nowrap text-[clamp(1.8rem,5.2vw,4.5rem)] leading-none font-extrabold tracking-[-0.055em] text-[#102345]">
            Career <span className="text-[#0877df]">Counselling</span>
          </h1>

          <p className="mt-5 max-w-[520px] text-justify text-base leading-[1.55] text-[#35445d] sm:text-lg sm:leading-[1.6]">
            Career counselling involves providing guidance and support to
            individuals seeking assistance with career-related decisions,
            planning, and development. It aims to help individuals explore
            career options, identify their strengths and interests, set career
            goals, and develop strategies to achieve them through assessments,
            coaching, and resources.
          </p>

          <Link
            href="#career-offerings"
            onClick={(event) => {
              const offeringsSection =
                document.getElementById("career-offerings");

              if (
                window.location.hash === "#career-offerings" &&
                offeringsSection
              ) {
                event.preventDefault();
                offeringsSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="mt-6 inline-flex min-h-[52px] items-center gap-5 rounded-2xl bg-gradient-to-r from-[#0878e7] to-[#074bbd] px-4 pl-6 text-base font-bold text-white shadow-[0_12px_28px_rgba(8,104,210,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(8,104,210,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0877df]"
          >
            Learn More
            <span className="flex size-9 items-center justify-center rounded-full bg-white text-[#0877df]">
              <FaArrowRight aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerCouncilingBanner;
