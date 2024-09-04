import { Card, Flex, Text } from "@radix-ui/themes";
import CheckBox from "../components/CheckBox";
import TaskInfo from "../tasks/TaskInfo";
import { Task } from "@prisma/client";

const TaskList = async ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Card
          key={task.id}
          mb="4"
          style={{ backgroundColor: "var(--accent-8)" }}
        >
          <Flex justify="between" align="center">
            <Flex align="center" gap="2" mr="3">
              <CheckBox taskId={task.id} currentStatus={task.status} />
              <Text size="2" color="sky">
                {task.title}
              </Text>
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
