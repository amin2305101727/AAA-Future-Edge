import {
  FaBookOpen,
  FaBriefcase,
  FaChartColumn,
  FaCoins,
  FaFileLines,
  FaPeopleGroup,
  FaUser,
  FaUserTie,
} from "react-icons/fa6";

const popularOfferings = [
  { title: "Headhunting", icon: FaPeopleGroup },
  { title: "Employee Outsourcing", icon: FaUser },
  { title: "Teambuilding Workshop", icon: FaPeopleGroup },
  { title: "Policies Development", icon: FaFileLines },
  { title: "Effortless Payroll Management", icon: FaCoins },
  { title: "Business and Management Consultancy", icon: FaBriefcase },
  { title: "Employee Handbook Audit & Customization", icon: FaBookOpen },
  { title: "Succession Planning", icon: FaChartColumn },
];

const PopularOfferings = () => {
  return (
    <section className="relative overflow-hidden bg-[#fbfcfe] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[820px]">
          <span
            aria-hidden="true"
            className="absolute -left-5 -top-5 h-2/5 w-2/5 rounded-tr-[64px] rounded-bl-[64px] bg-[#ffc18f] sm:-left-7 sm:-top-7"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-2/5 w-2/5 rounded-tl-[64px] rounded-br-[64px] bg-[#ffddc2] sm:-bottom-7 sm:-right-7"
          />
          <div className="group relative overflow-hidden rounded-[24px] border-[5px] border-white shadow-[0_20px_50px_rgba(16,43,78,0.16)]">
            <img
              src="https://i.postimg.cc/GpzkFbrQ/10834954-10206330521285763-6184217903086276626-o.jpg"
              alt="AAA Future Edge team taking part in a professional workshop"
              className="aspect-[1.42/1] w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-12 left-3 hidden grid-cols-5 gap-2 sm:grid"
          >
            {Array.from({ length: 20 }, (_, index) => (
              <span key={index} className="size-1.5 rounded-full bg-[#f58a1f]" />
            ))}
          </div>
        </div>

        <div className="relative">
          <h2 className="font-serif text-[clamp(2.75rem,4.8vw,4.25rem)] leading-[0.98] font-bold tracking-tight text-[#10294f]">
            Other Popular
            <span className="block text-[#f58a1f]">Offerings</span>
          </h2>
          <span
            aria-hidden="true"
            className="mt-4 mb-6 block h-1 w-20 rounded-full bg-[#f58a1f]"
          />

          <ul className="space-y-2">
            {popularOfferings.map(({ title, icon: Icon }) => (
              <li key={title}>
                <div className="group flex min-h-[54px] items-center gap-4 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-[0_5px_16px_rgba(16,43,78,0.06)] transition-all duration-300 hover:translate-x-1 hover:border-orange-200 hover:bg-orange-50/70 hover:shadow-[0_10px_24px_rgba(245,138,31,0.12)] sm:gap-5 sm:px-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#fff1e5] text-xl text-[#f58a1f] transition-colors duration-300 group-hover:bg-[#f58a1f] group-hover:text-white">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-5 text-[#10294f] transition-colors duration-300 group-hover:text-[#c45a00] sm:text-base">
                    {title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PopularOfferings;
