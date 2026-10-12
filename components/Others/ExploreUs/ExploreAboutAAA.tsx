import { FaLinkedin } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";

const ExploreAboutAAA = () => {
  return (
    <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] mt-10">
      <div>
        <section className="">
          <div className="">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 ">
              <div className="relative ">
                <div className="relative w-full h-full max-w-lg mt-4 mb-10 ">
                  <img
                    className="ml-auto rounded-xl hover:scale-110 transition duration-300 border"
                    src="https://i.postimg.cc/PxS9hdLQ/5b474261-2cdb-452b-8bec-0e226be38503.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-3xl font-bold leading-tight bg-[#f58a1f] bg-clip-text text-transparent sm:text-4xl lg:text-5xl mb-4">
                  Mr. Riad Mahmud.
                </h2>

                <div className="text-justify text-2xl">
                  <p>
                    <strong> Mr. Mahmud </strong> is a seasoned HR professional
                    with extensive experience across corporate and factory
                    settings. As CEO and Lead Consultant at AAA Future-Edge, he
                    specializes in aligning company vision and values with
                    actionable goals, leading projects focused on team building
                    and organizational development. Previously, he held HR
                    leadership roles at Zuellig Pharma, Field Nation, JITA
                    Social Business, pro-edge associates, and BURO Bangladesh.
                    Known for his expertise in KPI formation, SOP development,
                    performance management, and leadership training.
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/riadmahmud/"
                  target="_blank"
                  className="relative mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#f58a1f] transition duration-300 ease-out border-2 border-[#f58a1f] hover:border-none rounded-lg shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#f58a1f] group-hover:translate-x-0 ease">
                    <FaLinkedin className="w-6 h-6"></FaLinkedin>
                  </span>
                  <span className="absolute flex text-lg items-center justify-center w-full h-full text-[#f58a1f] transition-all duration-300 transform group-hover:translate-x-full ease">
                    LinkedIn
                    <IoArrowRedo className="ml-2" />
                  </span>
                  <span className="relative invisible"> LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreAboutAAA;
