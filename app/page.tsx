import CategoryFilter from "./CategoryFilter";
import NewTaskButton from "./NewTaskButton";
import TaskList from "./TaskList";

export default async function Home() {
  return (
    <>
      <CategoryFilter />
      <TaskList />
      <NewTaskButton />
    </>
  );
}
