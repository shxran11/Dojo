import prisma from "@/prisma/client";
import CategoryFilter from "../tasks/CategoryFilter";
import NewTaskButton from "../tasks/NewTaskButton";
import TaskList from "../tasks/TaskList";
import { Category, Status } from "@prisma/client";
import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

interface Props {
  searchParams: {
    category?: Category;
    status?: Status;
  };
}

const TaskListPage = async ({ searchParams }: Props) => {
  const { category } = searchParams;

  const session = await getServerSession(authOptions);

  const userId = session?.user.id;

  const tasks = await prisma.task.findMany({
    where: {
      userId,
      ...(category ? { category } : {}),
    },
    orderBy: {
      status: "asc",
    },
  });

  return (
    <>
      <CategoryFilter />
      <TaskList tasks={tasks} />
      <NewTaskButton />
    </>
  );
};

export const metadata: Metadata = {
  title: "Dojo - Task list",
  description: "View all tasks",
};

export default TaskListPage;
