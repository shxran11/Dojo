import prisma from "@/prisma/client";
import CategoryFilter from "../tasks/CategoryFilter";
import NewTaskButton from "../tasks/NewTaskButton";
import TaskList from "../tasks/TaskList";
import { Category, Status } from "@prisma/client";
import { Container, Flex } from "@radix-ui/themes";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Image from "next/image";

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
      {tasks.length < 1 ? (
        <Flex align="center" justify="center" mt="9">
          <Image
            src="/38622256.jpg"
            alt="Task-image"
            width={300}
            height={300}
          />
        </Flex>
      ) : (
        <TaskList tasks={tasks} />
      )}
      <NewTaskButton />
    </>
  );
};

export const metadata: Metadata = {
  title: "Dojo - Task list",
  description: "View all tasks",
};

export default TaskListPage;
