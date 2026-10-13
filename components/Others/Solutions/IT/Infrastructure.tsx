import Image from "next/image";
import infrastructure from "../../../../assets/Infrastructure/Infrastructure.png";
const Infrastructure = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-[#001326] via-[#001b30] to-[#005f9c] py-14 font-[Inter]">
      <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <header className="mb-8 text-center sm:mb-10">
          <div className="mb-4 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-[#08b9e8] sm:text-base">
            <span className="h-px w-10 bg-[#08b9e8] sm:w-12" />
            <span>Our Expertise</span>
            <span className="h-px w-10 bg-[#08b9e8] sm:w-12" />
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-tight font-bold tracking-wide text-white">
            IT <span className="text-[#08b9e8]">Infrastructure</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Building secure, scalable, and high-performance IT infrastructure
            to support your business growth.
          </p>
        </header>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={infrastructure}
            width={infrastructure.width}
            height={infrastructure.height}
            sizes="(min-width: 1024px) 1000px, 100vw"
            alt="infrastructure"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
