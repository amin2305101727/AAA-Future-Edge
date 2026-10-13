"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaArrowRight,
  FaChartLine,
  FaGraduationCap,
  FaXmark,
} from "react-icons/fa6";

type TalentService = {
  title: string;
  description: string;
  details: string;
  icon: typeof FaGraduationCap;
};

const services: TalentService[] = [
  {
    title: "Development",
    description:
      "Build the skills, confidence and leadership your people need to grow.",
    details:
      "Talent development is a strategic process for identifying and strengthening the skills your organization needs today and in the future. We help shape practical development programs through skills assessment, focused training, mentoring, career planning and succession preparation—so employees can grow while your organization builds a stronger talent pipeline.",
    icon: FaGraduationCap,
  },
  {
    title: "Optimization",
    description:
      "Align people, roles and performance with your organizational goals.",
    details:
      "Talent optimization connects your people strategy with business outcomes. By understanding role requirements, workforce capabilities and performance goals, organizations can make more informed decisions about team structure, placement and growth. A considered optimization approach helps improve engagement, close capability gaps and ensure the right people are supported in the right roles.",
    icon: FaChartLine,
  },
];

const TalentManagement = () => {
  const [activeService, setActiveService] = useState<TalentService | null>(null);

  useEffect(() => {
    if (!activeService) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveService(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [activeService]);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <header className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0787b9]">
            People. Potential. Performance.
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#102b4e] sm:text-4xl lg:text-5xl">
            Talent Management
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Develop talent and align people capabilities with your
            organization&apos;s goals.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(16,43,78,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0787b9] hover:bg-[#087eb6] hover:shadow-[0_18px_40px_rgba(8,126,182,0.22)] sm:p-8 lg:p-10"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-sky-50 text-[#0787b9] transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                  <Icon className="text-2xl" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#102b4e] transition-colors duration-300 group-hover:text-white sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl leading-7 text-slate-600 transition-colors duration-300 group-hover:text-white/90">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveService(service)}
                  aria-haspopup="dialog"
                  className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#0787b9] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#05678f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0787b9] group-hover:bg-white group-hover:text-[#087eb6] group-hover:hover:bg-sky-50"
                >
                  Learn More
                  <FaArrowRight aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {activeService
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/65 p-4 sm:p-6"
              onClick={() => setActiveService(null)}
            >
              <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="talent-service-dialog-title"
                className="relative my-auto max-h-[min(90dvh,760px)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-9"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  aria-label="Close details"
                  className="sticky top-0 z-10 -mr-1 -mt-1 ml-auto flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-sky-100 hover:text-[#087eb6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087eb6]"
                >
                  <FaXmark aria-hidden="true" />
                </button>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0787b9]">
                  Talent Management
                </p>
                <h2
                  id="talent-service-dialog-title"
                  className="mt-2 text-3xl font-extrabold tracking-tight text-[#102b4e] sm:text-4xl"
                >
                  {activeService.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {activeService.details}
                </p>
              </section>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
};

export default TalentManagement;
