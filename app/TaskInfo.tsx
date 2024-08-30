import { Category, Status } from "@prisma/client";
import { Badge, Button, Flex, Popover, Text } from "@radix-ui/themes";
import { CiFlag1 } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import TaskStatusBadge from "./components/TaskStatusBadge";
import DeleteTaskButton from "./DeleteTaskButton";

interface Props {
  id: number;
  status: Status;
  category: Category;
  createdAt: Date;
}

const TaskInfo = async ({ id, status, category, createdAt }: Props) => {
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
        <Flex align="center" justify="between">
          <Popover.Close>
            <Button size="1">Close</Button>
          </Popover.Close>
          <Popover.Close>
            <DeleteTaskButton taskId={id} />
          </Popover.Close>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default TaskInfo;
