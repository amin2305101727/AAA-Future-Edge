"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaBullseye,
  FaChartSimple,
  FaGear,
  FaPeopleGroup,
  FaPlay,
  FaXmark,
} from "react-icons/fa6";

const serviceHighlights = [
  {
    icon: <FaPeopleGroup />,
    title: "Talent Acquisition",
    description: "Finding the right people for a brighter future",
    tone: "bg-[#eaf6ff] text-[#0b5fab]",
  },
  {
    icon: <FaChartSimple />,
    title: "Performance Management",
    description: "Driving measurable growth and success",
    tone: "bg-[#fff4e7] text-[#ff961f]",
  },
  {
    icon: <FaGear />,
    title: "Leadership Development",
    description: "Building leaders for tomorrow",
    tone: "bg-[#eaf6ff] text-[#0b5fab]",
  },
  {
    icon: <FaBullseye />,
    title: "HR Strategy & Consulting",
    description: "Strategic solutions for long-term impact",
    tone: "bg-[#fff4e7] text-[#ff961f]",
  },
];

const ExploreUsBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative mb-[270px] overflow-visible bg-[#00111f] text-white sm:mb-[140px] xl:mb-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/explore-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,15,26,0.98)_0%,rgba(0,31,52,0.88)_32%,rgba(0,72,112,0.35)_68%,rgba(0,15,26,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_46%,rgba(0,166,220,0.22)_0%,rgba(0,166,220,0.14)_27%,transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1440px] items-center px-5 pt-12 pb-24 sm:px-8 md:min-h-[460px] lg:min-h-[450px] lg:px-12 xl:min-h-[470px] xl:px-16">
        <div className="max-w-[740px]">
          <div className="mb-5 flex items-center gap-1.5">
            <span className="h-1 w-10 rounded-full bg-[#ff9d1d]" />
            <span className="h-px w-24 bg-white/25" />
          </div>

          <p className="mb-3 text-xs font-medium uppercase tracking-[0.34em] text-white/90 sm:text-sm">
            Explore Us
          </p>

          <h1 className="text-[clamp(2.15rem,4.9vw,4.4rem)] font-extrabold leading-none tracking-normal lg:whitespace-nowrap">
            <span>AAA </span>
            <span className="text-[#ff9d1d]">Future- Edge</span>
          </h1>

          <p className="mt-4 text-[clamp(0.95rem,1.7vw,1.45rem)] font-medium leading-tight text-white">
            People <span className="mx-2.5 text-white/70">|</span> Strategy{" "}
            <span className="mx-2.5 text-white/70">|</span> Performance
          </p>

          <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-white/78 sm:text-base">
            Exploring better ways to build people, organizations and a brighter
            tomorrow.
          </p>

          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="/core-services"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#ff9d1d] px-5 text-sm font-bold text-[#03101c] shadow-[0_14px_30px_rgba(255,157,29,0.24)] transition hover:bg-[#ffac3f]"
            >
              Explore Our Services
              <FaArrowRight className="text-xs" />
            </a>
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border-2 border-white/75 bg-[#00111f]/45 px-5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-white text-[#07375d]">
                <FaPlay className="ml-0.5 text-xs" />
              </span>
              Watch Video
            </button>
          </div>

          <div className="mt-7 flex items-center gap-1.5">
            <span className="h-1 w-10 rounded-full bg-[#ff9d1d]" />
            <span className="h-px w-24 bg-white/25" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 w-[min(94%,1240px)] -translate-x-1/2 translate-y-1/2 rounded-2xl bg-white px-5 py-3 text-[#122033] shadow-[0_18px_42px_rgba(2,19,38,0.2)]">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {serviceHighlights.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-2.5 px-1.5 py-1 ${
                index !== serviceHighlights.length - 1
                  ? "xl:border-r xl:border-[#d8e0ea]"
                  : ""
              }`}
            >
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-xl ${item.tone}`}
              >
                {item.icon}
              </div>
              <div>
                <h2 className="text-sm font-extrabold leading-tight lg:text-base">
                  {item.title}
                </h2>
                <p className="mt-0.5 text-sm font-medium leading-snug text-[#657188]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isVideoOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 px-4 pt-28 pb-8 backdrop-blur-sm sm:pt-32"
          role="dialog"
          aria-modal="true"
          aria-label="AAA Future Edge video"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#061522] shadow-2xl">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full bg-white text-[#061522] shadow-lg transition hover:bg-[#ff9d1d]"
              aria-label="Close video"
            >
              <FaXmark />
            </button>
            <video
              className="aspect-video w-full bg-black"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src="/videos/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ExploreUsBanner;
