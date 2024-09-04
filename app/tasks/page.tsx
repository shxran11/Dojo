import prisma from "@/prisma/client";
import CategoryFilter from "../tasks/CategoryFilter";
import NewTaskButton from "../tasks/NewTaskButton";
import TaskList from "../tasks/TaskList";
import { Category } from "@prisma/client";
import { Container } from "@radix-ui/themes";

interface Props {
  searchParams: {
    category?: Category;
  };
}

const TaskListPage = async ({ searchParams }: Props) => {
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
};

export default TaskListPage;
