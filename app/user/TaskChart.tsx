"use client";

import { Card } from "@radix-ui/themes";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";

interface Props {
  mon: number;
  tues: number;
  wed: number;
  thurs: number;
  fri: number;
  sat: number;
  sun: number;
}

const TaskChart = ({ mon, tues, wed, thurs, fri, sat, sun }: Props) => {
  const data = [
    { label: "Mon", completed: mon },
    { label: "Tues", completed: tues },
    { label: "Wed", completed: wed },
    { label: "Thurs", completed: thurs },
    { label: "Fri", completed: fri },
    { label: "Sat", completed: sat },
    { label: "Sun", completed: sun },
  ];
  return (
    <Card mt="5" className="bg-sky-400">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" barSize={40} fill="#1d3e56" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TaskChart;
