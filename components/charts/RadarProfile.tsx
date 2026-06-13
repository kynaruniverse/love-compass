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
    <div className="space-y-3">
      <ResponsiveContainer width="100%" height={380}>
        <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="#e2e6ea" />
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
            stroke="#5e3a73"
            fill="#c9a14a"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Full category names — axis labels above are abbreviated to 2 words */}
      <ul className="grid grid-cols-2 gap-1.5 text-xs opacity-70 px-2">
        {profile.map(c => (
          <li key={c.key} className="flex justify-between gap-2">
            <span className="truncate">{c.title}</span>
            <span className="opacity-60 flex-shrink-0">{c.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}