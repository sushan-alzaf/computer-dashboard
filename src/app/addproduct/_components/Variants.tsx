import React, { useState } from "react";
import { SwitchCom } from "./SwitchCom";
import { SelectCom } from "./SelectCom";
import { DeleteIcon, PlusIcon } from "@/app/assets/icons/icons";
import TableCom from "./TableCom";

export default function Variants() {
  const [rows,setRows] =useState<number[]>([0])
  const [openTable,setOpenTable] = useState<boolean>(false)

  const handleAddRow =()=>{
    setRows((PrevRows)=> [...PrevRows , PrevRows.length])
  }
  const handleDeleteRows =(index:number)=>{
    setRows((PrevRows)=>PrevRows.filter((row,rowIndex)=>rowIndex !==index))
  }
  const handleSwitch =()=>{
    setOpenTable((prev)=>!prev)
  }
  console.log(openTable)
  return (
    <div className="  bg-white p-5 rounded-[14px] mt-5">
      <div className="flex flex-col gap-[10px]">
        <h3 className="flex items-center gap-3 text-[#1D2939] text-[18px] font-medium leading-[28px] (--font-family-Inter)">
          Variants{" "}
          <span>
            <SwitchCom handleSwitch={handleSwitch} />{" "}
          </span>{" "}
        </h3>
        <p className="text-sm  font-normal leading-5 (--font-family-Inter) ">
          Filling in the required fields is crucial when adding products in the
          product editing section.
        </p>
      </div>
      <div className="mt-5">
      {
      rows.map((_,index)=>(
              <div key={index} className="flex justify-between mb-[30px]">
          <div className="flex items-center gap-6">
            <div className="w-[274px]">
              <SelectCom />
            </div>
            <div className="bg-[#7A5AF8] w-[40px] h-[40px] rounded-[8px]"></div>
            <div className="border border-[#D0D5DD] rounded-[8px] px-[14px] w-[104px] h-[40px] flex justify-center items-center">
              <h3 className="text-sm font-normal leading-5 text-[#475467]">
                Blue
              </h3>
            </div>
          </div>
          <button onClick={()=>handleDeleteRows(index)} className="text-[#667085] bg-[#F2F4F7] px-5 py-[10px] rounded-[8px] text-sm font-normal leading-5 (--font-family-Inter) flex items-center gap-[8px]">
            <DeleteIcon /> Delete{" "}
          </button>
        </div>
      ))
      }

        <div className="flex justify-between items-center">
          <button onClick={handleAddRow} className="text-[#F97316] text-sm font-medium leading-5 (--font-family-Inter) border border-[#F97316] px-[14px] py-[10px] w-[120px] h-[40px] flex items-center justify-center gap-[8px] rounded-[8px]">
            {" "}
            <span>
              <PlusIcon />
            </span>
            Add Row
          </button>
          <button className="w-[136px] h-[40px] bg-[#F97316] flex items-center px-5 py-[10px] text-sm font-meduim leading-5 text-white rounded-[8px]">Add to Variant</button>
        </div>
      </div>
      <div className={`mt-[30px] ${openTable?'':'d-none hidden'}`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   items-center gap-[11px]">
        <div className="border flex rounded-[8px]  ">
              <label className="text-sm text-[#475467] flex items-center justify-center bg-[#F2F4F7] px-[10px] w-[75px] h-[40px] font-medium leading-5 border-r-[1px]" htmlFor="">BDT</label>
              <input className=" outline-none border-none px-4 text-[#98A2B3] text-sm font-normal " placeholder="256" type="text" />
          </div>
          <div className="border flex rounded-[8px] ">
              <label className="text-sm text-[#475467] px-[10px] flex items-center justify-center bg-[#F2F4F7] w-[75px] h-[40px] py-[15px] font-medium leading-5 border-r-[1px]" htmlFor="">BDT</label>
              <input className=" outline-none border-none px-4 text-[#98A2B3] text-sm font-normal " placeholder="256" type="text" />
          </div>
          <div className="border rounded-[8px] py-[8px] ">
              <input className=" outline-none border-none px-4 text-[#98A2B3] text-sm font-normal " placeholder="Quantity" type="text" />
          </div>
          <div className="border rounded-[8px] py-[8px] ">
              <input className=" outline-none border-none px-4 text-[#98A2B3] text-sm font-normal " placeholder="Seller SKU" type="text" />
          </div>
        <button className="w-[234px] h-[40px]  justify-center bg-[#F97316] flex items-center px-5 py-[10px] text-sm font-meduim leading-5 text-white rounded-[8px]">Apply for All</button>
        </div>
        <div>
          <TableCom/>
        </div>
      </div>
    </div>
  );
}
