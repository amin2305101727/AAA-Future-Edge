import Image from "next/image";
import bg from "../../../assets/banner/bgBanner.png";

const WhyChooseUs = () => {
  return (
    <div className="py-20" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="grid lg:grid-cols-2 gap-6 px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <div className="firstpart  py-10">
          <h5 className="mb-4 lg:text-4xl font-bold leading-none text-[#f58a1f]  pt-3 font-[Inter]">
            WHY CHOOSE US
          </h5>
          <p className="mb-6 text-[#626366] pt-2 text-justify font-[Inter] ">
            We tackle challenges like improving productivity, boosting employee
            morale, and streamlining recruitment, so your managers can focus on
            growth rather than daily people issues.
          </p>
          <ul className="space-y-3">
            {[
              "We have a young and energetic team.",
              "We are already dealing with complex working cultures.",
              "We’re flexible, agile, and cost-effective.",
              "We’re experienced professionals.",
              "We do more than just deliver a service.",
              "We care about your business.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#f58a1f"
                      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                    ></path>
                  </svg>
                </span>
                <p className="text-base font-semibold text-black">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="secondpart flex justify-center items-center">
          <Image
            src="/images/whychoose.avif"
            alt="Reasons to choose our service"
            width={2015}
            height={1435}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
