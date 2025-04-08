"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", sales: 0, Revenue: 0 },
  { month: "February", sales: 1000, Revenue: 400 },
  { month: "March", sales: 3000, Revenue: 1500 },
  { month: "April", sales: 1500, Revenue: 200 },
  { month: "May", sales: 800, Revenue: 2000 },
  { month: "June", sales: 4000, Revenue: 100 },
  { month: "July", sales: 1200, Revenue: 100 },
  { month: "Auguest", sales: 6000, Revenue: 1600 },
  { month: "Septembar", sales: 800, Revenue: 1000 },
  { month: "Octobar", sales: 3000, Revenue: 300 },
  { month: "Novembar", sales: 500, Revenue: 2500 },
  { month: "Decembar", sales: 5000, Revenue: 0 },
];

const chartConfig = {
  sales: {
    label: "sales",
    color: "hsl(var(--chart-1))",
  },
  Revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function LineChartAppMain() {
  return (
    <Card className="p-5">
      <CardHeader className="flex justify-between mb-5">
        <CardTitle className="text-[#475467] text-xl font-medium leading-[30px] (--font-family-Inter)">
          Sales Analytics
        </CardTitle>
        <CardDescription>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-[6px]">
                <div className="bg-[#32D583] w-[10px] h-[10px] rounded-full"></div>
                <span className="text-[#32D583] text-sm font-normal leading-5 (--font-family-Inter)">Sales</span>
              </div>
              <div className="flex items-center gap-[6px]">
              <div className="bg-[#36BFFA] w-[10px] h-[10px] rounded-full"></div>
              <span className="text-[#36BFFA] text-sm font-normal leading-5 (--font-family-Inter)">Revenue</span>
              </div>
            </div>
            <div>
                <select className="bg-[#FFF] px-4 py-[9px] text-xs font-semibold outline-none text-[#98A2B3] border border-[#98A2B3] rounded">
                    <option value="2024">2024</option>
                    <option value="2024">2025</option>
                    <option value="2024">2026</option>
                    <option value="2024">2027</option>
                    <option value="2024">2028</option>
                    <option value="2024">2029</option>
                    <option value="2024">2030</option>
                    <option value="2024">2031</option>
                    <option value="2024">2032</option>
                </select>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[360px]">
        <ChartContainer className="h-[360px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#32D583" stopOpacity={0.8} />
                <stop offset="45%" stopColor="#32D583" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2E90FA66" stopOpacity={0.8} />
                <stop offset="45%" stopColor="#2E90FA66" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="Revenue"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke={`#36BFFA`}
              stackId="a"
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke={`#32D583`}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

    </Card>
  );
}
