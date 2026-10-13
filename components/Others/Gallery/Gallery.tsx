"use client";

import { useState } from "react";
type GalleryImage = {
  src: string;
  title: string;
  description: string;
};

type GalleryProps = {
  images?: GalleryImage[];
};

const categories = [
  "All",
  "Team Building",
  "Training",
  "Culture",
  "Leadership",
] as const;

type GalleryCategory = (typeof categories)[number];

const getCategory = (title: string): Exclude<GalleryCategory, "All"> => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("training")) return "Training";
  if (normalizedTitle.includes("cultural")) return "Culture";
  if (normalizedTitle.includes("leadership")) return "Leadership";
  return "Team Building";
};

const Gallery = ({ images = [] }: GalleryProps) => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("All");
  const [showAllImages, setShowAllImages] = useState(false);
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => getCategory(image.title) === activeCategory);

  return (
    <>
      <section
        className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-cover bg-center px-5 py-16 sm:min-h-[460px] sm:px-8 lg:min-h-[clamp(460px,36.4vw,728px)]"
        style={{ backgroundImage: "url('/images/gallary.png')" }}
      >
        <div className="w-full max-w-[1450px] text-center">
          <div className="mb-5 flex items-center justify-center gap-4 text-[#102b4e] sm:mb-6 sm:gap-8">
            <span className="h-px w-12 bg-[#102b4e]/60 sm:w-20 lg:w-28" />
            <svg
              aria-hidden="true"
              className="h-11 w-11 sm:h-14 sm:w-14"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="12"
                y="5"
                width="27"
                height="25"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="2.4"
              />
              <circle cx="31" cy="12.5" r="2.5" stroke="currentColor" strokeWidth="2.2" />
              <rect
                x="5"
                y="17"
                width="27"
                height="25"
                rx="2.5"
                fill="white"
                stroke="currentColor"
                strokeWidth="2.4"
              />
              <circle cx="13" cy="24" r="2.2" stroke="currentColor" strokeWidth="2" />
              <path
                d="M7.5 37L15.5 29L20 33.5L24 29.5L30 35.5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="h-px w-12 bg-[#102b4e]/60 sm:w-20 lg:w-28" />
          </div>
          <h1 className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.12] font-extrabold tracking-tight text-[#102b4e] lg:whitespace-nowrap">
            Explore Our{" "}
            <span className="text-[#f47716]">Beautiful Moments</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
            Discover the wonders captured through our lens.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f9fc] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-8 text-center sm:mb-10">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em] text-[#f47716] sm:text-base">
              <span className="h-0.5 w-10 bg-[#f47716] sm:w-12" />
              <span>OUR MOMENTS</span>
              <span className="h-0.5 w-10 bg-[#f47716] sm:w-12" />
            </div>
            <h2 className="text-[clamp(2.5rem,4.5vw,3.75rem)] leading-[1.05] font-extrabold tracking-tight text-[#102b4e]">
              Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A closer look at our people, events and milestones.
            </p>
          </header>
          <div className="mb-8 flex flex-wrap justify-center gap-2.5 sm:mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setShowAllImages(false);
                }}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                  activeCategory === category
                    ? "border-[#1479b8] bg-[#1479b8] text-white"
                    : "border-[#d5e2ed] bg-white text-[#17324f] hover:border-[#1479b8] hover:text-[#1479b8]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative aspect-[2/1] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_8px_24px_rgba(16,43,78,0.12)] transition-shadow duration-300 hover:shadow-[0_14px_32px_rgba(16,43,78,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1479b8] ${
                  !showAllImages && index >= 12 ? "hidden" : ""
                }`}
                tabIndex={0}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071b35]/95 via-[#071b35]/60 to-transparent px-5 pb-5 pt-16 transition-all duration-300 group-hover:pt-24 group-focus-visible:pt-24">
                  <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
                      {getCategory(image.title)}
                    </p>
                    <h3 className="text-lg leading-snug font-bold text-white">
                      {image.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-white/85 opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAllImages && filteredImages.length > 12 && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setShowAllImages(true)}
                className="rounded-full bg-[#1479b8] px-7 py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#102b4e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1479b8]"
              >
                View more
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
