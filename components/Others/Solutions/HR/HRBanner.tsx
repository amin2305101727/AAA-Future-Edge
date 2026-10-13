import HRState from "./HRState";

const HRBanner = () => {
  return (
    <>
      <section
        id="hr-strategy"
        className="relative isolate min-h-[720px] overflow-hidden bg-cover bg-center bg-no-repeat px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:h-[540px] lg:min-h-0 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0"
        style={{ backgroundImage: "url('/images/HR.png')" }}
      >
        <div className="mx-auto flex min-h-[420px] max-w-[1200px] items-center sm:min-h-[440px] lg:min-h-[480px]">
          <div className="max-w-[540px] lg:-translate-y-5">
            <span
              aria-hidden="true"
              className="mb-4 block h-1 w-20 rounded-full bg-[#09b7dc]"
            />
            <h1 className="text-[clamp(3.2rem,6.5vw,5.5rem)] leading-[0.98] font-extrabold tracking-tight text-[#102b4e]">
              HR <span className="text-[#087eb6]">Strategy</span>
            </h1>
            <p className="mt-4 max-w-[500px] text-sm leading-[1.65] text-[#33445d] sm:text-base">
              Dedicated to igniting growth and innovation in businesses
              worldwide. With a passionate team of experts, we offer strategic
              business development solutions tailored to unlock potential, drive
              success and foster enduring partnerships. Let’s embark on a
              journey of transformation together.
            </p>
            <a
              href="#hr-strategy-services"
              className="mt-5 inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-[#08b9d8] to-[#087bb7] px-7 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087bb7]"
            >
              Learn More
              <span aria-hidden="true" className="text-2xl leading-none">
                →
              </span>
            </a>
          </div>
        </div>
        <div
          id="hr-strategy-services"
          className="mx-auto max-w-[1200px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:z-10 lg:translate-y-1/2"
        >
          <HRState />
        </div>
      </section>
      <div aria-hidden="true" className="hidden h-[120px] lg:block" />
    </>
  );
};

export default HRBanner;
