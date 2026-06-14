"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { CategoryResult } from "@/types/quiz";

export default function ScoreBars({
  profile
}: {
  profile: CategoryResult[];
}) {
  const data = profile.map(c => ({
    name: c.title.split(" ").slice(0, 2).join(" "),
    fullName: c.title,
    score: c.percentage
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 5, right: 10, left: 0, bottom: 60 }}
      >
        <XAxis
          dataKey="name"
          tick={{ fontSize: 11 }}
          angle={-35}
          textAnchor="end"
          interval={0}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 11 }}
          tickFormatter={v => `${v}%`}
        />
        <Tooltip
          formatter={(value: number, _: string, props: { payload?: { fullName: string } }) => [
            `${value}%`,
            props.payload?.fullName ?? ""
          ]}
        />
        <Bar dataKey="score" radius={[6, 6, 0, 0]}>
          {data.map((_, index) => (
            <Cell
              key={index}
              fill="#5e3a73"
              fillOpacity={index === 0 ? 1 : index < 3 ? 0.5 : 0.25}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}