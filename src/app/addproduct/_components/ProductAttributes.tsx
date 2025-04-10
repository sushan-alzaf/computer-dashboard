import React from "react";
import HeadTitle from "./HeadTitle";
import { SelectCom } from "./SelectCom";
import { CheckBoxCom } from "./CheckBoxCom";

export default function ProductAttributes() {
  return (
    <div className="bg-white p-5 rounded-[14px] mt-5">
      <HeadTitle
        title={"Product Attributes"}
        description={
          "Filling in the required fields is crucial when adding products in the product editing section."
        }
      />
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="w-full flex flex-col gap-2">
          <label
            className="text-sm text-[#475467] font-medium leading-5 (--font-family-Inter)"
            htmlFor=""
          >
            Brand*
          </label>
          <SelectCom />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            className="text-sm text-[#475467] font-medium leading-5 (--font-family-Inter)"
            htmlFor=""
          >
            SKU*
          </label>
          <SelectCom />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            className="text-sm text-[#475467] font-medium leading-5 (--font-family-Inter)"
            htmlFor=""
          >
            Warranty Type
          </label>
          <SelectCom />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            className="text-sm text-[#475467] font-medium leading-5 (--font-family-Inter)"
            htmlFor=""
          >
            Region*
          </label>
          <SelectCom />
        </div>
        <div className="w-full flex flex-col gap-2 mt-[28px]">

          <div className="border px-[12px] py-[8px] rounded-[8px]">
          <CheckBoxCom title={'EMI Payment'}/>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 mt-[28px]">
          <div className="border px-[12px] py-[8px] rounded-[8px]">
          <CheckBoxCom title={'Exchange Offer'}/>
          </div>
        </div>

      </div>
    </div>
  );
}
