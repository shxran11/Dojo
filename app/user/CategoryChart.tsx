"use client";

import { Card, Heading, Text } from "@radix-ui/themes";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface Props {
  work: number;
  personal: number;
  birthday: number;
  wishlist: number;
  none: number;
}

const CategoryChart = ({ work, personal, birthday, wishlist, none }: Props) => {
  const categories = [
    { label: "Work", value: work },
    { label: "Personal", value: personal },
    { label: "Birthday", value: birthday },
    { label: "Wishlist", value: wishlist },
    { label: "No category", value: none },
  ];

  const COLORS = ["#1640D6", "#7071E8", "#C683D7", "#FF90C2", "#FFC7C7"];

  return (
    <Card className="bg-sky-400">
      <Heading size="4" color="gray" mb="2">
        Tasks in Categories
      </Heading>

      <div style={{ display: "flex", alignItems: "center" }}>
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie
              data={categories}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
            >
              {categories.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={`legend-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: COLORS[index % COLORS.length],
                  marginRight: "8px",
                }}
              />
              <Text size="1" weight="medium">
                {category.label}: {category.value}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CategoryChart;
