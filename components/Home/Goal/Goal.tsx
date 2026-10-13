"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import type { CarouselProps } from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";

import goalBackground from "../../../assets/goal/bgGoal.png";
import itSolutions from "../../../assets/banner/slider4.png";
import hrSolutions from "../../../assets/banner/slider5.png";
import businessSolutions from "../../../assets/banner/slider6.png";
import cloudSolutions from "../../../assets/banner/slider7.png";

const slides = [
  {
    image: itSolutions,
    alt: "IT product and technology solutions",
  },
  {
    image: hrSolutions,
    alt: "Human resource solutions",
  },
  {
    image: businessSolutions,
    alt: "Creative business solutions",
  },
  {
    image: cloudSolutions,
    alt: "Cloud operations and digital services",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Goal = () => {
  const carouselRef = useRef<Carousel | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange: NonNullable<CarouselProps["afterChange"]> = (
    _previousSlide,
    state,
  ) => {
    setActiveSlide(state.currentSlide % slides.length);
  };

  const goToSlide = (index: number) => {
    carouselRef.current?.goToSlide(index);
    setActiveSlide(index);
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-[#f6f9fc] py-[clamp(36px,5vw,76px)] max-[900px]:py-[34px_0_44px] max-[560px]:py-[22px_0_34px]"
      aria-labelledby="company-goal-title"
    >
      <Image
        src={goalBackground}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 size-full object-cover"
      />
      <div className="relative z-10 mx-auto grid min-h-[clamp(500px,30.25vw,610px)] w-[calc(100%-64px)] max-w-[1888px] grid-cols-2 overflow-visible rounded-[36px] bg-white shadow-[0_20px_48px_rgba(30,48,70,0.14)] max-[1100px]:min-h-[480px] max-[1100px]:w-[calc(100%-56px)] max-[1100px]:rounded-[28px] max-[900px]:min-h-0 max-[900px]:w-[calc(100%-44px)] max-[900px]:max-w-[700px] max-[900px]:grid-cols-1 max-[900px]:rounded-[26px] max-[560px]:w-[calc(100%-30px)] max-[560px]:rounded-[19px]">
        <span
          className="pointer-events-none absolute left-0 top-0 z-[3] h-[38%] w-[18%] overflow-hidden rounded-tl-[36px] max-[1100px]:rounded-tl-[28px] max-[560px]:h-[29%] max-[560px]:w-[30%] max-[560px]:rounded-tl-[19px]"
          aria-hidden="true"
        >
          <svg
            className="block size-full"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path
              fill="rgba(255,248,241,0.92)"
              d="M0 0H400C382 31 361 67 333 94C302 123 273 117 241 99C207 80 182 88 155 115C106 164 54 231 0 286Z"
            />
            <path
              fill="#ff9e35"
              d="M0 0H372C350 31 332 62 306 83C279 105 257 99 229 84C195 65 171 75 143 102C98 145 49 207 0 260Z"
            />
          </svg>
        </span>
        <div className="relative z-0 min-h-full min-w-0 isolate overflow-hidden rounded-l-[36px] bg-[radial-gradient(circle_at_88%_25%,rgba(255,143,45,0.2)_0_40px,transparent_41px),radial-gradient(ellipse_at_42%_70%,rgba(255,239,222,0.48),transparent_58%),linear-gradient(135deg,#fff_0%,#fbfcfe_100%)] max-[1100px]:rounded-l-[28px] max-[900px]:min-h-[clamp(300px,58vw,420px)] max-[900px]:rounded-t-[26px] max-[900px]:rounded-b-none max-[560px]:min-h-[260px] max-[560px]:rounded-t-[19px]">
          <div
            className="pointer-events-none absolute left-[8%] top-[19%] z-[2] h-[65px] w-[100px] bg-[radial-gradient(circle,rgba(155,166,182,0.42)_2.5px,transparent_3px)] bg-size-[20px_20px] max-[560px]:h-[45px] max-[560px]:w-[70px] max-[560px]:bg-size-[14px_14px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-[15%] right-[4%] z-[2] h-[65px] w-[100px] bg-[radial-gradient(circle,rgba(155,166,182,0.42)_2.5px,transparent_3px)] bg-size-[20px_20px] max-[560px]:h-[45px] max-[560px]:w-[70px] max-[560px]:bg-size-[14px_14px]"
            aria-hidden="true"
          />

          <Carousel
            ref={carouselRef}
            additionalTransfrom={0}
            afterChange={handleSlideChange}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            responsive={responsive}
            showDots={false}
            arrows={false}
            slidesToSlide={1}
            swipeable
            draggable
            containerClass="relative z-[1] h-full w-full [&_.react-multi-carousel-list]:h-full [&_.react-multi-carousel-list]:w-full [&_.react-multi-carousel-list]:overflow-hidden [&_.react-multi-carousel-list]:rounded-[inherit] [&_.react-multi-carousel-track]:h-full [&_.react-multi-carousel-item]:h-auto"
            itemClass="h-full"
          >
            {slides.map(({ image, alt }, index) => (
              <div
                className="relative block h-full min-h-[clamp(500px,30.25vw,610px)] w-full p-[clamp(45px,4vw,74px)] max-[1100px]:min-h-[480px] max-[1100px]:p-10 max-[900px]:min-h-[clamp(300px,58vw,420px)] max-[900px]:px-14 max-[900px]:py-[42px] max-[560px]:min-h-[260px] max-[560px]:px-8 max-[560px]:py-[38px]"
                key={alt}
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 900px) 100vw, 47vw"
                  className="z-[1] block object-contain object-center"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <article className="relative flex min-h-full min-w-0 items-start overflow-hidden rounded-r-[36px] border-l border-slate-200/40 bg-[radial-gradient(ellipse_at_100%_100%,rgba(255,163,64,0.09),transparent_31%),linear-gradient(135deg,#fff_0%,#fff_72%,#fffdfb_100%)] max-[1100px]:rounded-r-[28px] max-[900px]:min-h-0 max-[900px]:rounded-b-[26px] max-[900px]:rounded-t-none max-[900px]:border-l-0 max-[900px]:border-t max-[900px]:border-t-[#f0f1f4] max-[560px]:rounded-b-[19px]">
          <span
            className="pointer-events-none absolute bottom-0 right-0 z-[3] h-[26%] w-[18%] overflow-hidden rounded-br-[36px] max-[1100px]:rounded-br-[28px] max-[560px]:h-[22%] max-[560px]:w-[24%] max-[560px]:rounded-br-[19px]"
            aria-hidden="true"
          >
            <svg
              className="block size-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              focusable="false"
            >
              <path
                fill="rgba(255,248,241,0.92)"
                d="M100 0C74 1 51 8 32 24C12 42 2 68 0 100H100Z"
              />
              <path
                fill="#ff9e35"
                d="M100 12C77 12 57 18 41 31C22 46 12 70 10 100H100Z"
              />
            </svg>
          </span>

          <div
            className="absolute right-[clamp(32px,3.7vw,74px)] top-[clamp(28px,2.25vw,45px)] z-[3] flex items-center gap-[14px] max-[1100px]:top-7 max-[1100px]:right-8 max-[1100px]:gap-2.5 max-[900px]:right-[30px] max-[900px]:top-[25px] max-[560px]:right-[21px] max-[560px]:top-5 max-[560px]:gap-[9px]"
            aria-label="Carousel pagination"
          >
            {slides.slice(0, 3).map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                className={`block size-[15px] shrink-0 rounded-full border-0 p-0 transition-[background,transform] duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#172335] max-[1100px]:size-3 max-[560px]:size-2.5 ${
                  activeSlide === index
                    ? "scale-[1.04] bg-[#ff850f]"
                    : "bg-[#e3e4e7]"
                }`}
                aria-label={`Show slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <div className="relative z-[1] w-full px-[clamp(38px,3.9vw,76px)] py-[clamp(48px,3.1vw,62px)] max-[1100px]:px-8 max-[1100px]:pb-[42px] max-[1100px]:pt-[65px] max-[900px]:px-[clamp(30px,6vw,52px)] max-[900px]:pb-11 max-[900px]:pt-[62px] max-[560px]:px-[23px] max-[560px]:pb-[30px] max-[560px]:pt-[52px]">
            <p className="mb-[15px] flex items-center gap-[13px] text-[clamp(13px,0.91vw,18px)] leading-[1.5] font-semibold tracking-[0.045em] text-[#ff7900] max-[560px]:mb-3 max-[560px]:gap-[10px] max-[560px]:text-xs">
              OUR PURPOSE
              <span className="inline-block h-[1.5px] w-[61px] bg-[#ff850f] max-[560px]:w-[38px]" aria-hidden="true" />
            </p>

            <h2 className="m-0 font-[Georgia,'Times_New_Roman',serif] text-[clamp(38px,2.9vw,58px)] leading-[1.16] font-bold tracking-[-0.045em] text-[#1b2a40] max-[1100px]:text-[clamp(34px,4vw,44px)] max-[900px]:text-[clamp(38px,6vw,48px)] max-[560px]:text-[clamp(34px,9vw,40px)] max-[560px]:tracking-[-0.04em]" id="company-goal-title">
              Company <span className="text-[#fa790b]">Goal</span>
            </h2>

            <div className="mt-[23px] flex h-[7px] w-[138px] overflow-hidden rounded-[1px] max-[560px]:mt-[17px] max-[560px]:h-[6px] max-[560px]:w-28" aria-hidden="true">
              <span className="w-[32%] bg-[#ff850f]" />
              <span className="w-[33%] bg-[#a1a5aa]" />
              <span className="flex-1 bg-[#172335]" />
            </div>

            <p className="mt-6 mb-0 break-words text-[clamp(15px,1.04vw,20px)] leading-[1.69] font-normal tracking-[0.002em] text-justify text-[#3f4c61] [text-justify:inter-word] max-[1100px]:text-[15px] max-[1100px]:leading-[1.7] max-[900px]:mt-6 max-[900px]:text-base max-[900px]:leading-[1.75] max-[560px]:mt-[19px] max-[560px]:text-sm">
              The goal of AAA Future-Edge is to empower organizations by
              creating a results-driven, growth-oriented workforce aligned
              with business strategy. We achieve this by implementing
              comprehensive HR solutions that support every stage of the
              employee journey—from hiring to retirement. By aligning HR
              functions with business objectives, we help our clients
              attract, develop, and retain top talent, fostering a culture
              that emphasizes performance, evidence-based decision-making,
              and long-term growth.
            </p>

            <Link
              className="group mt-6 inline-flex min-h-12 min-w-[168px] items-center justify-center gap-4 rounded-lg border border-[#ff850f] bg-[linear-gradient(110deg,#ff8a12,#ff8614)] px-5 py-3 text-center text-sm font-semibold text-white no-underline transition-[background,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#ed7808] hover:shadow-[0_7px_18px_rgba(255,133,15,0.2)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1b2a40] max-[1100px]:min-h-11 max-[1100px]:min-w-[156px] max-[1100px]:gap-3 max-[560px]:mt-5 max-[560px]:min-h-10 max-[560px]:min-w-[145px] max-[560px]:gap-3 max-[560px]:px-4 max-[560px]:py-2 max-[560px]:text-[13px]"
              href="/explore"
            >
              <span>Learn More</span>
              <span className="text-xl leading-none font-normal transition-transform duration-200 group-hover:translate-x-1 max-[560px]:text-lg" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </article>

        <button
          className="absolute left-[-29px] top-1/2 z-[5] grid size-[76px] min-h-[76px] min-w-[76px] -translate-y-1/2 place-items-center rounded-full border-0 bg-white/97 text-[#1b2a40] shadow-[0_7px_22px_rgba(31,45,61,0.12)] transition-[background,color,box-shadow] duration-[180ms] hover:bg-[#ff8a16] hover:text-white hover:shadow-[0_8px_22px_rgba(255,138,22,0.24)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#172335] max-[1100px]:left-[-22px] max-[1100px]:size-[54px] max-[1100px]:min-h-[54px] max-[1100px]:min-w-[54px] max-[900px]:left-[-20px] max-[900px]:top-[clamp(150px,29vw,210px)] max-[900px]:size-12 max-[900px]:min-h-12 max-[900px]:min-w-12 max-[560px]:left-[-12px] max-[560px]:top-[130px] max-[560px]:size-[39px] max-[560px]:min-h-[39px] max-[560px]:min-w-[39px] [&_svg]:size-[25px] max-[560px]:[&_svg]:size-5"
          type="button"
          aria-label="Show previous image"
          onClick={() => carouselRef.current?.previous(1)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 4L7 12L15 20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="absolute right-[-29px] top-1/2 z-[5] grid size-[76px] min-h-[76px] min-w-[76px] -translate-y-1/2 place-items-center rounded-full border-0 bg-white/97 text-[#1b2a40] shadow-[0_7px_22px_rgba(31,45,61,0.12)] transition-[background,color,box-shadow] duration-[180ms] hover:bg-[#ff8a16] hover:text-white hover:shadow-[0_8px_22px_rgba(255,138,22,0.24)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#172335] max-[1100px]:right-[-22px] max-[1100px]:size-[54px] max-[1100px]:min-h-[54px] max-[1100px]:min-w-[54px] max-[900px]:right-[-20px] max-[900px]:top-[clamp(150px,29vw,210px)] max-[900px]:size-12 max-[900px]:min-h-12 max-[900px]:min-w-12 max-[560px]:right-[-12px] max-[560px]:top-[130px] max-[560px]:size-[39px] max-[560px]:min-h-[39px] max-[560px]:min-w-[39px] [&_svg]:size-[25px] max-[560px]:[&_svg]:size-5"
          type="button"
          aria-label="Show next image"
          onClick={() => carouselRef.current?.next(1)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 4L17 12L9 20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Goal;