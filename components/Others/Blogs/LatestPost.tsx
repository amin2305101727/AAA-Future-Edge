import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const LatestPost = () => {
  const postData = [
    {
      src: 'https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png',
      title: "Shining a Light on Panic Attacks: Awareness and Recovery",
      date: "17 August 2024",
    },
    {
      src: 'https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png',
      title: "How To Overcome Social Anxiety: 9 Proven Steps for Success",
      date: "16 August 2024",
    },
    {
      src: 'https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png',
      title: "10 Powerful Tips To Overcome Depression: Embrace A Happier Life",
      date: "15 August 2024",
    },
    {
      src: 'https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png',
      title: "How to Tackle Frustration Like a Pro: Mastering Your Mindset",
      date: "14 August 2024",
    },
  ];

    const cateData = [
        {
            t1: "Therapy",
        },
        {
            t1: "Psychologists",
        },
        {
            t1: "Love",
        },
        {
            t1: "Depression",
        },
        {
            t1: "Anxiety",
        },
    ];
  return (
    <div className="flex flex-col shadow-[0_5px_20px_rgba(0,0,0,0.2)] font-[Inter]">
      <h3 className="p-[30px] text-[30px] font-normal text-inherit max-[600px]:text-center max-[600px]:text-[25px]">
        Latest Post
      </h3>
      <div className="flex flex-col items-center justify-center gap-5 px-[30px]">
        {postData.map((item, index) => (
          <div
            className="group flex cursor-pointer items-center justify-center gap-5"
            key={index}
          >
            <div className="h-[60px] w-[200px] shrink-0">
              <img className="size-full object-cover" src={item.src} alt={item.title} />
            </div>
            <div className="flex flex-col gap-[10px] py-[10px]">
              <p className="text-[15px] font-semibold text-inherit transition-all duration-300 group-hover:text-[var(--color-green)]">
                {item.title}
              </p>
              <div className="flex gap-[6px] text-[13px] text-[#8f8f8f]">
                <FaRegCalendar />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="p-[30px] text-[30px] font-normal text-inherit max-[600px]:text-center max-[600px]:text-[25px]">
          Categories
        </h3>

        <div className="flex flex-col gap-2 px-[30px] pb-[30px]">
          {cateData.map((item, index) => (
            <div
              className="flex font-semibold text-inherit hover:text-[var(--color-orange)]"
              key={index}
            >
              <MdKeyboardArrowRight className="text-[19px] font-black" />
              <span className="cursor-pointer hover:text-[var(--color-green)]">
                {item.t1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="group relative flex h-full w-full flex-col items-start justify-end gap-5 overflow-hidden bg-[#15135d] bg-cover p-[30px] text-white before:absolute before:inset-0 before:bg-[rgba(21,19,93,0.5)] before:transition-all before:duration-500 before:content-[''] hover:before:bg-[rgba(21,19,93,1)]">
        <span className="relative z-[2] font-semibold tracking-[3px] transition-transform duration-[900ms] group-hover:-translate-y-5">
          NEED HELP?
        </span>
        <p className="relative z-[2] text-[24px] leading-[1.5] tracking-[1.5px] transition-transform duration-[600ms] group-hover:-translate-y-5">
          Get The Support You Need From One Of Our Therapists
        </p>
        <button className="relative z-[2] rounded-none border-2 border-white bg-transparent px-5 py-2.5 text-white transition-transform duration-300 group-hover:-translate-y-5">
          Conatct Us
        </button>
      </div>
    </div>
  );
};

export default LatestPost;