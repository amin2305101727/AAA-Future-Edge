import {
  FaArrowRight,
  FaChartLine,
  FaFileCircleCheck,
  FaGear,
  FaUsers,
} from "react-icons/fa6";

const coreServiceHighlights = [
  { label: "People Solutions", icon: FaUsers },
  { label: "Compliance & Advisory", icon: FaFileCircleCheck },
  { label: "HR Process Optimization", icon: FaGear },
  { label: "Strategic Support", icon: FaChartLine },
];

const CoreServicesBanner = () => {
  return (
    <section
      className="relative flex min-h-[760px] items-center overflow-hidden bg-[#f4faff] bg-cover bg-left bg-no-repeat px-5 py-16 sm:px-8 lg:min-h-[min(760px,calc(100svh-78px))] lg:bg-center lg:px-0"
      style={{ backgroundImage: "url('/images/Core-Service.png')" }}
    >
      <div className="mx-auto w-full max-w-[1760px] lg:pl-12">
        <div className="max-w-[800px]">
          <div className="mb-3 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.24em] text-[#18365d] sm:text-sm">
            <span>What We Offer</span>
            <span className="h-1 w-12 rounded-full bg-[#19a8d7]" />
          </div>
          <h1 className="font-serif text-[clamp(3.25rem,6vw,5.5rem)] leading-[0.98] font-bold tracking-tight text-[#10294f]">
            Our Core <span className="text-[#087cbd]">Services</span>
          </h1>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-slate-700 sm:text-lg sm:leading-[1.5]">
            We deliver end-to-end HR and business support services designed to
            help organizations build capable teams, ensure compliance, and
            achieve sustainable growth. Our core services are tailored to meet
            the evolving needs of modern businesses across industries.
          </p>
          <span
            aria-hidden="true"
            className="mt-4 block h-1 w-12 rounded-full bg-[#19a8d7]"
          />

          <ul className="mt-6 grid max-w-[760px] grid-cols-2 sm:grid-cols-4">
            {coreServiceHighlights.map(({ label, icon: Icon }, index) => (
              <li
                key={label}
                className={`flex flex-col items-center px-2 text-center text-sm font-semibold leading-5 text-[#10294f] sm:px-3 sm:text-base ${
                  index === 0
                    ? ""
                    : index % 2 === 0
                      ? "sm:border-l sm:border-[#b9cfe0]"
                      : "border-l border-[#b9cfe0]"
                }`}
              >
                <span className="mb-2 flex size-[68px] items-center justify-center rounded-full bg-[#e2f3ff] text-[30px] text-[#087cbd]">
                  <Icon aria-hidden="true" />
                </span>
                <span className="max-w-[140px]">{label}</span>
              </li>
            ))}
          </ul>

          <a
            href="#core-services"
            className="mt-8 inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#087bc1] to-[#102f5d] py-2 pl-6 pr-2 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087cbd] sm:text-base"
          >
            Explore Our Services
            <span className="flex size-9 items-center justify-center rounded-full bg-white text-[#087cbd]">
              <FaArrowRight aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesBanner;
