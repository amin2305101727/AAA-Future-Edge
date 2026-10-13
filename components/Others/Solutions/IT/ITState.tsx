const services = [
  {
    title: "Institutional Services",
    icon: "https://i.postimg.cc/B6PYLqPK/school-1.png",
    alt: "Institution building",
  },
  {
    title: "Professional Services",
    icon: "https://i.postimg.cc/yxqf0w0r/school-2.png",
    alt: "Professional services team",
  },
  {
    title: "Opening Hours",
    icon: "https://i.postimg.cc/fyx8CBKW/school-3.png",
    alt: "Clock",
  },
];

const ITState = () => {
  return (
    <section className="bg-gradient-to-r from-[#001326] via-[#001b30] to-[#005f9c] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex min-h-[270px] flex-col items-center rounded-2xl border border-white/70 border-b-4 border-b-[#1687ff] bg-white px-6 py-7 text-center shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#08b9e8] hover:bg-[#087eb6] hover:shadow-[0_18px_36px_rgba(0,0,0,0.28)]"
          >
            <span className="flex size-[76px] items-center justify-center rounded-full bg-sky-50 transition-colors duration-300 group-hover:bg-white/15">
              <img
                src={service.icon}
                alt={service.alt}
                className="size-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </span>
            <h2 className="mt-4 text-lg font-bold text-[#102b4e] transition-colors duration-300 group-hover:text-white">
              {service.title}
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base">
              Dedicated to igniting growth and innovation in businesses
              worldwide.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ITState;
