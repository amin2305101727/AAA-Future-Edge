import {
  FaClipboardCheck,
  FaGear,
  FaScaleBalanced,
} from "react-icons/fa6";

const complianceServices = [
  {
    title: "Policy Compliance",
    icon: FaClipboardCheck,
    color: "text-[#1685e5]",
    background: "bg-[#e4f2ff]",
  },
  {
    title: "Legal Advisory",
    icon: FaScaleBalanced,
    color: "text-[#f47716]",
    background: "bg-[#fff0e2]",
  },
  {
    title: "Risk Management",
    icon: FaGear,
    color: "text-[#1685e5]",
    background: "bg-[#e4f2ff]",
  },
];

const Compliance = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/2 size-[34rem] -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[680px]">
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-5 h-28 w-2/5 rounded-[28px] bg-[#2678c9] sm:-left-6 sm:-top-6"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-5 -right-4 h-28 w-2/5 rounded-[28px] bg-[#b8e1ff] sm:-bottom-6 sm:-right-6"
          />
          <div className="group relative overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_22px_55px_rgba(16,43,78,0.18)] ring-1 ring-blue-100">
            <img
              src="https://www.kiteworks.com/wp-content/uploads/2022/01/kiteworks-regulatory-compliance-glossary.webp"
              alt="Digital tools supporting regulatory compliance and risk management"
              className="aspect-[1.22/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative">
          <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-600 sm:text-sm">
            <span className="h-[3px] w-10 rounded-full bg-[#1685e5]" />
            <span>Our HR Solutions</span>
          </div>
          <h2 className="text-[clamp(2.5rem,4.6vw,4rem)] leading-[1.02] font-extrabold tracking-tight text-[#102b4e]">
            Compliance &amp;
            <span className="block text-[#1685e5]">Regulatory</span>
          </h2>

          <p className="mt-5 text-justify text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            HR compliance and regulatory services involve ensuring that an
            organization&apos;s human resource practices adhere to local, state,
            and federal laws and regulations. This includes maintaining
            accurate records, implementing fair employment practices, taking
            legal approvals and staying up-to-date with legislative changes to
            mitigate legal risks and promote a fair, compliant workplace.
          </p>
          <p className="mt-4 text-justify text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            HR compliance and regulatory services involve ensuring that an
            organization&apos;s human resource practices adhere to local, state,
            and federal laws and regulations. This includes maintaining
            accurate records, implementing fair employment practices, taking
            legal approvals and staying up-to-date with legislative changes to
            mitigate legal risks and promote a fair, compliant workplace.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {complianceServices.map(({ title, icon: Icon, color, background }) => (
              <article
                key={title}
                className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(16,43,78,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_14px_30px_rgba(22,133,229,0.13)] sm:p-5"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-xl ${background} ${color} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="text-2xl" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-base leading-5 font-bold text-[#102b4e] sm:text-lg sm:leading-6">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
