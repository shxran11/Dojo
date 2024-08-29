"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  Flex,
  Select,
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
import { Category } from "@prisma/client";

type TaskForm = z.infer<typeof ValidationSchema>;

const NewTaskButton = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
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

  const categories: { label: string; value: Category }[] = [
    { label: "All", value: "ALL" },
    { label: "Work", value: "WORK" },
    { label: "Personal", value: "PERSONAL" },
    { label: "Birthday", value: "BIRTHDAY" },
    { label: "Wishlist", value: "WISHLIST" },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button mb="4" onClick={() => setOpen(true)}>
          Add new task
        </Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <form onSubmit={handleSubmit(saveTask)}>
          <Dialog.Title>Add new task</Dialog.Title>
          <Dialog.Description mb="3" size="2">
            Enter the details of the task you want to add.
          </Dialog.Description>
          <Flex direction="column" gap="3">
            <Select.Root
              onValueChange={(value) => setValue("category", value as Category)}
            >
              <Select.Trigger placeholder="Select category..." />
              <Select.Content>
                {categories.map((category) => (
                  <Select.Item key={category.value} value={category.value}>
                    {category.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
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
