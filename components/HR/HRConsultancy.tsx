const HRConsultancy = () => {
  return (
    <div className="bg-white font-[Inter]">
      <div className="lg:container lg:mx-auto  py-6 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Image */}
          <div className="w-full">
            <img
              src="https://i.postimg.cc/ZRJXPJYS/111_(3).jpg"
              alt="HR Consultancy"
              className="w-full min-h-[400px] justify-center rounded-lg mt-10 "
            />
          </div>

          {/* Right Text */}
          <div className="w-full ">
            <h2 className="lg:text-4xl font-bold  text-[#f58a1f] pt-4 mb-8">
              Why Organizations Need HR Consultancy
            </h2>
            <p className="text-justify">
              Organizations need HR consultancy to tackle critical challenges
              that impede growth and employee satisfaction. Misalignment between
              a company’s vision and employees&apos; career objectives can lead
              to disengagement, while ineffective performance management fails
              to drive results. Undefined succession planning and a lack of
              alignment in leadership with growth strategies further hinder
              progress. <br />
              <br />
              Additionally, excessive focus on people issues distracts from core
              business growth, and managers may find themselves bogged down in
              meetings instead of leading effectively. Low morale, increased
              absenteeism, and declining customer satisfaction can exacerbate
              recruitment challenges, leading to talent loss. <br />
              <br />
              By seeking HR consultancy, organizations can streamline processes,
              resolve staff issues efficiently, and manage legal concerns,
              ultimately fostering a thriving, engaged workforce aligned with
              their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRConsultancy;
