const securityFeatures = [
  {
    title: "Comprehensive Threat Detection",
    description:
      "Integrates multiple security tools to identify and respond to threats across various attack vectors.",
    icon: "https://i.postimg.cc/RZycYfrD/Rectangle-114.png",
    alt: "Threat detection icon",
  },
  {
    title: "Unified Policy Management",
    description:
      "Centralizes security policy enforcement across the entire IT environment, ensuring consistency and reducing management complexity.",
    icon: "https://i.postimg.cc/1zFp1ts5/Rectangle-115.png",
    alt: "Security policy icon",
  },
  {
    title: "Automated Incident Response",
    description:
      "Utilizes automation to swiftly react to security incidents, minimizing potential damage and reducing response time.",
    icon: "https://i.postimg.cc/P5PWKy7D/Rectangle-116.png",
    alt: "Incident response icon",
  },
];

const Security = () => {
  return (
    <section
      className="overflow-hidden bg-[#031a32] bg-cover bg-center bg-no-repeat py-14 font-[Inter] sm:py-16 lg:py-20"
      style={{ backgroundImage: "url('/images/Integrated-Security.png')" }}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/3rk38DzB/Pngtree-cyber-security-system-technology-landing-14868800-1.png"
            alt="Integrated cybersecurity protection platform"
            className="h-auto w-full max-w-[620px] object-contain"
            loading="lazy"
          />
        </div>

        <div>
          <span
            aria-hidden="true"
            className="mb-5 block h-1.5 w-16 rounded-full bg-gradient-to-r from-[#08c9ec] to-[#1678ff]"
          />
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Integrated <span className="text-[#08c9ec]">Security</span>
          </h2>

          <div className="mt-8">
            {securityFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className={`flex items-start gap-5 py-5 sm:gap-6 ${
                  index < securityFeatures.length - 1
                    ? "border-b border-cyan-300/15"
                    : ""
                }`}
              >
                <div className="flex size-[76px] shrink-0 items-center justify-center rounded-2xl border border-cyan-200/15 bg-[#092544]/70 p-3.5 shadow-inner shadow-cyan-400/5">
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold leading-6 text-white sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
