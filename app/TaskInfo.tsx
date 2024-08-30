import { Category, Status } from "@prisma/client";
import { Badge, Button, Flex, Popover, Text } from "@radix-ui/themes";
import { CiFlag1 } from "react-icons/ci";
import TaskStatusBadge from "./components/TaskStatusBadge";

interface Props {
  status: Status;
  category: Category;
  createdAt: Date;
}

const TaskInfo = async ({ status, category, createdAt }: Props) => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="ghost">
          <CiFlag1 size="18" />
        </Button>
      </Popover.Trigger>
      <Popover.Content
        width="300px"
        style={{ backgroundColor: "var(--accent-2)" }}
      >
        <Text size="5">Task Details</Text>
        <Flex direction="column" gap="3" mb="3" mt="3">
          <Flex align="center" gap="3" pb="2" className="border-b">
            <Text size="2">Task status :</Text>
            <TaskStatusBadge status={status} />
          </Flex>
          <Flex align="center" gap="3" pb="2" className="border-b">
            <Text size="2">Category :</Text>
            <Badge color="bronze">{category}</Badge>
          </Flex>
          <Flex align="center" gap="3" pb="2" className="border-b">
            <Text size="2">Created at :</Text>
            <Badge color="gray">{createdAt.toLocaleString()}</Badge>
          </Flex>
        </Flex>
        <Popover.Close>
          <Button size="1">Close</Button>
        </Popover.Close>
      </Popover.Content>
    </Popover.Root>
  );
};

export default TaskInfo;
