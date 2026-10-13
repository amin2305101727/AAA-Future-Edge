const coreServices = [
  {
    title: "HR Transformation",
    description:
      "Redesign and optimize HR functions to align with business objectives and drive impactful change.",
  },
  {
    title: "Team Building",
    description:
      "Strengthen team cohesion and collaboration through tailored programs that foster trust, communication, and synergy.",
  },
  {
    title: "MTO Development",
    description:
      "Develop future leaders through our Management Trainee Officer (MTO) program, which provides structured training and growth opportunities for young talent.",
  },
  {
    title: "HR Strategy & Process",
    description:
      "Develop and implement HR strategies and processes that support long-term business goals and improve operational efficiency.",
  },
  {
    title: "Organizational Development (OD)",
    description:
      "Enhance organizational effectiveness through interventions that focus on culture, structure, and continuous improvement.",
  },
  {
    title: "Value Proposition",
    description:
      "Create a compelling employer value proposition to attract, engage, and retain top talent.",
  },
  {
    title: "Performance Management",
    description:
      "Establish a robust system for setting goals, evaluating performance, and driving employee growth.",
  },
  {
    title: "Future Leadership Development",
    description:
      "Identify and nurture potential leaders to ensure a pipeline of talent equipped to guide the organization forward.",
  },
];

const CoreServices = () => {
  return (
    <section id="core-services" className="bg-[#f5f8fc] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="pb-10 text-center font-[Inter] text-3xl font-bold text-[#102b4e] sm:text-4xl lg:pb-12 lg:text-5xl">
          Explore Our Services
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-slate-200 border-t-4 border-t-[#626366] bg-white shadow-[0_8px_24px_rgba(16,43,78,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1685e5] hover:bg-[#102b4e] hover:shadow-[0_18px_36px_rgba(16,43,78,0.2)]"
            >
              <div className="flex-1 p-7">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-orange-50 text-sm font-bold text-[#f58a1f] transition-colors duration-300 group-hover:bg-white/10 group-hover:text-[#63cdf4]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-[Inter] text-xl leading-7 font-bold text-[#102b4e] transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-justify text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-200">
                  {service.description}
                </p>
              </div>
              <div className="h-1 w-full origin-left scale-x-0 bg-[#f58a1f] transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
