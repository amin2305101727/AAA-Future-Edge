import Link from "next/link";
const About = () => {
  return (
    <div className="about bg-gradient-to-r from-white from-10% via-[#e8e9ea] via-30% to-white to-90% ">
      <div className="px-4 lg:container lg:mx-auto max-w-[1300px] py-10 lg:py-20">
        <div className="p-5 lg:p-[50px] rounded-md glass grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          <img src="https://i.postimg.cc/yd3qY7WH/Whats-App-Image-2022-03-16-at-9-58-23-AM.jpg" className="rounded-lg"alt="" />
          <div className="mx-0 lg:mx-10">
            <h1 className=" hidden lg:block lg:text-4xl  font-[Inter] flex flex-col my-8">
              <span className="font-bold">AAA Future-Edge is a</span>
              <span className="bg-clip-text text-[#f58a1f]"> Management Consulting</span>
              <span className="font-bold"> Firm</span>
            </h1>
            <h1 className="block lg:hidden text-2xl  my-4  font-[Inter]  ">
              <span className="font-bold">AAA Future-Edge is a </span>
              <span className="bg-clip-text text-[#f58a1f]"> Management Consulting</span>
              <span className="font-bold"> Firm</span>
            </h1>
            <p className="text-[#4C4C4C] font-[24px] font-[Inter] text-justify">
            Specializing in HR solutions that align with a company&apos;s mission and strategic vision. Our expertise spans across key HR functions, including talent acquisition, 
            leadership development, and performance management, ensuring seamless integration with overarching business strategies. 
            </p>
            <Link href="/explore">
              <span className="inline-block font-semibold bg-[#f58a1f] text-white px-10 py-3 mt-3 lg:mt-8 rounded-md">
                About Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
