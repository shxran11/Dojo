import prisma from "@/prisma/client";
import { ScrollArea, Box, Heading, Flex, Text, Card } from "@radix-ui/themes";
import React from "react";
import TaskStatusBadge from "../components/TaskStatusBadge";

const LatestTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
    take: 7,
  });
  return (
    <Card className="bg-sky-400">
      <ScrollArea
        type="always"
        scrollbars="vertical"
        style={{ height: 180, width: "100%" }}
      >
        <Box p="2" pr="4">
          <Heading size="5" mb="3" trim="start" color="gray">
            Recent tasks at a glance
          </Heading>
          {tasks.map((task) => (
            <Flex
              key={task.id}
              justify="between"
              pt="3"
              pb="2"
              align="center"
              className="border-b-2"
            >
              <Text size="2">{task.title}</Text>
              <TaskStatusBadge status={task.status} />
            </Flex>
          ))}
        </Box>
      </ScrollArea>
    </Card>
  );
};

export default LatestTasks;
