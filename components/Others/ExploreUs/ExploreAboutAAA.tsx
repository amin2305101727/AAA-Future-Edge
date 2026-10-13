"use client";

import Image from "next/image";
import leadershipBackground from "../../../assets/about/download.png";
import {
  FaLinkedin,
} from "react-icons/fa";
import {
  IoArrowRedo,
  IoPeople,
  IoSettings,
  IoStatsChart,
  IoBook,
  IoPerson,
} from "react-icons/io5";

const expertise = [
  {
    title: "Team Building",
    icon: IoPeople,
    color: "orange",
  },
  {
    title: "Performance Management",
    icon: IoSettings,
    color: "blue",
  },
  {
    title: "KPI Formation",
    icon: IoStatsChart,
    color: "orange",
  },
  {
    title: "Leadership Training",
    icon: IoBook,
    color: "blue",
  },
];

const ExploreAboutAAA = () => {
  return (
    <section
      id="leadership"
      className="relative isolate overflow-hidden bg-slate-100 pt-6 pb-14 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Image
          src={leadershipBackground}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/65" />
      </div>

      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-14">
        {/* Main Leadership Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 xl:gap-16">
          {/* Left: Profile Image */}
          <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
            <div className="relative pb-10 pl-3 pr-5 sm:pb-12 sm:pl-5 sm:pr-8">
              {/* Orange Shape */}
              <div
                aria-hidden="true"
                className="absolute left-7 top-0 h-[48%] w-[42%] rounded-[30px] bg-gradient-to-br from-orange-400 to-orange-200 sm:left-10 sm:rounded-[36px]"
              />

              {/* Navy Shape */}
              <div
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[57%] w-[92%] rounded-[30px] bg-gradient-to-br from-blue-900 to-slate-900 sm:rounded-[36px]"
              />

              {/* Profile Image */}
              <div className="relative z-10 aspect-[0.84/1] overflow-hidden rounded-[28px] border-[5px] border-white bg-slate-100 shadow-2xl shadow-slate-900/15 sm:rounded-[36px]">
                <Image
                  src="/images/Riad.png"
                  alt="Mr. Riad Mahmud, CEO and Lead Consultant at AAA Future-Edge"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </div>

              {/* Profile Information Card */}
              <div className="absolute bottom-0 left-0 z-20 flex w-[min(330px,88%)] items-center gap-4 rounded-2xl border border-white/20 bg-gradient-to-r from-slate-900 to-blue-950 p-4 text-white shadow-xl sm:gap-5 sm:p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500/15 sm:h-14 sm:w-14">
                  <IoPerson className="text-3xl text-orange-500 sm:text-4xl" />
                </div>

                <div>
                  <h3 className="text-sm font-bold sm:text-base">
                    CEO &amp; Lead Consultant
                  </h3>

                  <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                    AAA Future-Edge
                  </p>
                </div>
              </div>

              {/* Experience Card */}
              <div className="absolute bottom-2 right-0 z-20 flex min-h-[140px] w-[112px] flex-col items-center justify-center rounded-2xl border border-white bg-white/95 px-3 py-4 text-center shadow-xl backdrop-blur-sm sm:bottom-3 sm:right-1 sm:min-h-[148px] sm:w-[132px]">
                <span className="text-4xl font-extrabold tracking-tight text-orange-500 sm:text-5xl">
                  10+
                </span>

                <span className="mt-2 text-sm leading-5 text-slate-600">
                  Years of Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right: Leadership Information */}
          <div>
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-5">
              <span className="h-0.5 w-10 rounded-full bg-orange-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Our Leadership
              </span>
            </div>

            {/* Name */}
            <h2 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              Mr. Riad{" "}
              <span className="text-orange-500">Mahmud.</span>
            </h2>

            <h3 className="mt-3 text-xl font-bold text-blue-950 sm:text-2xl">
              CEO &amp; Lead Consultant
            </h3>

            <p className="mt-1 text-base text-slate-500 sm:text-lg">
              AAA Future-Edge
            </p>

            {/* Biography */}
            <div className="mt-6 space-y-5 text-justify text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-[1.8]">
              <p>
                <strong className="font-bold text-slate-900">
                  Mr. Mahmud
                </strong>{" "}
                is a seasoned HR professional with extensive experience across
                corporate and factory settings. As CEO and Lead Consultant at
                AAA Future-Edge, he specializes in aligning company vision and
                values with actionable goals, leading projects focused on team
                building and organizational development.
              </p>

              <p>
                Previously, he held HR leadership roles at Zuellig Pharma,
                Field Nation, JITA Social Business, pro-edge associates, and
                BURO Bangladesh. Known for his expertise in KPI formation, SOP
                development, performance management, and leadership training.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {expertise.map((item) => {
                const Icon = item.icon;
                const isOrange = item.color === "orange";

                return (
                  <div
                    key={item.title}
                    className={`flex min-h-[78px] items-center gap-3 rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-3.5 ${
                      isOrange
                        ? "border-orange-100 bg-gradient-to-br from-orange-50 to-white hover:border-orange-200"
                        : "border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:border-blue-200"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        isOrange ? "bg-orange-100" : "bg-blue-100"
                      }`}
                    >
                      <Icon
                        className={`text-2xl ${
                          isOrange ? "text-orange-500" : "text-blue-600"
                        }`}
                      />
                    </div>

                    <span className="text-sm font-bold leading-5 text-slate-800">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/riadmahmud/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Mr. Riad Mahmud's LinkedIn profile"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              <FaLinkedin className="text-2xl" />

              <span>LinkedIn</span>

              <IoArrowRedo className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="mt-16 grid grid-cols-1 items-center gap-5 rounded-[24px] border border-white/80 bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 px-6 py-7 shadow-sm sm:mt-20 sm:px-10 sm:py-8 lg:grid-cols-[auto_1fr_0.42fr] lg:gap-8 lg:px-12">
          {/* Quote Icon */}
          <div className="hidden lg:block" aria-hidden="true">
            <svg
              viewBox="0 0 80 65"
              className="h-16 w-20 fill-blue-200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30 0C13 8 2 23 2 41c0 14 8 22 19 22 10 0 17-8 17-18 0-9-6-16-15-17 2-8 7-14 14-19L30 0Zm40 0C53 8 42 23 42 41c0 14 8 22 19 22 10 0 17-8 17-18 0-9-6-16-15-17 2-8 7-14 14-19L70 0Z" />
            </svg>
          </div>

          {/* Quote Text */}
          <blockquote className="text-center text-lg italic leading-8 text-slate-600 sm:text-xl sm:leading-9 lg:text-left xl:text-2xl">
            “Our mission is to create better workplaces by empowering people
            and enabling organizations to achieve their true potential.”
          </blockquote>

          {/* Attribution */}
          <div className="border-t border-blue-200 pt-5 text-center sm:pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:text-left">
            <p className="font-bold text-blue-950">
              <span className="mr-2 text-orange-500">—</span>
              Mr. Riad Mahmud
            </p>

            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              CEO &amp; Lead Consultant
            </p>

            <p className="mt-1 text-sm text-slate-500">
              AAA Future-Edge
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreAboutAAA;