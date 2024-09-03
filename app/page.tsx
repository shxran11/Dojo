import prisma from "@/prisma/client";
import CategoryFilter from "./CategoryFilter";
import NewTaskButton from "./NewTaskButton";
import TaskList from "./TaskList";
import { Category } from "@prisma/client";
import { Container } from "@radix-ui/themes";

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
    <Container>
      <CategoryFilter />
      <TaskList tasks={tasks} />
      <NewTaskButton />
    </Container>
  );
}
