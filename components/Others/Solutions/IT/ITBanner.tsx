const ITBanner = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#001326] via-[#001b30] to-[#005f9c]"
      id="it-strategy"
    >
      <div className="px-4 pb-20 pt-14 sm:px-6 lg:container lg:mx-auto lg:max-w-[1300px] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="lg:pr-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#05c4eb]" />
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300 sm:text-sm">
                Strategy &amp; Innovation
              </span>
            </div>
            <h1 className="text-[clamp(3.5rem,7vw,5.5rem)] leading-[0.98] font-extrabold tracking-tight text-white">
              IT <span className="text-[#08b9e8]">Strategy</span>
            </h1>
            <p className="mt-5 mb-6 max-w-[700px] text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Dedicated to igniting growth and innovation in businesses
              worldwide. With a passionate team of experts, we offer strategic
              business development solutions tailored to unlock potential and
              drive sustainable success.
            </p>
            <a
              href="#it-strategy-services"
              className="inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-[#08bfdc] to-[#0878bd] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-950/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#08b9e8]"
            >
              Learn More
              <span aria-hidden="true" className="text-2xl leading-none">
                →
              </span>
            </a>
          </div>

          <div>
            <img
              className="h-56 w-full rounded-xl object-cover shadow-lg sm:h-96"
              src="https://i.postimg.cc/XY9QbQVC/Pngtree-marketing-strategy-campaign-concept-with-7537111-1.png"
              alt="IT strategy planning and digital marketing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITBanner;
