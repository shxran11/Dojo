import { Button, Card } from "@radix-ui/themes";
import Link from "next/link";
import NewTaskButton from "./NewTaskButton";
import prisma from "@/prisma/client";

export default async function Home() {
  const tasks = await prisma.task.findMany();
  return (
    <>
      <NewTaskButton />
      {tasks.map((task) => (
        <Card
          key={task.id}
          mb="4"
          style={{ backgroundColor: "var(--accent-a2)" }}
        >
          {task.title}
        </Card>
      ))}
    </>
  );
}
