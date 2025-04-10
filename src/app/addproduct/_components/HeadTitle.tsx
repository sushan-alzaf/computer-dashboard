import React from "react";

type TheadMain = {
  title: string;
  description: string;
};
export default function HeadTitle({ title, description }: TheadMain) {
  return (
    <div className="flex flex-col gap-[10px]">
      <h3 className="text-[#1D2939] text-[18px] font-medium (--font-family-Inter) leading-[28px]">
        {title}
      </h3>
      <p className="text-sm font-normal leading-5 text-[#475467] (--font-family-Inter)">
        {description}
      </p>
    </div>
  );
}
