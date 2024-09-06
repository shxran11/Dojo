import prisma from "@/prisma/client";
import CategoryFilter from "../tasks/CategoryFilter";
import NewTaskButton from "../tasks/NewTaskButton";
import TaskList from "../tasks/TaskList";
import { Category, Status } from "@prisma/client";
import { Container } from "@radix-ui/themes";
import { Metadata } from "next";

interface Props {
  searchParams: {
    category?: Category;
    status?: Status;
  };
}

const TaskListPage = async ({ searchParams }: Props) => {
  const { category } = searchParams;

  const tasks = await prisma.task.findMany({
    where: category ? { category } : {},
    orderBy: {
      status: "asc",
    },
  });
  return (
    <Container>
      <CategoryFilter />
      <TaskList tasks={tasks} />
      <NewTaskButton />
    </Container>
  );
};

export const metadata: Metadata = {
  title: "Dojo - Task list",
  description: "View all tasks",
};

export default TaskListPage;
