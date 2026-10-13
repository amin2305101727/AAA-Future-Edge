import Image from "next/image";
import {
  FaArrowRight,
} from "react-icons/fa6";

const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "What to expect during the first meeting (e.g., goals, assessment).",
    image: "/images/Initial-Consultation.png",
  },
  {
    title: "Customized Plan",
    description: "How you develop a tailored career plan based on client needs.",
    image: "/images/Customized-Planning.png",
  },
  {
    title: "Ongoing Support",
    description:
      "Description of follow-up sessions and continued support options.",
    image: "/images/Ongoing-Support.png",
  },
];

const CareerCouncilingProcess = () => {
  return (
    <section
      className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <Image
        src="/images/Process-work.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-600 sm:text-sm">
            <span className="h-[3px] w-10 rounded-full bg-[#0877df]" />
            <span>Our Process</span>
            <span className="h-[3px] w-10 rounded-full bg-[#0877df]" />
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.25rem)] leading-tight font-bold tracking-tight text-[#102345]">
            How does <span className="text-[#0877df]">Process work?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-7 lg:mt-20 lg:gap-10">
          {processSteps.map(({ title, description, image }, index) => (
            <article
              key={title}
              className="group relative flex min-h-[330px] flex-col items-center rounded-[28px] border-2 border-[#c7ddf5] bg-transparent px-5 pb-6 pt-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#1688e8] sm:px-6"
            >
              <span className="absolute -top-6 z-10 flex size-14 items-center justify-center rounded-full border-[6px] border-[#e7f2ff] bg-gradient-to-br from-[#1688e8] to-[#0755ce] text-xl font-extrabold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                {index + 1}
              </span>
              <img
                src={image}
                alt={`${title} illustration`}
                className="aspect-[1.5/1] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                width={1536}
                height={1024}
                loading="lazy"
              />
              <h3 className="mt-5 text-lg leading-7 font-bold text-[#102345] transition-colors duration-300 group-hover:text-[#075db1] sm:text-xl">
                {title}
              </h3>
              <p className="mt-3 text-justify text-base leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                {description}
              </p>
              <span className="absolute inset-x-8 bottom-0 h-1 origin-left scale-x-0 rounded-full bg-[#1688e8] transition-transform duration-300 group-hover:scale-x-100" />
              {index < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-8 top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white text-lg text-[#0877df] shadow-sm md:flex"
                >
                  <FaArrowRight />
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerCouncilingProcess;
