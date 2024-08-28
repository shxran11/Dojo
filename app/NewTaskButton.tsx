"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  Flex,
  Spinner,
  Text,
  TextArea,
} from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationSchema } from "./ValidationSchema";
import { z } from "zod";
import ErrorMessage from "./components/ErrorMessage";

type TaskForm = z.infer<typeof ValidationSchema>;

const NewTaskButton = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskForm>({
    resolver: zodResolver(ValidationSchema),
  });
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const saveTask = async (data: TaskForm) => {
    try {
      setSubmitting(true);
      await axios.post("/api/tasks", data);
      reset();
      setOpen(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button onClick={() => setOpen(true)}>Add new task</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <form onSubmit={handleSubmit(saveTask)}>
          <Dialog.Title>Add new task</Dialog.Title>
          <Dialog.Description mb="3" size="2">
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
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </label>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray" onClick={() => reset()}>
                Cancel
              </Button>
            </Dialog.Close>
            <Button disabled={isSubmitting} type="submit">
              Save {isSubmitting && <Spinner />}
            </Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NewTaskButton;
