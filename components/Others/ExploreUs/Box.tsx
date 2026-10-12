import React from 'react'
import type { ReactNode } from "react";

type BoxProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Box = ({icon, title, description}: BoxProps) => {
  return (
      <div className="flex gap-[15px] text-white max-[600px]:flex-col max-[600px]:items-center">
          <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(to_right,#000F1A_0%,#000F1A_50%,#0077D5_100%)] text-2xl">
          {icon}
          </div>
          <div className="flex flex-col gap-[10px] max-[600px]:items-center">
            <h3 className="mt-[10px] text-2xl font-normal max-[600px]:text-lg">{title}</h3>
            <p className="leading-[1.5] max-[600px]:text-center max-[600px]:text-sm">{description}</p>
          </div>
        </div>
  )
}

export default Box