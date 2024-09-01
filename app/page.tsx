import prisma from "@/prisma/client";
import CategoryFilter from "./CategoryFilter";
import NewTaskButton from "./NewTaskButton";
import TaskList from "./TaskList";
import { Category } from "@prisma/client";

interface Props {
  searchParams: {
    category?: Category;
  };
}

export default async function Home({ searchParams }: Props) {
  const { category } = searchParams;

  const tasks = await prisma.task.findMany({
    where: category ? { category } : {},
  });
  return (
    <>
      <CategoryFilter />
      <TaskList tasks={tasks} />
      <NewTaskButton />
    </>
  );
}
