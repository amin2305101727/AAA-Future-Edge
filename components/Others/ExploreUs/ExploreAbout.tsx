"use client";

import Image from "next/image";
import {
  FaBriefcase,
  FaChartLine,
  FaPeopleGroup,
  FaTrophy,
} from "react-icons/fa6";

const stats = [
  {
    value: "10+",
    label: "Years of Experience",
    icon: FaBriefcase,
    color: "blue",
  },
  {
    value: "200+",
    label: "Professionals Placed",
    icon: FaPeopleGroup,
    color: "orange",
  },
  {
    value: "50+",
    label: "Satisfied Clients",
    icon: FaChartLine,
    color: "blue",
  },
  {
    value: "95%",
    label: "Client Retention",
    icon: FaTrophy,
    color: "orange",
  },
];

export default function ExploreAbout() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/60 pt-14 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-14">
        {/* Main About Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14 xl:gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-1 w-8 rounded-full bg-orange-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              AAA <span className="text-orange-500">Future-Edge</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base italic leading-7 text-slate-500 sm:text-lg sm:leading-8">
              A people-focused consulting firm driving organizational success
              through strategic HR solutions.
            </p>

            {/* About Description */}
            <div className="mt-7 space-y-5 text-justify text-[15px] leading-7 text-slate-700 sm:text-base">
              <p>
                <strong className="font-bold text-slate-900">
                  AAA Future-Edge
                </strong>{" "}
                as a management consulting firm implements HR efforts that
                effectively communicate and support the company’s mission and
                strategic vision. Our services include overseeing role
                profiling, talent acquisition, career development, succession
                planning, retention, training, leadership development, KRA
                (Key Result Area) &amp; KPI (Key Performance Indicator)
                navigation, performance management, compensation management,
                background verification etc.
              </p>

              <p>
                <strong className="font-bold text-slate-900">AAA</strong>{" "}
                covers entirely from &quot;Hire&quot; to &quot;Retire&quot;
                for the most important asset in your company - your employees.
                We will make it easy for team to start managing your human
                capital effectively and efficiently.
              </p>

              <p>
                <strong className="font-bold text-slate-900">
                  AAA Future-Edge
                </strong>{" "}
                has focused on organizational development, delivering quality
                services to help clients attract, retain, and cultivate
                exceptional talent. We implement performance assessment
                mechanisms that align with organizational policies, fostering
                an evidence-based work culture that drives results. Our
                initiatives support HR alignment with business operations,
                facilitate team alignment with strategic goals, and establish
                essential organizational policies and procedures. At AAA, we
                are dedicated to enhancing your business with the right people
                and processes for sustained success.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[760px] pb-10 pr-3 sm:pb-12 sm:pr-5">
              {/* Orange Background Shape */}
              <div
                aria-hidden="true"
                className="absolute -left-2 -top-5 h-[42%] w-[35%] rounded-[30px] bg-gradient-to-br from-orange-300 to-orange-100 sm:-left-5 sm:-top-7 sm:rounded-[36px]"
              />

              {/* Blue Background Shape */}
              <div
                aria-hidden="true"
                className="absolute -bottom-1 right-0 h-[55%] w-[55%] rounded-[30px] bg-blue-100/80 sm:rounded-[36px]"
              />

              {/* Company Image */}
              <div className="relative z-10 aspect-[1.2/1] overflow-hidden rounded-[24px] border border-white/80 bg-slate-100 shadow-2xl shadow-slate-900/15 sm:aspect-[1.28/1] sm:rounded-[30px]">
                <Image
                  src="/images/AAA-Future-Edge-at-Sunset.png"
                  alt="AAA Future-Edge corporate building at sunset"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
              </div>

              {/* Mission Card */}
              <div className="absolute -bottom-1 right-0 z-20 flex w-[min(390px,92%)] items-center gap-4 rounded-[22px] border border-white/80 bg-white/95 p-4 shadow-[0_20px_55px_rgba(15,23,42,0.16)] backdrop-blur-md sm:bottom-0 sm:gap-5 sm:p-5 md:p-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 sm:h-[76px] sm:w-[76px]">
                  <FaPeopleGroup className="text-[34px] text-orange-500" />
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
                    Our Mission
                  </span>

                  <h3 className="mt-1 text-base font-extrabold leading-snug text-slate-900 sm:text-lg">
                    Empowering People for a Better Tomorrow.
                  </h3>

                  <span className="mt-3 block h-1 w-8 rounded-full bg-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-20 grid grid-cols-1 overflow-hidden rounded-[24px] border border-white/80 bg-white/90 shadow-[0_15px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isOrange = stat.color === "orange";

            return (
              <div
                key={stat.label}
                className={`relative flex items-center gap-4 px-6 py-6 sm:px-7 lg:justify-center lg:px-5 xl:gap-5 xl:px-7 ${
                  index < stats.length - 1
                    ? "after:absolute after:bottom-0 after:left-7 after:right-7 after:h-px after:bg-slate-200 lg:after:bottom-6 lg:after:left-auto lg:after:right-0 lg:after:top-6 lg:after:h-auto lg:after:w-px"
                    : ""
                }`}
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${
                    isOrange ? "bg-orange-50" : "bg-blue-50"
                  }`}
                >
                  <Icon
                    className={`text-[29px] ${
                      isOrange ? "text-orange-500" : "text-blue-600"
                    }`}
                  />
                </div>

                <div>
                  <p className="text-3xl font-extrabold leading-none tracking-tight text-blue-900 sm:text-4xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm font-medium leading-snug text-slate-600 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}