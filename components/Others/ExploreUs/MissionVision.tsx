import React from "react";
import { FaRegCompass } from "react-icons/fa6";
import { BiTargetLock } from "react-icons/bi";
import { CiStopwatch } from "react-icons/ci";
import Box from "./Box";


const OurValue = () => {
  const boxData = [
    {
      icon: <FaRegCompass />,
      title: "Mission",
      description:
        "At 360D Soul Ltd., our mission is to provide user-friendly, high-quality resourcing solutions that are trusted, dynamic, and rooted in local expertise, while simultaneously fostering a global footprint. We are committed to long-term sustainability, ensuring that our innovative platforms and services empower businesses to thrive in today's ever-evolving landscape.",
    },
    {
      icon: <BiTargetLock />,
      title: "Vision",
      description:
        "360D Soul Ltd. is to be the premier Sourcing & Organizational Development (OD) platform, setting the standard for excellence in our industry worldwide. We aspire to empower organizations with cutting-edge solutions that optimize their resources and foster organizational development, driving success and innovation in the global marketplace.",
    },
    {
      icon: <CiStopwatch />,
      title: "Value",
      description:
        "360D Soul Ltd. offers comprehensive, cost-effective solutions for businesses of all types, from established enterprises to emerging startups. Our commitment to ethical and socially responsible practices ensures that our services not only boost profitability but also contribute positively to society. We empower companies to grow sustainably and make a meaningful impact on the world.",
    },
  ];

  return (
<div className=" px-4 lg:container lg:mx-auto lg:max-w-[1300px] mt-20 mb-20">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

  <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
    className="h-72"
      src="https://t4.ftcdn.net/jpg/01/18/29/75/360_F_118297595_HqY9fjLZKO1CiDJbwfXYiL7gl43GDg8K.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Mission</h2>
    <p className="text-justify">Our mission is to design and execute organizational development programs that produce high
    level of human performance in your organization.</p>
   
  </div>
</div>

<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
    className="h-72"
      src="https://technoapogee.com/public/image/about-us/mission-vission/vission.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Vision</h2>
    <p>We envision in building trust through sustainable human capital.</p>
   
  </div>
</div>

<div className="card bg-base-100 shadow-xl">
  <figure>
    <img
    className="h-72"
      src="https://img.freepik.com/premium-photo/business-man-hand-holding-wooden-cube-block-with-value-business-word-table-background-mission-vision-core-values-concept_42256-4641.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Values</h2>
    <p>
    Our core values drive everything what and how we do: <br />
<span><b>T</b>rust: We believe in the reliability and truth</span> <br />
<span><b>O</b>pen: We see the world as alive, dynamic and full of opportunity</span> <br />
<span><b>D</b>oer: We are focused to our commitment and get it done</span> <br />
<span><b>O</b>ptimistic: We are hopeful and confident about the future</span>
    </p>
  </div>
</div>
  </div>
</div>
  );
};

export default OurValue;