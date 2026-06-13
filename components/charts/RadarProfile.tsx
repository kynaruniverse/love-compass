"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { CategoryResult } from "@/types/quiz";

export default function RadarProfile({
  profile
}: {
  profile: CategoryResult[];
}) {
  const data = profile.map(c => ({
    category: c.title.split(" ").slice(0, 2).join(" "),
    fullName: c.title,
    score: c.percentage
  }));

  return (
    <ResponsiveContainer width="100%" height={380}>
      <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis
          dataKey="category"
          tick={{ fontSize: 11 }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fontSize: 10 }}
          tickFormatter={v => `${v}%`}
        />
        <Tooltip
          formatter={(value: number, _: string, props: any) => [
            `${value}%`,
            props.payload.fullName
          ]}
        />
        <Radar
          dataKey="score"
          stroke="#7c3aed"
          fill="#7c3aed"
          fillOpacity={0.35}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}