"use client";

import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  complete: number;
  incomplete: number;
}

const TaskSummary = ({ complete, incomplete }: Props) => {
  const statuses: { label: string; value: number; status: Status }[] = [
    { label: "Completed Tasks", value: complete, status: "COMPLETED" },
    { label: "Pending Tasks", value: incomplete, status: "INCOMPLETE" },
  ];

  return (
    <Flex gap="3" justify="between">
      {statuses.map((status) => (
        <Card
          key={status.status}
          className="bg-sky-400 sm:w-40 md:w-96"
          size="2"
        >
          <Flex direction="column">
            <Text align="center" weight="bold" size="5">
              {status.value}
            </Text>
            <Text align="center" size="2" weight="medium" color="gray">
              {status.label}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default TaskSummary;
