import { CloseIcons, UploadProductIcon } from "@/app/assets/icons/icons";
import React, { useState } from "react";
import HeadTitle from "./HeadTitle";

const defaultImage = "https://via.placeholder.com/150";
export default function UploadProduct() {
  const [image, setImage] = useState([{ file: null, preview: defaultImage }]);

  const handleImageChange = (e, index: number) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = [...image];
      newImage[index] = {
        file,
        preview: URL.createObjectURL(file),
      };
      setImage(newImage);
    }
  };
  console.log(image);

  return (
    <div className="bg-white p-5 rounded-[14px] mt-5">
      <HeadTitle
        title={"Upload Product Image"}
        description={
          "illing in the required fields is crucial when adding products in the product editing section."
        }
      />
      <div className="mt-5 flex items-center gap-[14px]">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className="element  w-[81px] h-[76px] py-[19px] relative px-[7px] flex flex-col rounded-[8px] items-center justify-center gap-[5px] border border-dashed border-[#1D2939]"
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, index)}
              className="w-[50px] opacity-0 absolute top-[15px] left-[20px] "
            />
            <span>
              <UploadProductIcon />{" "}
            </span>
            <p className="text-[#1D2939] text-[10px] font-medium">
              Media Gallery
            </p>

            {/* {image && (
                        <div className="absolute w-[81px] p-[6px] h-[76px] rounded-[8px] border border-solid border-[#D0D5DD]" style={{ marginTop: "0px" }}>
                          <img
                            src={image}
                            alt="Uploaded Preview"
                            style={{ width: "100%", height: "100%" }}
                          />
                          <button className="bg-[#D0D5DD] w-[10px] h-[10px] top-0 right-0 absolute flex items-center justify-center rounded-[5px]"><span><CloseIcons/> </span></button>
                        </div>
                      )}  */}
          </div>
        ))}
      </div>
    </div>
  );
}
