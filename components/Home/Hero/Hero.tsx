import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiAward,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiUsers,
    title: "Expert",
    detail: "HR Consultancy",
    note: "People · Process · Growth",
    tone: "orange",
  },
  {
    icon: FiTrendingUp,
    title: "IT Strategy &",
    detail: "Digital Growth",
    note: "Innovate · Transform · Scale",
    tone: "blue",
  },
  {
    icon: FiShield,
    title: "Long-Term",
    detail: "Business Partnership",
    note: "Trust · Value · Success",
    tone: "orange",
  },
];

const achievements = [
  { icon: FiUsers, value: "100+", label: "Organizations Served" },
  { icon: FiAward, value: "10+", label: "Years of Experience" },
  { icon: FiSettings, value: "50+", label: "HR & IT Professionals" },
  { icon: FiTrendingUp, value: "Trusted", label: "by Growing Businesses" },
];

const Hero = () => {
  return (
    <section className="sticky top-[68px] z-0 isolate h-[calc(100svh-68px)] overflow-hidden bg-[#f7faff] sm:top-[74px] sm:h-[calc(100svh-74px)] xl:top-[78px] xl:h-[calc(100svh-78px)]">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/home-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center max-[767px]:object-[62%_center]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.24)_46%,transparent_67%)] max-[767px]:bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.82)_54%,rgba(255,255,255,0.52)_100%)]"
      />

      <div className="relative z-10 mx-auto flex h-full w-[calc(100%-64px)] max-w-[1440px] flex-col justify-between py-2 max-[1100px]:w-[calc(100%-56px)] max-[1100px]:py-2 max-[767px]:w-[calc(100%-40px)] max-[767px]:max-w-[580px] max-[767px]:py-2">
        <div className="w-[min(68%,820px)] max-[1100px]:w-[68%] max-[767px]:w-full">
          <h1 className="m-0 max-w-[820px] text-[clamp(38px,4.3vw,62px)] leading-[0.99] font-bold tracking-[-0.055em] text-[#101c30] max-[1100px]:text-[clamp(32px,4vw,44px)] max-[767px]:text-[clamp(34px,8vw,48px)] max-[767px]:leading-[1]">
            <span className="block">Your Trusted Partner in</span>
            <span className="block text-[#ff7900]">HR &amp; IT Solutions</span>
          </h1>

          <p className="mt-4 max-w-[720px] text-[clamp(16px,1.35vw,20px)] leading-[1.5] text-[#53627a] max-[1100px]:mt-3 max-[1100px]:text-[15px] max-[1100px]:leading-[1.4] max-[767px]:mt-2 max-[767px]:text-[13px] max-[767px]:leading-[1.4]">
            Empowering organizations with innovative HR strategies and
            <br />
            cutting-edge IT solutions for a smarter, more sustainable future.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 max-[1100px]:mt-4 max-[1100px]:gap-3 max-[767px]:mt-3 max-[767px]:gap-2.5 max-[420px]:flex-row max-[420px]:items-center">
            <Link
              className="inline-flex min-h-[54px] items-center justify-center gap-4 rounded-xl bg-[#ff7900] px-6 text-[15px] font-bold text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-[#e96900] max-[1100px]:min-h-12 max-[1100px]:gap-3 max-[1100px]:px-5 max-[1100px]:text-sm max-[767px]:min-h-[44px] max-[767px]:gap-2 max-[767px]:rounded-[10px] max-[767px]:px-4 max-[767px]:text-[13px]"
              href="/hr-services"
            >
              Explore Our Solutions
              <FiArrowRight
                className="size-5 max-[767px]:size-[18px]"
                aria-hidden="true"
              />
            </Link>
            <Link
              className="inline-flex min-h-[54px] items-center justify-center gap-4 rounded-xl border-2 border-[#172033] bg-white/75 px-6 text-[15px] font-bold text-[#172033] no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-[#172033] hover:text-white max-[1100px]:min-h-12 max-[1100px]:gap-3 max-[1100px]:px-5 max-[1100px]:text-sm max-[767px]:min-h-[44px] max-[767px]:gap-2 max-[767px]:rounded-[10px] max-[767px]:px-4 max-[767px]:text-[13px]"
              href="/explore"
            >
              Learn More
              <FiArrowRight
                className="size-5 max-[767px]:size-[18px]"
                aria-hidden="true"
              />
            </Link>
          </div>

          <ul className="mt-7 flex list-none items-center p-0 max-[1100px]:mt-5 max-[1100px]:flex-wrap max-[1100px]:gap-y-2 max-[767px]:mt-3 max-[767px]:grid max-[767px]:grid-cols-3 max-[767px]:gap-2">
            {highlights.map(({ icon: Icon, title, detail, note, tone }) => (
              <li
                key={detail}
                className="flex min-h-[56px] items-center gap-3 px-4 text-[13px] text-[#172033] first:pl-0 [&+li]:border-l [&+li]:border-[#cbd1dc] max-[1100px]:min-h-12 max-[1100px]:gap-2 max-[1100px]:px-3 max-[767px]:min-h-0 max-[767px]:gap-1.5 max-[767px]:px-1 max-[767px]:text-[10px]"
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl max-[1100px]:size-9 max-[767px]:size-7 max-[767px]:rounded-lg ${
                    tone === "blue"
                      ? "bg-[#e6f1ff] text-[#1684ed]"
                      : "bg-[#fff0e2] text-[#ff7900]"
                  }`}
                >
                  <Icon className="size-6 max-[1100px]:size-5 max-[767px]:size-4" aria-hidden="true" />
                </span>
                <span className="leading-[1.25]">
                  <strong className="block font-bold">{title}</strong>
                  <strong className="block font-bold">{detail}</strong>
                  <span className="mt-1 block text-xs text-[#69758a] max-[767px]:hidden">
                    {note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3 grid w-full max-w-[900px] shrink-0 grid-cols-4 overflow-hidden rounded-2xl border border-white/90 bg-white/95 px-1 py-2 shadow-[0_16px_40px_rgba(15,35,65,0.12)] backdrop-blur-sm max-[767px]:mb-2 max-[767px]:mt-4 max-[767px]:grid-cols-2 max-[767px]:py-1">
          {achievements.map(({ icon: Icon, value, label }, index) => (
            <div
              key={label}
              className={`flex min-w-0 items-center gap-2 px-3 py-1 max-[1100px]:gap-1.5 max-[1100px]:px-2 max-[1100px]:py-1 max-[767px]:gap-1.5 max-[767px]:px-2 max-[767px]:py-2 ${
                index > 0
                  ? "border-l border-[#d7dfeb] max-[767px]:border-l-0"
                  : ""
              } ${
                index === 1 || index === 3
                  ? "max-[767px]:border-l max-[767px]:border-[#d7dfeb]"
                  : ""
              } ${
                index > 1
                  ? "max-[767px]:border-t max-[767px]:border-[#d7dfeb]"
                  : ""
              }`}
            >
              <Icon
                className="size-7 shrink-0 text-[#ff7900] max-[1100px]:size-5 max-[767px]:size-4"
                aria-hidden="true"
              />
              <span className="min-w-0">
                <strong className="block truncate text-[clamp(17px,1.5vw,24px)] leading-none font-extrabold text-[#101c30] max-[767px]:text-sm">
                  {value}
                </strong>
                <span className="mt-0.5 block text-xs leading-tight text-[#69758a] max-[767px]:text-[9px]">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
