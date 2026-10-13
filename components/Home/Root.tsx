import About from "./About/About";
import Goal from "./Goal/Goal";
import Hero from "./Hero/Hero";
import HRConsultancy from "../HR/HRConsultancy";
import WhyChooseUs from "./Our Clients/WhyChooseUs";
import ClientLogoCarousel from "./NewClient/NewClient";
const Root = () => {
  return (
    <div>
      <div className="relative">
        <Hero />
        <div className="relative z-10">
          <Goal />
        </div>
      </div>
      <About />
      <HRConsultancy />
      <WhyChooseUs />
      <ClientLogoCarousel />
    </div>
  );
};

export default Root;
