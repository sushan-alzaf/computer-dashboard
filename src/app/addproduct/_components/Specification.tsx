import React, { useState } from "react";
import HeadTitle from "./HeadTitle";
import {
  DeleteIconTwo,
  NonPlusIcon,
  PenIcon,
  PlusIcon,
} from "@/app/assets/icons/icons";
import { InputAdd } from "./InputAdd";
import { SelectCom } from "./SelectCom";

export default function Specification() {
  const [rows, setRows] = useState<number[]>([0]);
  const [items, setItems] = useState<number[]>([0]);
  const handleAddRow = () => {
    setRows((PrevRows) => [...PrevRows, PrevRows.length]);
  };

  const handleDeleteRow = (index: number) => {
    setRows((PrevRows) => rows.filter((row, rowIndex) => rowIndex !== index));
  };
  const handleAddItemRow = () => {
    setItems((PrevItems) => [...PrevItems, PrevItems.length]);
  };
  return (
    <div className="bg-white p-5 rounded-[14px] mt-5">
      <HeadTitle
        title={"Specification"}
        description={
          "Filling in the required fields is crucial when adding products in the product editing section."
        }
      />
      <div className="mt-5 flex flex-col gap-[40px]">
        {items.map((_, index) => (
          <div className="" key={index}>
            <div className="flex justify-between gap-5 ">
              <div className="flex w-full items-center bg-[#F2F4F7] px-[14px] rounded-[8px] ">
                <div className="w-36 ">
                  <input
                    type="text"
                    className="outline-none border-none"
                    style={{background:"none"}}
                    value={"Basic Information"}
                  />
                </div>
                <div className="w-full">
                  <span>
                    <PenIcon />
                  </span>
                </div>
              </div>
              <button
                onClick={handleAddItemRow}
                className="text-[#F97316] text-sm font-medium leading-5 (--font-family-Inter) border border-[#F97316] px-[14px] py-[10px] w-[121px] h-[40px] flex items-center justify-center gap-[8px] rounded-[8px]"
              >
                {" "}
                <span>
                  <PlusIcon />
                </span>
                Add Row
              </button>
            </div>
            <div>
              {rows.map((_, index) => (
                <div key={index} className=" mt-5">
                  <div className="flex gap-6">
                    <div className="w-1/4">
                      <SelectCom />
                    </div>
                    <div className="w-3/4">
                      <InputAdd pleaseHol={"Details"} />
                    </div>
                    <div className="w-[120px] flex items-center justify-center">
                      <button onClick={() => handleDeleteRow(index)}>
                        <DeleteIconTwo />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex gap-6 mt-[40px]">
                <button
                  onClick={handleAddRow}
                  className="border  border-dashed rounded-2 w-full flex items-center justify-center text-[#98A2B3] text-sm font-medium leading-5 gap-2 py-[10px] px-[14px]"
                >
                  <span>
                    <NonPlusIcon />
                  </span>{" "}
                  Add Row{" "}
                </button>
                <div className="w-[120px]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
