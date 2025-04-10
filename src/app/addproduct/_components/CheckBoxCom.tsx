"use client"

import { Checkbox } from "@/components/ui/checkbox"
interface CheckBoxComProps{
  title:string,
}
export function CheckBoxCom({title}:CheckBoxComProps) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium text-[#98A2B3] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
      </div>
    </div>
  )
}
