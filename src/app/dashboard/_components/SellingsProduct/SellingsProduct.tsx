import React from "react";
import img1 from "../../../assets/img/Img.png";
import img2 from "@/app/assets/img/Img1.png";
import img3 from "@/app/assets/img/Img2.png";
import img4 from "@/app/assets/img/Img3.png";
import img5 from "@/app/assets/img/Img4.png";
import Image from "next/image";
import { DownIcon } from "@/app/assets/icons/icons";

// Correct the data type definition and img assignments
export default function SellingsProduct() {
  type Data = {
    id: number;
    img: string | null;  // `img` should be a string or null (not JSX.Element)
    title: string;
  }[];

  const sellingsData: Data = [
    {
      id: 1,
      img: img1,  // img1 is a string or null
      title: `Lenovo Legion S7 16ARHA7 Ryzen 7 6800H RX 6800S 8GB Graphics 16" Gaming Laptop`,
    },
    {
      id: 2,
      img: img2,  // img2 is a valid image path (string)
      title: `Lenovo Legion S7 16ARHA7 Ryzen 7 6800H RX 6800S 8GB Graphics 16" Gaming Laptop`,
    },
    {
      id: 3,
      img: img3,
      title: `Lenovo Legion S7 16ARHA7 Ryzen 7 6800H RX 6800S 8GB Graphics 16" Gaming Laptop`,
    },
    {
      id: 4,
      img: img4,
      title: `Lenovo Legion S7 16ARHA7 Ryzen 7 6800H RX 6800S 8GB Graphics 16" Gaming Laptop`,
    },
    {
      id: 5,
      img: img5,
      title: `Lenovo Legion S7 16ARHA7 Ryzen 7 6800H RX 6800S 8GB Graphics 16" Gaming Laptop`,
    },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-between mb-[24px] ">
        <span className="text-[#475467] text-xl font-medium leading-[30px] (--font-family-Inter)">Top Selling products</span>
        <p className="flex items-center text-[#667085] text-xs font-normal leading-[18px]">24 Feb 2024 to 2 Mar <span><DownIcon/></span> </p>
      </div>
      <div className="flex flex-col gap-[14px]">
      {
        sellingsData.map((item)=>(
          <div className="flex items-center gap-[10px] mb-[14px]" key={item.id}>
          <Image src={item.img} alt=""/>
          <h2 className="text-[#475467] text-xs font-normal leading-[22px]">{item.title}</h2>
        </div>
        ))
      }
      </div>
    </div>
  );
}
