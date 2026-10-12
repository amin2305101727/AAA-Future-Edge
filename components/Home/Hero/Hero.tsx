import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[min(790px,calc(100svh-78px))] flex-col overflow-hidden bg-[linear-gradient(128deg,transparent_59%,rgba(229,233,241,0.42)_59.2%,transparent_68%),#fff] max-[767px]:min-h-0 max-[767px]:bg-white">
      <div
        className="absolute right-0 top-0 z-[2] h-[30%] w-1/4 bg-[linear-gradient(145deg,#ffad31,#ff7900)] [clip-path:polygon(42%_0,100%_0,100%_100%,0_0)] max-[767px]:bottom-0 max-[767px]:right-[-3%] max-[767px]:top-auto max-[767px]:h-[36%] max-[767px]:w-[42%]"
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 z-[1] h-full w-[59%] overflow-hidden [clip-path:polygon(59%_0,100%_0,100%_82%,80%_100%,24%_100%,0_75%)] max-[767px]:relative max-[767px]:order-2 max-[767px]:h-[clamp(280px,72vw,420px)] max-[767px]:w-full max-[767px]:[clip-path:polygon(22%_0,100%_0,100%_83%,84%_100%,8%_100%,0_82%)]">
        <Image
          src="/images/home-hero-team.jpg"
          alt="A team working together on business and technology solutions"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 60vw"
          className="object-cover object-[center_42%]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent_32%)]"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-[2] order-1 mx-auto flex min-h-[inherit] w-[calc(100%-64px)] max-w-[1440px] items-center py-[72px] pb-14 max-[1100px]:w-[calc(100%-56px)] max-[767px]:min-h-0 max-[767px]:w-[calc(100%-40px)] max-[767px]:max-w-[580px] max-[767px]:py-[46px] max-[767px]:pb-6">
        <div className="w-[min(57%,700px)] max-[1100px]:w-[61%] max-[767px]:w-full">
          <p className="mb-[34px] flex items-center gap-[14px] text-sm font-extrabold tracking-[0.24em] text-[#172033] max-[767px]:mb-[22px] max-[767px]:gap-[10px] max-[767px]:text-[11px]">
            <span className="h-0.5 w-[50px] bg-[#ff7900] max-[767px]:w-[34px]" aria-hidden="true" />
            AAA FUTURE-EDGE
          </p>
          <h1 className="m-0 max-w-[710px] text-[clamp(46px,5vw,70px)] leading-[0.99] font-bold tracking-[-0.055em] text-[#101c30] max-[767px]:text-[clamp(39px,10vw,58px)] max-[767px]:leading-[1.02]">
            Your Trusted Partner in{" "}
            <span className="text-[#ff7900]">HR &amp; IT</span> Solutions
          </h1>
          <p className="mt-6 max-w-[600px] text-[clamp(17px,1.55vw,22px)] leading-[1.65] text-[#29364a] max-[767px]:mt-[18px] max-[767px]:text-base max-[767px]:leading-[1.6]">
            Empowering organizations with innovative HR strategies and
            cutting-edge IT solutions for a smarter, more sustainable future.
          </p>
          <div className="mt-8 flex flex-wrap gap-[18px] max-[767px]:mt-6 max-[767px]:gap-3 max-[420px]:flex-col max-[420px]:items-stretch">
            <Link className="inline-flex min-h-[60px] items-center justify-center gap-[14px] rounded-xl border-2 border-transparent bg-[#ff7900] px-[23px] text-base font-bold text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-[#e96900] max-[767px]:min-h-[52px] max-[767px]:gap-[9px] max-[767px]:rounded-[10px] max-[767px]:px-4 max-[767px]:text-sm" href="/core-services">
              Explore Our Services
              <FiArrowRight className="size-5 max-[767px]:size-[18px]" aria-hidden="true" />
            </Link>
            <Link className="inline-flex min-h-[60px] items-center justify-center gap-[14px] rounded-xl border-2 border-[#172033] bg-white/85 px-[23px] text-base font-bold text-[#172033] no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-[#172033] hover:text-white max-[767px]:min-h-[52px] max-[767px]:gap-[9px] max-[767px]:rounded-[10px] max-[767px]:px-4 max-[767px]:text-sm" href="/explore">
              Learn More
              <FiArrowRight className="size-5 max-[767px]:size-[18px]" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-[46px] flex list-none items-center p-0 max-[767px]:mt-[30px] max-[767px]:grid max-[767px]:grid-cols-2 max-[767px]:gap-x-2 max-[767px]:gap-y-[14px]">
            <li className="flex min-h-[58px] items-center gap-3 px-[22px] text-sm leading-[1.45] font-bold text-[#172033] first:pl-0 [&+li]:border-l [&+li]:border-[#cbd1dc] max-[1100px]:gap-[9px] max-[1100px]:px-[14px] max-[1100px]:text-xs max-[767px]:min-h-12 max-[767px]:gap-[9px] max-[767px]:px-2 max-[767px]:text-xs max-[767px]:[&+li]:border-l-0">
              <span className="grid size-[46px] shrink-0 place-items-center rounded-xl bg-[#fff0e2] text-[#ff7900] [&_svg]:size-[27px] max-[1100px]:size-10 max-[767px]:size-[38px] max-[767px]:[&_svg]:size-[22px]">
                <FiUsers aria-hidden="true" />
              </span>
              <span>Expert<br />HR Consultancy</span>
            </li>
            <li className="flex min-h-[58px] items-center gap-3 px-[22px] text-sm leading-[1.45] font-bold text-[#172033] first:pl-0 [&+li]:border-l [&+li]:border-[#cbd1dc] max-[1100px]:gap-[9px] max-[1100px]:px-[14px] max-[1100px]:text-xs max-[767px]:min-h-12 max-[767px]:gap-[9px] max-[767px]:px-2 max-[767px]:text-xs max-[767px]:[&+li]:border-l-0">
              <span className="grid size-[46px] shrink-0 place-items-center rounded-xl bg-[#f0edff] text-[#6550e8] [&_svg]:size-[27px] max-[1100px]:size-10 max-[767px]:size-[38px] max-[767px]:[&_svg]:size-[22px]">
                <FiTrendingUp aria-hidden="true" />
              </span>
              <span>IT Strategy &amp;<br />Digital Growth</span>
            </li>
            <li className="flex min-h-[58px] items-center gap-3 px-[22px] text-sm leading-[1.45] font-bold text-[#172033] first:pl-0 [&+li]:border-l [&+li]:border-[#cbd1dc] max-[1100px]:gap-[9px] max-[1100px]:px-[14px] max-[1100px]:text-xs max-[767px]:min-h-12 max-[767px]:gap-[9px] max-[767px]:px-2 max-[767px]:text-xs max-[767px]:[&+li]:border-l-0">
              <span className="grid size-[46px] shrink-0 place-items-center rounded-xl bg-[#fff0e2] text-[#ff7900] [&_svg]:size-[27px] max-[1100px]:size-10 max-[767px]:size-[38px] max-[767px]:[&_svg]:size-[22px]">
                <FiShield aria-hidden="true" />
              </span>
              <span>Long-Term<br />Business Partnership</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute left-[54%] top-[27%] z-[2] size-[100px] bg-[radial-gradient(#c5ccd9_1.7px,transparent_1.7px)] bg-size-[14px_14px] opacity-75 max-[767px]:bottom-[29%] max-[767px]:left-auto max-[767px]:right-3 max-[767px]:top-auto max-[767px]:size-16 max-[767px]:bg-size-[12px_12px]" aria-hidden="true" />
    </section>
  );
};

export default Hero;
