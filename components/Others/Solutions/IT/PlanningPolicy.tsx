const policies = [
  {
    title: "Data Privacy Policy",
    description:
      "Define how personal and sensitive data is collected, used, and protected to comply with regulations like GDPR and CCPA, ensuring user trust and legal compliance.",
    icon: "https://i.postimg.cc/sXgqMVtC/shield-1.png",
    accent: "bg-indigo-500",
  },
  {
    title: "Disaster Recovery",
    description:
      "Outline procedures for restoring IT systems and data after unexpected events, such as cyber-attacks or natural disasters, to minimize downtime and business disruption.",
    icon: "https://i.postimg.cc/4yNcC075/shield-7.png",
    accent: "bg-blue-500",
  },
  {
    title: "Cloud Strategy",
    description:
      "Develop guidelines for leveraging cloud computing, including selecting cloud service providers, managing costs, and ensuring data security and scalability.",
    icon: "https://i.postimg.cc/d3xLbVKs/shield-8.png",
    accent: "bg-emerald-500",
  },
  {
    title: "IT Governance",
    description:
      "Define how personal and sensitive data is collected, used, and protected to comply with regulations like GDPR and CCPA, ensuring user trust and legal compliance.",
    icon: "https://i.postimg.cc/3wX0kh21/shield-9.png",
    accent: "bg-rose-500",
  },
];

const PlanningPolicy = () => {
  return (
    <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-[#102b4e] sm:mb-12 sm:text-5xl">
          Privacy &amp; Policy
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((policy) => (
            <article
              key={policy.title}
              className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_28px_rgba(16,43,78,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0787b9] hover:bg-[#087eb6] hover:shadow-[0_18px_36px_rgba(8,126,182,0.2)]"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 ${policy.accent} transition-colors duration-300 group-hover:bg-[#08c2e8]`}
              />
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-sky-50 transition-colors duration-300 group-hover:bg-white/15">
                  <img
                    src={policy.icon}
                    alt=""
                    className="size-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#102b4e] transition-colors duration-300 group-hover:text-white">
                  {policy.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600 transition-colors duration-300 group-hover:text-white/90">
                  {policy.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="h-1 w-full origin-left scale-x-0 bg-[#08c2e8] transition-transform duration-300 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningPolicy;
