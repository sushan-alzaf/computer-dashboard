import { Input } from "@/components/ui/input";

export function InputAdd({ pleaseHol }) {
  return (
    <Input type="email" className="h-[40px]" placeholder={`${pleaseHol}`} />
  );
}
