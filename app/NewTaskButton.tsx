"use client";

import { Button, Dialog, Flex, TextArea } from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface TaskForm {
  title: string;
}

const NewTaskButton = () => {
  const { register, handleSubmit, reset } = useForm<TaskForm>();
  const [open, setOpen] = useState(false);

  const saveTask = async (data: TaskForm) => {
    await axios.post("/api/tasks", data);
    reset();
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button onClick={() => setOpen(true)}>Add new task</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <form onSubmit={handleSubmit(saveTask)}>
          <Dialog.Title>Add new task</Dialog.Title>
          <Dialog.Description>
            Enter the details of the task you want to add.
          </Dialog.Description>
          <Flex direction="column" gap="3">
            <label>
              <TextArea
                size="2"
                mb="1"
                placeholder="Create new task..."
                {...register("title")}
              />
            </label>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Button type="submit">Save</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NewTaskButton;
