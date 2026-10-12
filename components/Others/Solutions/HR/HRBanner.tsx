import Image from "next/image";
import img1 from "../../../../assets/HRStratigy/img.png";
import bannerImage from "../../../../assets/HRStratigy/HRBanner.png";
import HRState from "./HRState";

const HRBanner = () => {
  return (
    <div className="relative isolate overflow-hidden" id="hr-strategy">
      <div className="relative isolate">
        <Image
          src={bannerImage}
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 size-full object-cover object-center"
        />
        <div className="relative z-10 px-4 lg:container lg:mx-auto">
          <div className="grid lg:grid-cols-2 items-center pt-10 lg:pt-28">
            <div className="">
              <h5 className="mb-4 text-3xl lg:text-6xl font-bold text-white">
                HR Strategy
              </h5>
              <p className="mb-6 text-white max-w-[600px]">
                Dedicated to igniting growth and innovation in businesses
                worldwide. With a passionate team of experts, we offer strategic
                business development solutions tailored to unlock potential,
                drive success and foster enduring partnerships. Let’s embark on
                a journey of transformation together.
              </p>
              <button className="btn text-white bg-[#00B4D8]">
                Learn More
              </button>
            </div>

            <div className="pt-20 ">
              <Image
                src={img1}
                width={img1.width}
                height={img1.height}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className=""
                alt="Marketing Strategy"
              />
            </div>
          </div>
        </div>
        <HRState />
      </div>
    </div>
  );
};

export default HRBanner;
