import React from "react";
import { SelectCom } from "./SelectCom";
import HeadTitle from "./HeadTitle";

export default function Sammary() {
  return (
    <div className="bg-white p-5 rounded-[14px] mt-5">
        <HeadTitle title={'Summary'} description={'Filling in the required fields is crucial when adding products in the product editing section.'} />
      <div className="mt-5">
        <h2 className="text-[#1D2939] text-sm font-medium leading-5 mb-[14px]">
          Product Name*
        </h2>
        <form action="">
          <div className="flex flex-col gap-5">
            <div className="w-full flex border-[1px] border-[#D0D5DD] gap-[14px] rounded-[8px]">
              <label
                htmlFor=""
                className="bg-[#F2F4F7] w-[100px] rounded-l-[8px] border-r-[1px] h-[41px] flex justify-center p-[10px] text-[#475467] text-sm font-normal leading-5"
              >
                English
              </label>
              <input
                className="w-full rounded-r-[8px] border-none outline-none"
                type="text"
                placeholder="Ex. Nikon Coolpix A300 Digital Camera"
              />
            </div>
            <div className="w-full flex border-[1px] border-[#D0D5DD] gap-[14px] rounded-[8px]">
              <label
                htmlFor=""
                className="bg-[#F2F4F7] w-[100px] rounded-l-[8px] border-r-[1px] h-[41px] flex justify-center p-[10px] text-[#475467] text-sm font-normal leading-5"
              >
                Bengali
              </label>
              <input
                className="w-full rounded-r-[8px] border-none outline-none"
                type="text"
                placeholder="Ex. Nikon Coolpix A300 Digital Camera"
              />
            </div>
            <div className="flex items-center w-full gap-4">
              <div className="w-full flex flex-col gap-2">
                <label
                  className="text-sm text-[#475467] font-medium leading-5 (--font-family-Inter)"
                  htmlFor=""
                >
                  Select Parent Category*
                </label>
                <SelectCom />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label
                  className="text-sm text-[#475467] font-medium leading-5 (--font-family-Inter)"
                  htmlFor=""
                >
                  Select Sub Category*
                </label>
                <SelectCom />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label
                  className="text-sm text-[#475467] font-medium leading-5 (--font-family-Inter)"
                  htmlFor=""
                >
                  Select S. Sub Category*
                </label>
                <SelectCom />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
