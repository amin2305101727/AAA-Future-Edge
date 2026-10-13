"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { createPortal } from "react-dom";
import {
  FaBullseye,
  FaEye,
  FaShieldHalved,
  FaUsers,
  FaGear,
  FaChartColumn,
  FaArrowRight,
  FaGem,
  FaXmark,
} from "react-icons/fa6";

type MissionVisionDetails = {
  title: string;
  description: string;
  details: string;
  color: "orange" | "blue";
};

type MissionVisionCard = MissionVisionDetails & {
  label: string;
  image: string;
  icon: IconType;
  href: string;
};

const OurValue = () => {
  const [activeDetails, setActiveDetails] =
    useState<MissionVisionDetails | null>(null);

  useEffect(() => {
    if (!activeDetails) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDetails(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [activeDetails]);

  const values = [
    {
      title: "Trust",
      description: "We believe in the reliability and truth",
      icon: FaShieldHalved,
    },
    {
      title: "Open",
      description:
        "We see the world as alive, dynamic and full of opportunity",
      icon: FaUsers,
    },
    {
      title: "Doer",
      description: "We are focused to our commitment and get it done",
      icon: FaGear,
    },
    {
      title: "Optimistic",
      description: "We are hopeful and confident about the future",
      icon: FaChartColumn,
    },
  ];

  const cards: MissionVisionCard[] = [
    {
      title: "Mission",
      label: "Our Mission",
      description:
        "Our mission is to design and execute organizational development programs that produce high level of human performance in your organization.",
      details:
        "We work with organizations to strengthen people practices, develop capable teams, and build a workplace where employees can perform at their best. Our approach connects organizational development with practical people strategies that support sustainable growth.",
      image:
        "https://t4.ftcdn.net/jpg/01/18/29/75/360_F_118297595_HqY9fjLZKO1CiDJbwfXYiL7gl43GDg8K.jpg",
      icon: FaBullseye,
      color: "orange",
      href: "/about",
    },
    {
      title: "Vision",
      label: "Our Vision",
      description:
        "We envision in building trust through sustainable human capital.",
      details:
        "Our vision is to help organizations build lasting trust through people-first workplaces. By investing in human capital and encouraging continuous development, we aim to help businesses and their people grow together over time.",
      image:
        "https://technoapogee.com/public/image/about-us/mission-vission/vission.jpg",
      icon: FaEye,
      color: "blue",
      href: "/about",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-14">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-1 w-8 rounded-full bg-orange-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              What Drives Us
            </span>

            <span className="h-1 w-8 rounded-full bg-blue-500" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Mission, Vision{" "}
            <span className="text-orange-500">&amp; Values</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {/* Mission and Vision */}
          {cards.map((card) => {
            const Icon = card.icon;
            const isOrange = card.color === "orange";

            return (
              <article
                key={card.title}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-[26px] border border-white bg-white shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
              >
                {/* Image */}
                <div className="relative h-[250px] overflow-hidden sm:h-[285px]">
                  <img
                    src={card.image}
                    alt={`${card.title} - AAA Future-Edge`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

                  {/* Decorative Image Accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-2 w-full ${
                      isOrange ? "bg-orange-500" : "bg-blue-500"
                    }`}
                  />
                </div>

                {/* Floating Icon */}
                <div className="relative z-10 -mt-9 ml-7 flex h-[70px] w-[70px] items-center justify-center rounded-2xl border-4 border-white bg-white shadow-md">
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-xl ${
                      isOrange
                        ? "bg-gradient-to-br from-orange-400 to-orange-600"
                        : "bg-gradient-to-br from-sky-400 to-blue-600"
                    }`}
                  >
                    <Icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative flex flex-1 flex-col px-7 pb-7 pt-5 sm:px-8 sm:pb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`h-0.5 w-10 rounded-full ${
                        isOrange ? "bg-orange-500" : "bg-blue-500"
                      }`}
                    />

                    <span
                      className={`text-sm font-semibold uppercase tracking-wide ${
                        isOrange ? "text-orange-600" : "text-blue-600"
                      }`}
                    >
                      {card.label}
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    {card.title}
                  </h3>

                  <p className="mt-5 flex-1 text-base leading-8 text-slate-600">
                    {card.description}
                  </p>

                  {/* Read More */}
                  <button
                    type="button"
                    onClick={() => setActiveDetails(card)}
                    aria-label={`Read more about our ${card.title.toLowerCase()}`}
                    className="group/link mt-8 flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-bold text-slate-900 transition-colors group-hover/link:text-orange-500">
                      Read More
                    </span>

                    <span
                      className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 group-hover/link:rotate-[-35deg] group-hover/link:shadow-xl ${
                        isOrange
                          ? "bg-gradient-to-br from-orange-400 to-orange-600 shadow-orange-500/20"
                          : "bg-gradient-to-br from-sky-500 to-blue-600 shadow-blue-500/20"
                      }`}
                    >
                      <FaArrowRight className="text-xl" />
                    </span>
                  </button>
                </div>

                {/* Bottom Decorative Shape */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-20 -right-14 h-48 w-48 rounded-full blur-3xl ${
                    isOrange ? "bg-orange-100/60" : "bg-blue-100/70"
                  }`}
                />
              </article>
            );
          })}

          {/* Values Card */}
          <article className="group flex min-w-0 flex-col overflow-hidden rounded-[26px] border border-white bg-white shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition-all duration-300 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]">
            {/* Values Image */}
            <div className="relative h-[250px] overflow-hidden sm:h-[285px]">
              <img
                src="https://img.freepik.com/premium-photo/business-man-hand-holding-wooden-cube-block-with-value-business-word-table-background-mission-vision-core-values-concept_42256-4641.jpg"
                alt="Core values of AAA Future-Edge"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 h-2 w-full bg-orange-500" />
            </div>

            {/* Floating Icon */}
            <div className="relative z-10 -mt-9 ml-7 flex h-[70px] w-[70px] items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-orange-400 to-orange-600 shadow-md">
              <FaGem className="text-3xl text-white" />
            </div>

            {/* Values Content */}
            <div className="flex flex-1 flex-col px-7 pb-8 pt-5 sm:px-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-0.5 w-10 rounded-full bg-orange-500" />

                <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                  Our Values
                </span>
              </div>

              <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Values
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-600">
                Our core values drive everything what and how we do:
              </p>

              {/* Value Items */}
              <div className="mt-4 space-y-3">
                {values.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={value.title}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">
                        <Icon className="text-xl text-orange-500" />
                      </div>

                      <p className="min-w-0 text-sm leading-6 text-slate-600 sm:text-base">
                        <strong className="font-bold text-slate-900">
                          {value.title}:
                        </strong>{" "}
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>

      {activeDetails ? (
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm sm:p-6"
            onClick={() => setActiveDetails(null)}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="mission-vision-dialog-title"
              className="relative my-auto max-h-[min(90dvh,760px)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/70 bg-white p-6 shadow-2xl sm:p-10"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveDetails(null)}
                aria-label="Close details"
                className="sticky top-0 z-10 -mr-1 -mt-1 ml-auto flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-orange-100 hover:text-orange-600"
              >
                <FaXmark />
              </button>

              <p
                className={`text-sm font-semibold uppercase tracking-[0.25em] ${
                  activeDetails.color === "orange"
                    ? "text-orange-600"
                    : "text-blue-600"
                }`}
              >
                {activeDetails.title === "Mission"
                  ? "Our Purpose"
                  : "Our Future"}
              </p>
              <h2
                id="mission-vision-dialog-title"
                className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
              >
                Our {activeDetails.title}
              </h2>
              <p className="mt-5 text-base font-semibold leading-7 text-slate-700 sm:text-lg">
                {activeDetails.description}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {activeDetails.details}
              </p>
            </section>
          </div>,
          document.body,
        )
      ) : null}
    </section>
  );
};

export default OurValue;