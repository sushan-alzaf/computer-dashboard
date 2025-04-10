"use client";
import { RadioFullIcon, RadioIcon } from "@/app/assets/icons/icons";
import React from "react";

export default function RightProgress({ data, active }: any) {
  return (
    <div>
      <h2 className="text-[#1D2939] text-[18px] font-medium mb-[24px] (--font-family-Inter)">
        Ducomment Submit Progress
      </h2>
      <div className="flex flex-col gap-[24px]">
        {data.map((item) => (
          <div className="flex flex-col gap-[24px]" key={item.id}>
            <div className="flex gap-[10px]">
              <div className="relative">
                <span>
                  <RadioIcon />{" "}
                </span>
                <span className={`absolute top-0 left-0 ${active==item.id?'':'hidden'}`}><RadioFullIcon/> </span>
                <div className={`bg-[#F97316] h-[26px] absolute bottom-[-25px] left-[11px] w-[2px]  ${item.id==7?'h-[0px] hidden':''}`}></div>
              </div>
              <div>
                <h3>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
