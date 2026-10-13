import Image from "next/image";
import icon1 from "../../../../assets/HRStratigy/icon1.png";
import icon2 from "../../../../assets/HRStratigy/icon2.png";
import icon3 from "../../../../assets/HRStratigy/icon3.png";

const HRState = () => {
  return (
    <div className="mx-auto w-full px-0 sm:px-4">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white/95 shadow-[0_16px_40px_rgba(15,63,100,0.18)] md:grid-cols-3">
        {/* Card 1 */}
        <div className="group flex cursor-pointer flex-col items-center px-5 py-5 text-center transition-colors hover:bg-sky-50/70 sm:px-8 sm:py-6 md:border-r md:border-slate-200">
          <div className="flex size-[72px] items-center justify-center rounded-full bg-sky-50">
            <Image className="w-12" src={icon1} alt="" />
          </div>

          <p className="mt-2 text-lg font-bold text-[#102b4e]">
            Institutional Services
          </p>
          <p className="mt-1 max-w-[340px] text-sm leading-5 text-slate-600">
            Dedicated to igniting growth and innovation in businesses worldwide.
          </p>
          <span className="mt-3 h-0.5 w-10 rounded-full bg-[#08b9d8]" />
        </div>

        {/* Card 2 */}
        <div className="group flex cursor-pointer flex-col items-center px-5 py-5 text-center transition-colors hover:bg-sky-50/70 sm:px-8 sm:py-6 md:border-r md:border-slate-200">
          <div className="flex size-[72px] items-center justify-center rounded-full bg-sky-50">
            <Image className="w-12" src={icon2} alt="" />
          </div>
          <p className="mt-2 text-lg font-bold text-[#102b4e]">
            Professional Services
          </p>
          <p className="mt-1 max-w-[340px] text-sm leading-5 text-slate-600">
            Dedicated to igniting growth and innovation in businesses worldwide.
          </p>
          <span className="mt-3 h-0.5 w-10 rounded-full bg-[#08b9d8]" />
        </div>

        {/* Card 3 */}
        <div className="group flex cursor-pointer flex-col items-center px-5 py-5 text-center transition-colors hover:bg-sky-50/70 sm:px-8 sm:py-6">
          <div className="flex size-[72px] items-center justify-center rounded-full bg-sky-50">
            <Image className="w-12" src={icon3} alt="" />
          </div>
          <p className="mt-2 text-lg font-bold text-[#102b4e]">
            Opening Hours
          </p>
          <p className="mt-1 max-w-[340px] text-sm leading-5 text-slate-600">
            Dedicated to igniting growth and innovation in businesses worldwide.
          </p>
          <span className="mt-3 h-0.5 w-10 rounded-full bg-[#08b9d8]" />
        </div>
      </div>
    </div>
  );
};

export default HRState;
