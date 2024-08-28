import { Button, Dialog, Flex, TextArea } from "@radix-ui/themes";

const NewTaskButton = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Add new task</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add new task</Dialog.Title>

        <Flex direction="column" gap="3">
          <label>
            <TextArea size="2" mb="1" placeholder="Create new task..." />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NewTaskButton;
