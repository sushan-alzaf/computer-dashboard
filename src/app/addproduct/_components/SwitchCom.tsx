import { Switch } from "@/components/ui/switch"

export function SwitchCom({handleSwitch}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch onClick={handleSwitch} id="airplane-mode" />
    </div>
  )
}
