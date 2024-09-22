"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

const chartConfig = {
  available: {
    label: "Available",
    color: "#000000", // Black for available credits
  },
  used: {
    label: "Used",
    color: "#E98206", // Gold for used credits
  },
} satisfies ChartConfig;

export default function AIChart({
  availableCredit,
  totalUsage,
}: {
  availableCredit: number;
  totalUsage: number;
}) {
  const chartData = [
    {
      month: "january",
      available: `${availableCredit}`,
      used: `${totalUsage}`,
    },
  ];

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[250px]"
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground font-bold text-sm"
                    >
                      {`${totalUsage} / ${availableCredit}`}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground"
                    >
                      Credit usage
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="available"
          stackId="a"
          cornerRadius={5}
          fill="#000000" // Black for available credits
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="used"
          fill="#E98206" // Gold for used credits
          stackId="a"
          cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
