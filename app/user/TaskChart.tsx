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
    <Card className="bg-sky-400">
      <div className="sm:h-[300px] md:h-[300px]">
        <ResponsiveContainer width="100%" minHeight={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="label"
              fontSize={14}
              angle={-30}
              textAnchor="end"
              interval={0}
            />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="completed"
              barSize={40}
              fill="#7071E8"
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TaskChart;
