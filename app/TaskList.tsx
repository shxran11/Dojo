import prisma from "@/prisma/client";
import { Card, Flex } from "@radix-ui/themes";
import CheckBox from "./components/CheckBox";
import TaskInfo from "./TaskInfo";

const TaskList = async () => {
  const tasks = await prisma.task.findMany();
  return (
    <div>
      {tasks.map((task) => (
        <Card
          key={task.id}
          mb="4"
          style={{ backgroundColor: "var(--accent-8)" }}
        >
          <Flex justify="between" align="center">
            <Flex align="center" gap="2">
              <CheckBox taskId={task.id} currentStatus={task.status} />
              {task.title}
            </Flex>
            <TaskInfo
              id={task.id}
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
