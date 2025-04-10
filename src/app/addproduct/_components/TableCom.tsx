import { CirclePlusIcon } from "@/app/assets/icons/icons";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SwitchCom } from "./SwitchCom";

export default function TableCom() {
  // Data structure for the table
  const specs = [
    {
      section: "Black",
      items: [
        {
          size: "Int:S/M",
          category: "Add Now",
        },
        {
          size: "Int:L/XL",
          category: "Add Now",
        },
        {
          size: "Int:M/L",
          category: "Add Now",
        },
        {
          size: "Int:XS/S",
          category: "Add Now",
        },
      ],
    },
    {
      section: "Pink",
      items: [
        {
          size: "Int:S/M",
          category: "Add Now",
        },
        {
          size: "Int:S/M",
          category: "Add Now",
        },
        {
          size: "Int:S/M",
          category: "Add Now",
        },
      ],
    },
    {
      section: "White",
      items: [
        {
          size: "Int:S/M",
          category: "Add Now",
        },
        {
          size: "Int:S/M",
          category: "Add Now",
        },
        {
          size: "Int:S/M",
          category: "Add Now",
        },
      ],
    },
  ];

  return (
    <div className="my-6">
      <div className="border rounded">
        <Table className="border-collapse">
          <TableHeader className="hover:bg-[#f2f4f7] bg-[#f2f4f7]">
            <TableRow className="">
              <TableHead className="w-[177px] border-r">Color Family</TableHead>
              <TableHead className="w-[177px] border-r">Size</TableHead>
              <TableHead className="w-[177px] border-r">BDT Price</TableHead>
              <TableHead className="w-[177px] border-r">
                Special Price
              </TableHead>
              <TableHead className="w-[177px] border-r">Quantity</TableHead>
              <TableHead className="w-[177px] border-r">Seller SKU</TableHead>
              <TableHead className="w-[177px] border-r">Free Items</TableHead>
              <TableHead className="w-[177px] border-r">Available</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {specs.map((section, sectionIndex) =>
              section.items.map((item, itemIndex) => (
                <TableRow
                  key={`${sectionIndex}-${itemIndex}`}
                  className={
                    itemIndex === 0 && sectionIndex > 0 ? "border-t " : ""
                  }
                >
                  {itemIndex === 0 ? (
                    <TableCell
                      rowSpan={section.items.length}
                      className="align-centre font-medium border-r"
                    >
                      {section.section}
                    </TableCell>
                  ) : null}
                  <TableCell className="border-r py-[10px] px-[16px]">
                    {item.size}
                  </TableCell>
                  <TableCell className="border-r py-[10px] px-[16px]">
                    <div className="flex items-center border bg-[#F2F4F7] rounded-lg ">
                      <label
                        htmlFor=""
                        className="bg-[#FFE6D5] text-[#667085] text-xs font-normal leading-[18px] p-[10px]"
                      >
                        BDT
                      </label>
                      <Input
                        className="focus-visible:ring-0 !bg-[none] !border-none"
                        placeholder="570"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="border-r py-[10px] px-[16px]">
                    <div className=" flex justify-center items-center">
                      <button className="flex items-center  gap-[8px] text-[#F97316] text-[18px] font-normal leading-[28px]">
                        <span>
                          <CirclePlusIcon />{" "}
                        </span>{" "}
                        {item.category}
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="py-[10px] px-[16px]">
                    <Input
                      className="bg-[#F2F4F7] p-[10px]"
                      placeholder="00"
                    ></Input>
                  </TableCell>
                  <TableCell className="py-[10px] px-[16px]">
                    <Input
                      className="bg-[#F2F4F7] p-[10px]"
                      placeholder="T389550-Pink"
                    ></Input>
                  </TableCell>
                  <TableCell className="py-[10px] px-[16px]">
                    <Input
                      className="bg-[#F2F4F7] p-[10px]"
                      placeholder="00"
                    ></Input>
                  </TableCell>
                  <TableCell className="py-[10px] px-[16px] ">
                    <div className="flex items-center justify-center">
                      <SwitchCom />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
