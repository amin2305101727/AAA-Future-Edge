import { FaChalkboardUser, FaUsers } from "react-icons/fa6";

const services = [
  {
    title: "Talent Hunt",
    description:
      "Talent hunt, or headhunting, is the proactive process of identifying and recruiting highly skilled and experienced individuals for specific roles within an organization, often for senior or executive positions. This targeted recruitment approach involves seeking out candidates who are not actively looking for a job but possess the desired expertise and qualifications to meet the company's needs.",
    icon: FaUsers,
  },
  {
    title: "Training & Development",
    description:
      "Training and development refer to the continuous process of enhancing employees' skills, knowledge, and competencies through educational programs and learning opportunities. It aims to improve individual and organizational performance, foster career growth, and help teams adapt to changing industry demands.",
    icon: FaChalkboardUser,
  },
];

const TalentHR = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-orange-100/70 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-2 lg:gap-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group rounded-[22px] border border-blue-100 bg-white p-6 shadow-[0_12px_32px_rgba(25,64,112,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50/70 hover:shadow-[0_20px_40px_rgba(216,112,35,0.16)] sm:p-8 lg:p-10"
            >
              <div className="flex items-center gap-5">
                <div className="flex size-[76px] shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#f47716] transition-colors duration-300 group-hover:bg-orange-100">
                  <Icon className="text-[38px]" aria-hidden="true" />
                </div>
                <span
                  aria-hidden="true"
                  className="h-14 w-px bg-[#f47716] transition-transform duration-300 group-hover:scale-y-110"
                />
                <h2 className="text-2xl leading-tight font-bold text-[#102b4e] transition-colors duration-300 group-hover:text-[#d95f0b] sm:text-3xl">
                  {service.title}
                </h2>
              </div>
              <p className="mt-6 text-justify text-base leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700 sm:text-lg sm:leading-8">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TalentHR;
