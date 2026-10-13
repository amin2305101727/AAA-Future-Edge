
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiBriefcase,
  FiZap,
} from "react-icons/fi";

const About = () => {
  const features = [
    {
      icon: FiUsers,
      title: "People",
      description: "Building stronger workforces",
    },
    {
      icon: FiTarget,
      title: "Strategy",
      description: "Aligning with your vision",
    },
    {
      icon: FiTrendingUp,
      title: "Performance",
      description: "Driving sustainable growth",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/50 py-14 sm:py-20 lg:py-24">
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 xl:gap-20">
          {/* Left: Team Image */}
          <div className="relative mx-auto w-full max-w-[720px] lg:mx-0">
            <div className="relative pb-12 pl-3 pr-3 pt-3 sm:pb-14 sm:pl-5 sm:pr-5 sm:pt-5">
              {/* Orange Background Shape */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[75%] w-[75%] rounded-tl-[28px] rounded-br-[35px] bg-gradient-to-br from-orange-400 to-orange-200 sm:rounded-tl-[34px]"
              />

              {/* Main Team Image */}
              <div className="relative z-10 h-[300px] overflow-hidden rounded-xl border-4 border-white shadow-xl sm:h-[390px] sm:rounded-2xl lg:h-[450px]">
                <Image
                  src="https://i.postimg.cc/yd3qY7WH/Whats-App-Image-2022-03-16-at-9-58-23-AM.jpg"
                  alt="AAA Future-Edge team"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Our Team Floating Card */}
              <div className="absolute right-0 top-7 z-20 flex max-w-[280px] items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:right-1 sm:top-10 sm:gap-4 sm:px-5 sm:py-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <FiUsers className="text-3xl text-orange-500" />
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900">
                    Our Team
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                    Driven by People, Strategy &amp; Innovation
                  </p>
                </div>
              </div>

              {/* Bottom Navy Information Card */}
              <div className="absolute bottom-0 left-0 z-20 grid w-full grid-cols-1 gap-4 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 p-5 text-white shadow-2xl sm:grid-cols-3 sm:gap-3 sm:px-6 sm:py-5 lg:px-7">
                {/* Team Members */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <FiUsers className="text-3xl text-orange-400" />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold">30+</p>
                    <p className="text-xs text-slate-300 sm:text-sm">
                      Team Members
                    </p>
                  </div>
                </div>

                {/* Industry Experience */}
                <div className="flex items-center gap-3 border-white/20 sm:border-l sm:pl-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <FiBriefcase className="text-3xl text-orange-400" />
                  </div>

                  <div>
                    <p className="text-sm font-bold sm:text-base">
                      Industry
                    </p>
                    <p className="text-xs text-slate-300 sm:text-sm">
                      Experience
                    </p>
                  </div>
                </div>

                {/* Company Values */}
                <div className="flex items-center gap-3 border-white/20 sm:border-l sm:pl-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <FiZap className="text-3xl text-orange-400" />
                  </div>

                  <div>
                    <p className="text-sm font-bold leading-5 sm:text-base">
                      People · Strategy ·
                    </p>
                    <p className="text-xs text-slate-300 sm:text-sm">
                      Innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="relative">
            {/* Section Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-0.5 w-12 rounded-full bg-orange-500" />

              <span className="text-sm font-semibold uppercase tracking-wider text-slate-800">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[1.7rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl xl:text-[2.8rem]">
              AAA Future-Edge is a{" "}
              <span className="text-orange-500">
                Management Consulting
              </span>{" "}
              Firm
            </h2>

            {/* Description */}
            <p className="mt-6 text-justify text-base leading-7 text-slate-600 sm:text-lg sm:leading-[1.75]">
              Specializing in HR solutions that align with a company&apos;s
              mission and strategic vision. Our expertise spans across key HR
              functions, including talent acquisition, leadership development,
              and performance management, ensuring seamless integration with
              overarching business strategies.
            </p>

            {/* Feature Cards */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-3 xl:gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className={`flex items-start gap-3 ${
                      index > 0
                        ? "sm:border-l sm:border-slate-200 sm:pl-3 xl:pl-5"
                        : ""
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50">
                      <Icon className="text-3xl text-orange-500" />
                    </div>

                    <div className="pt-1">
                      <h3 className="font-extrabold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/explore"
                className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-7 font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                About Us

                <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/core-services"
                className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-xl border-2 border-slate-700 bg-white/80 px-7 font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
              >
                Our Services

                <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
