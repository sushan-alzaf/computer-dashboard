import React from "react";

type TProps = {
  data: { id: number; title: string }[];
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};
export default function AddProductHead({ data, active, setActive }: TProps) {
  return (
    <div className="flex items-center  justify-between  bg-white p-5 rounded-[14px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[#1D2939] text-xl font-medium leading-[30px] (--font-family-Inter)">
          Add Product
        </h2>
        <div className="flex gap-[26px] ">
          {data.map((item) => (
            <div key={item.id}>
              <h2
                onClick={() => setActive(item.id)}
                className={`text-[#1D2939] cursor-pointer text-sm font-medium leading-5 (--font-family-Inter) ${
                  active == item.id ? "text-[#F97316]" : ""
                }`}
              >
                {item.title}
              </h2>

              <div
                className={`${
                  item.id == active
                    ? "bg-[#F97316] w-full mt-[6px] h-[2px] rounded-[2px]"
                    : ``
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="flex justify-center items-center gap-2  text-white text-sm font-medium leading-5 (--font-family-Inter) bg-[#FECCAA] w-[124px] h-[40px] rounded-[8px]">
          Add Product
        </button>
      </div>
    </div>
  );
}
