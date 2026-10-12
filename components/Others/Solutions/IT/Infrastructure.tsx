import Image from "next/image";
import infrastructure from "../../../../assets/Infrastructure/Infrastructure.png";
const Infrastructure = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-[#00000b] via-[#000c2a] to-[#002550] py-14 font-[Inter]">
      <div className=" px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <h1 className="text-center text-3xl lg:text-5xl font-bold pb-10 text-gray-200">
          IT INFRASTRUCTURE
        </h1>
        <Image
          src={infrastructure}
          width={infrastructure.width}
          height={infrastructure.height}
          sizes="(min-width: 1024px) 1000px, 100vw"
          alt="infrastructure"
        />
      </div>
    </div>
  );
};

export default Infrastructure;
