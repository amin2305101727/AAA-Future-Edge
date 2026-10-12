

const WhoWeAre = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-0 px-[140px] py-10 font-[Inter] max-[600px]:h-auto max-[600px]:flex-col max-[600px]:gap-[100px] max-[600px]:px-10 max-[600px]:py-[50px]">
      <div className="flex w-1/2 flex-col gap-[30px] max-[600px]:w-full max-[600px]:gap-5">
        <h4 className="text-inherit">WHO WE ARE</h4>
        <h1 className="text-[40px] text-inherit max-[600px]:text-[30px]">About Us</h1>
        <p className="text-justify leading-[1.5] text-inherit max-[600px]:text-sm">
          360D Soul Ltd. is dedicated to igniting growth and innovation in businesses worldwide. With a passionate team of experts, we offer strategic business development solutions tailored to unlock potential, drive success and foster enduring partnerships. Let’s embark on a journey of transformation together.
        </p>
       
        <p className="text-justify leading-[1.5] text-inherit max-[600px]:text-sm">
          360D SOUL is more than a business development firm, ensuring your business growth and partnership. Expertise and passion, we craft tailored solutions to elevate your business to a new heights. Let’s collaborate, innovate, and thrive together in the ever-evolving landscape of success.
        </p>

      </div>
      <div className="relative flex h-full w-1/2 flex-col items-center justify-center max-[600px]:h-[65vh] max-[600px]:w-full">
        <img className="h-[90%] w-[60%] object-cover max-[600px]:size-full" src='' />
        {/* <div className='right-box'>
          <h1>5+</h1>
          <p>Years Experience</p>
          </div> */}
      </div>
    </div>
  )
}

export default WhoWeAre