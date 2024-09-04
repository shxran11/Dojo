"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "@prisma/client";
import {
  Button,
  Container,
  Dialog,
  Flex,
  Select,
  Spinner,
  TextArea,
  Tooltip,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { z } from "zod";
import ErrorMessage from "../components/ErrorMessage";
import { ValidationSchema } from "../ValidationSchema";

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
  const router = useRouter();

  const saveTask = async (data: TaskForm) => {
    try {
      setSubmitting(true);
      await axios.post("/api/tasks", data);
      reset();
      setOpen(false);
      setSubmitting(false);
      router.refresh();
    } catch (error) {
      setSubmitting(false);
    }
  };

  const categories: { label: string; value: Category }[] = [
    { label: "Work", value: "WORK" },
    { label: "Personal", value: "PERSONAL" },
    { label: "Birthday", value: "BIRTHDAY" },
    { label: "Wishlist", value: "WISHLIST" },
  ];

  return (
    <Container
      style={{ position: "relative", maxWidth: "1024px", width: "100%" }}
    >
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <Tooltip
            content="Add new task"
            style={{ backgroundColor: "var(--accent-12)" }}
          >
            <button
              onClick={() => setOpen(true)}
              className="size-12 bg-blue-400 text-white px-4 py-2 rounded-full shadow-lg fixed bottom-16 right-6 sm:right-6 md:right-14 xl:right-52"
            >
              <FaPlus />
            </button>
          </Tooltip>
        </Dialog.Trigger>
        <Dialog.Content
          maxWidth="450px"
          style={{ backgroundColor: "var(--accent-2)" }}
        >
          <form onSubmit={handleSubmit(saveTask)}>
            <Dialog.Title>Add new task</Dialog.Title>
            <Dialog.Description mb="3" size="2">
              Enter the details of the task you want to add.
            </Dialog.Description>
            <Flex direction="column" gap="3">
              <Select.Root
                onValueChange={(value) =>
                  setValue("category", value as Category)
                }
              >
                <Select.Trigger
                  placeholder="Select category..."
                  style={{ backgroundColor: "var(--accent-3)" }}
                />
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
                  style={{ backgroundColor: "var(--accent-3)" }}
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
    </Container>
  );
};

export default NewTaskButton;
