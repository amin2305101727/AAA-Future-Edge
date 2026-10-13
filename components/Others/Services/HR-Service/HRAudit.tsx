const HRAudit = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-20 size-80 rounded-full bg-orange-100/60 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-[#f47716]">
            <span>Our HR Solutions</span>
            <span className="h-px w-10 bg-[#f47716]" />
          </div>
          <h2 className="text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.02] font-extrabold tracking-tight text-[#102b4e]">
            HR Audit
          </h2>
          <span
            aria-hidden="true"
            className="mt-4 block h-1.5 w-16 rounded-full bg-[#f47716]"
          />
          <p className="mt-5 max-w-[680px] text-justify text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            An HR audit is a comprehensive assessment of an organization&apos;s
            human resources policies, practices, and procedures to ensure legal
            compliance, operational efficiency, and alignment with strategic
            goals. It involves evaluating areas such as recruitment, training,
            performance management, and employee relations to identify
            strengths, weaknesses, and opportunities for improvement.
          </p>
          <p className="mt-4 max-w-[680px] text-justify text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            An HR audit is a comprehensive assessment of an organization&apos;s
            human resources policies, practices, and procedures to ensure legal
            compliance, operational efficiency, and alignment with strategic
            goals. It involves evaluating areas such as recruitment, training,
            performance management, and employee relations to identify
            strengths, weaknesses, and opportunities for improvement.
          </p>

        </div>

        <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
          <span
            aria-hidden="true"
            className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[30px] bg-[#ff861d] sm:-left-6 sm:-top-6"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-28 w-28 rounded-br-[30px] bg-blue-100 sm:-bottom-6 sm:-right-6"
          />
          <div className="group relative overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_22px_55px_rgba(16,43,78,0.18)] ring-1 ring-blue-100">
            <img
              src="/images/HR-Audit.png"
              alt="HR professionals reviewing audit findings together"
              className="aspect-[1.16/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRAudit;
