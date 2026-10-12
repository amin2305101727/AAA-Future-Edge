import About from "./About/About";
import Goal from "./Goal/Goal";
import Hero from "./Hero/Hero";
import HRConsultancy from "../HR/HRConsultancy";
import WhyChooseUs from "./Our Clients/WhyChooseUs";
import ClientLogoCarousel from "./NewClient/NewClient";
const Root = () => {
  return (
    <div>
      <Hero />
      <Goal />
      <About />
      <HRConsultancy />
      <WhyChooseUs />
      <ClientLogoCarousel />
    </div>
  );
};

export default Root;
