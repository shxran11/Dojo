import NewTaskButton from "./NewTaskButton";
import TaskList from "./TaskList";

export default async function Home() {
  return (
    <>
      <NewTaskButton />
      <TaskList />
    </>
  );
}
