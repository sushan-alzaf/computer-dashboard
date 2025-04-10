"use client";
import { useState } from "react";
import React from "react";
import AddProductHead from "./_components/AddProductHead";
import Sammary from "./_components/Sammary";
import RightProgress from "./_components/RightProgress";
import Variants from "./_components/Variants";
import UploadProduct from "./_components/UploadProduct";
import ProductAttributes from "./_components/ProductAttributes";
import Specification from "./_components/Specification";

export default function Page() {
  const [active, setActive] = useState<number>(2);
  type Data = {
    id: number;
    title: string;
  }[];

  const data: Data = [
    {
      id: 1,
      title: "Summary",
    },
    {
      id: 2,
      title: "Image & Gallery",
    },
    {
      id: 3,
      title: "Variant options",
    },
    {
      id: 4,
      title: "Product Attributes",
    },
    {
      id: 5,
      title: "Specification",
    },
    {
      id: 6,
      title: "Key Features",
    },
    {
      id: 7,
      title: "Description",
    },
  ];
  return (
    <div className="md:flex gap-5 p-4 w-full">
      <div className="md:w-9/12 ">
        <div>
          <AddProductHead data={data} active={active} setActive={setActive} />
        </div>
        <Sammary />
        <Variants />
        <UploadProduct />
        <ProductAttributes />
        <Specification />
      </div>
      <div className="md:w-1/4 h-[556px] bg-white py-[40px] px-[38.5px] rounded-[14px]">
        <RightProgress data={data} active={active} />
      </div>
    </div>
  );
}
