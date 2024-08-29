import { Button, Popover } from "@radix-ui/themes";
import { CiFlag1 } from "react-icons/ci";

const TaskInfo = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="ghost">
          <CiFlag1 size="18" />
        </Button>
      </Popover.Trigger>
      <Popover.Content width="360px">
        <Popover.Close>
          <Button size="1">Close</Button>
        </Popover.Close>
      </Popover.Content>
    </Popover.Root>
  );
};

export default TaskInfo;
