
import Image from "next/image";
import {
  FaArrowTrendUp,
  FaBullseye,
  FaPeopleGroup,
} from "react-icons/fa6";

const benefits = [
  {
    icon: FaArrowTrendUp,
    title: "Overcome Challenges",
    description: "Solve people and process issues",
  },
  {
    icon: FaPeopleGroup,
    title: "Build Engagement",
    description: "Motivate and retain top talent",
  },
  {
    icon: FaBullseye,
    title: "Drive Growth",
    description: "Align people strategy with business goals",
  },
];

const HRConsultancy = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#fcfcfd] py-14 sm:py-20 lg:py-24">
      {/* Soft Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-20 -z-10 h-80 w-80 rounded-full bg-orange-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl"
      />

      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* LEFT: Clean Image */}
          <div className="relative mx-auto w-full max-w-[800px] lg:mx-0">
            <div className="relative">
              <div className="relative aspect-[1.48/1] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_18px_45px_rgba(15,35,65,0.12)] sm:rounded-3xl">
                <Image
                  src="https://i.postimg.cc/ZRJXPJYS/111_(3).jpg"
                  alt="HR consultancy workshop with professionals attending a training session"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="min-w-0">
            {/* Accent Line */}
            <div className="mb-5">
              <span className="block h-1 w-12 rounded-full bg-[#ff7900]" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#102d61] sm:text-5xl xl:text-[3.25rem]">
              <span className="block">Why Organizations Need</span>
              <span className="mt-1 block text-[#ff7900]">
                HR Consultancy
              </span>
            </h2>

            {/* Justified Paragraphs */}
            <div className="mt-6 space-y-4 text-justify text-[15px] leading-[1.7] text-[#596579] sm:mt-7 sm:text-base xl:text-[17px]">
              <p>
                Organizations need HR consultancy to tackle critical
                challenges that impede growth and employee satisfaction.
                Misalignment between a company&apos;s vision and
                employees&apos; career objectives can lead to disengagement,
                while ineffective performance management fails to drive
                results. Undefined succession planning and a lack of
                alignment in leadership with growth strategies further
                hinder progress.
              </p>

              <p>
                Additionally, excessive focus on people issues distracts
                from core business growth, and managers may find themselves
                bogged down in meetings instead of leading effectively.
                Low morale, increased absenteeism, and declining customer
                satisfaction can exacerbate recruitment challenges,
                leading to talent loss.
              </p>

              <p>
                By seeking HR consultancy, organizations can streamline
                processes, resolve staff issues efficiently, and manage
                legal concerns, ultimately fostering a thriving, engaged
                workforce aligned with their goals.
              </p>
            </div>
          </div>
        </div>

        {/* Three Benefit Cards */}
        <div className="mx-auto mt-10 grid max-w-[1180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex min-h-[112px] items-center gap-4 rounded-2xl border border-orange-100/80 bg-gradient-to-br from-[#fff8f2] to-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 sm:px-6"
            >
              {/* Icon */}
              <div className="flex size-[66px] shrink-0 items-center justify-center rounded-2xl bg-[#fff0e2] text-[#ff7900] transition-colors duration-300 group-hover:bg-[#ff7900] group-hover:text-white">
                <Icon className="text-[34px]" />
              </div>

              {/* Card Text */}
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold leading-5 text-[#102d61] sm:text-base">
                  {title}
                </h3>

                <p className="mt-1.5 text-sm leading-5 text-[#647087]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRConsultancy;