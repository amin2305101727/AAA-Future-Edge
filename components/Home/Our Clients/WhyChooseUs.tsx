import Image from "next/image";
import {
  FaAward,
  FaBriefcase,
  FaChartLine,
  FaHandshake,
  FaPeopleGroup,
  FaRotate,
} from "react-icons/fa6";

const reasons = [
  {
    icon: FaPeopleGroup,
    title: "Young & Energetic Team",
    description: "A passionate team ready to create impact.",
  },
  {
    icon: FaBriefcase,
    title: "Complex Working Cultures",
    description: "Expertise in diverse and dynamic work environments.",
  },
  {
    icon: FaRotate,
    title: "Flexible, Agile, and Cost-Effective",
    description: "Adaptable solutions for maximum value.",
  },
  {
    icon: FaAward,
    title: "Experienced Professionals",
    description: "Skilled experts with proven industry knowledge.",
  },
  {
    icon: FaHandshake,
    title: "More Than Just a Service",
    description: "A true partner in your success.",
  },
  {
    icon: FaChartLine,
    title: "Focus on Your Business",
    description: "Let us handle HR, so you can focus on what matters most.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8faff]">
      <Image
        src="/images/whychoose.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.88)_43%,rgba(255,255,255,0.34)_59%,transparent_76%)] max-[767px]:bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.91)_63%,rgba(255,255,255,0.48)_100%)]"
      />

      <div className="relative mx-auto grid min-h-[560px] max-w-[1800px] grid-cols-1 items-center gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[600px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-14 xl:px-16">
        <div className="max-w-[790px]">
          <div className="mb-4 flex items-center gap-4">
            <span className="relative h-[3px] w-[54px] rounded-full bg-orange-500">
              <span className="absolute -right-1 -top-[3px] size-[9px] rounded-full border-2 border-orange-500 bg-white" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#172b4d]">
              Why Choose Us
            </p>
          </div>

          <h2 className="font-serif text-[clamp(2.5rem,4.3vw,4.35rem)] leading-[0.98] font-bold tracking-[-0.035em] text-[#101b36]">
            Your Trusted Partner
            <br />
            for <span className="text-orange-500">Growth &amp; Success</span>
          </h2>

          <p className="mt-4 max-w-[760px] text-base leading-[1.5] text-slate-700 sm:text-lg">
            We tackle challenges like improving productivity, boosting employee
            morale, and streamlining recruitment, so your managers can focus on
            growth rather than daily people issues.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
            {reasons.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="flex min-h-[82px] items-center gap-3 rounded-[20px] border border-blue-100/90 bg-white/75 p-3 shadow-[0_5px_18px_rgba(43,74,120,0.04)] backdrop-blur-sm sm:gap-3 sm:p-3"
              >
                <span className="grid size-[54px] shrink-0 place-items-center rounded-2xl bg-orange-100 text-orange-500 sm:size-[60px]">
                  <Icon className="text-[30px] sm:text-[34px]" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <h3 className="text-sm font-extrabold leading-5 text-[#15213b] sm:text-base">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {description}
                  </p>
                </span>
              </article>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="hidden lg:block" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
