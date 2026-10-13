import {
  FaBullseye,
  FaChartSimple,
  FaGear,
  FaUsers,
} from "react-icons/fa6";

const aboutCards = [
  {
    title: "Our Mission",
    description:
      "Statement about your commitment to helping clients achieve their career goals.",
    icon: FaBullseye,
  },
  {
    title: "Our Team",
    description: "Brief bios of counselors and their qualifications.",
    icon: FaUsers,
  },
  {
    title: "Our Approach",
    description: "Description of your counseling philosophy and methods.",
    icon: FaGear,
  },
  {
    title: "Why Choose Us",
    description: "Unique selling points and advantages of your service.",
    icon: FaChartSimple,
  },
];

const CareerCouncilingAbout = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#f7faff] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ backgroundImage: "url('/images/Career-about.png')" }}
    >
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        <div>
          <div className="mb-3 h-1 w-16 rounded-full bg-[#1688e8]" />
          <h2 className="mb-7 text-4xl leading-tight font-extrabold tracking-tight text-[#102345] sm:text-5xl lg:text-6xl">
            About <span className="text-[#0877df]">Us</span>
          </h2>

          <div className="grid gap-3 sm:gap-4">
            {aboutCards.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group flex items-center gap-4 rounded-2xl border border-blue-100/90 bg-white/85 p-4 shadow-[0_8px_24px_rgba(25,91,154,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1688e8] hover:bg-[#eaf5ff] hover:shadow-[0_14px_30px_rgba(25,91,154,0.14)] sm:gap-5 sm:p-5"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f4ff] text-2xl text-[#0877df] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0877df] group-hover:text-white sm:size-16">
                  <Icon aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg leading-6 font-bold text-[#102345] transition-colors duration-300 group-hover:text-[#075db1] sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-1 text-left text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-700 sm:text-base">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[620px] lg:ml-auto">
          <img
            src="https://i.postimg.cc/3rk38DzB/Pngtree-cyber-security-system-technology-landing-14868800-1.png"
            alt="Digital security illustration representing career counselling and guidance"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerCouncilingAbout;
