import {
  FaBolt,
  FaFingerprint,
  FaFilter,
  FaMoon,
} from "react-icons/fa6";

const offerings = [
  {
    title: "Career Assessments",
    description:
      "Our key offerings are designed to support individuals at various stages of their career journey",
    icon: FaFingerprint,
    color: "text-blue-600",
    background: "bg-blue-100",
    hover: "group-hover:bg-blue-600",
  },
  {
    title: "Resume and Cover letter writing",
    description:
      "Our resume and cover letter writing services help clients craft professional and impactful documents that stand out to employers",
    icon: FaBolt,
    color: "text-orange-600",
    background: "bg-orange-100",
    hover: "group-hover:bg-orange-600",
  },
  {
    title: "Interview Coaching",
    description:
      "For those preparing for job interviews, our interview coaching offers essential practice and feedback",
    icon: FaMoon,
    color: "text-green-600",
    background: "bg-green-100",
    hover: "group-hover:bg-green-600",
  },
  {
    title: "Job Search Strategies",
    description:
      "We provide job search strategies to assist clients in navigating the job market effectively",
    icon: FaFilter,
    color: "text-red-600",
    background: "bg-red-100",
    hover: "group-hover:bg-red-600",
  },
];

const KeyOfferings = () => {
  return (
    <section
      id="career-offerings"
      className="scroll-mt-24 bg-[#f7faff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {offerings.map(
          ({
            title,
            description,
            icon: Icon,
            color,
            background,
            hover,
          }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-slate-200 border-t-4 border-t-slate-300 bg-white p-6 text-center shadow-[0_8px_24px_rgba(16,43,78,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50/70 hover:shadow-[0_16px_32px_rgba(16,43,78,0.12)] sm:p-7"
            >
              <span
                className={`flex size-[68px] items-center justify-center rounded-full ${background} ${color} transition-all duration-300 ${hover} group-hover:scale-105 group-hover:text-white`}
              >
                <Icon className="text-[30px]" aria-hidden="true" />
              </span>
              <h2 className="mt-5 min-h-14 text-lg leading-7 font-bold text-[#102b4e] transition-colors duration-300 group-hover:text-[#0877df]">
                {title}
              </h2>
              <p className="mt-3 text-justify text-base leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                {description}
              </p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#1688e8] transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ),
        )}
      </div>
    </section>
  );
};

export default KeyOfferings;
