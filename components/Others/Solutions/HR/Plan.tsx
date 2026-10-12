import Image from "next/image";
import icon4 from "../../../../assets/HRStratigy/icon4.png";
import icon5 from "../../../../assets/HRStratigy/icon5.png";
import icon6 from "../../../../assets/HRStratigy/icon6.png";

const Plan = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#011423] via-[#032b48] to-[#012e50] py-20">
      <h2 className="text-3xl lg:text-5xl text-[#0075d1] font-bold text-center mb-10">
        HR PLAN & STRATEGY
      </h2>
      <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <img
          src="https://i.postimg.cc/X7nXZ56H/Whats-App-Image-2021-12-02-at-12-54-27-AM-1.jpg"
          alt="HR Plan and Strategy"
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000cc] via-[#00000080] to-transparent p-4">
          <h3 className="text-xl lg:text-2xl text-white font-semibold">
            Transform Your HR Strategy Today
          </h3>
          <p className="text-sm lg:text-base text-gray-300">
            Empower your organization with innovative HR solutions tailored for
            success.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-32 bg-[#2b4055] text-white p-5 rounded-2xl mt-10">
        <div className="flex items-center gap-3">
          <Image className="w-10" src={icon4} alt="Customizable Icon" />
          <h4 className="font-bold">
            Strategic Planning, <br /> Tailored to Your Needs
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <Image className="w-10" src={icon5} alt="Ready-to-Launch Icon" />
          <h4 className="font-bold">
            Easy to Implement, <br /> Designed for Success
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <Image className="w-10" src={icon6} alt="Effective Strategy Icon" />
          <h4 className="font-bold">
            Data-Driven Insights, <br /> For Optimized Results
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Plan;
