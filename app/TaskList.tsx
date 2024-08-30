import prisma from "@/prisma/client";
import { Card, Flex } from "@radix-ui/themes";
import TaskInfo from "./TaskInfo";

const TaskList = async () => {
  const tasks = await prisma.task.findMany();
  return (
    <div>
      {tasks.map((task) => (
        <Card
          key={task.id}
          mb="4"
          style={{ backgroundColor: "var(--accent-a2)" }}
        >
          <Flex justify="between" align="center">
            {task.title}
            <TaskInfo
              status={task.status}
              category={task.category}
              createdAt={task.createdAt}
            />
          </Flex>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
