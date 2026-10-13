const HRServiceBanner = () => {
  return (
    <section
      id="hr-services"
      className="relative flex min-h-[620px] items-center overflow-hidden bg-[#001b32] bg-cover bg-left bg-no-repeat px-5 py-16 sm:min-h-[680px] sm:px-8 lg:min-h-[min(760px,calc(100svh-78px))] lg:bg-center lg:px-0"
      style={{ backgroundImage: "url('/images/HR-Service.png')" }}
    >
      <div className="mx-auto w-full max-w-[1760px] lg:pl-12">
        <div className="max-w-[760px]">
          <div className="mb-4 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
            <span className="h-1 w-[74px] rounded-full bg-[#08c8ec]" />
            <span>Our Solutions</span>
          </div>
          <h1 className="text-[clamp(3rem,5.5vw,5.25rem)] leading-[0.98] font-extrabold tracking-tight text-white">
            HR <span className="text-[#08bde8]">Services</span>
          </h1>
          <p className="mt-5 max-w-[740px] text-justify text-sm leading-6 text-slate-100 sm:text-base sm:leading-7">
            A Human Resource Information System (HRIS) is a software solution
            that integrates <br />
            and manages an organization&apos;s HR processes, including employee
            data, payroll, <br />
            recruitment, benefits administration, and performance management. It streamlines <br />
            and automates HR operations, enhancing efficiency, accuracy, and data-driven <br />
            decision-making.
          </p>
          <a
            href="#hr-services-content"
            className="mt-7 inline-flex items-center gap-5 rounded-xl border border-cyan-400/60 bg-gradient-to-r from-[#087cf5] to-[#008cf0] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-950/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Learn More
            <span aria-hidden="true" className="text-2xl leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HRServiceBanner;
