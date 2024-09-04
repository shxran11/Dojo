import { Container } from "@radix-ui/themes";
import TaskSummary from "./TaskSummary";
import prisma from "@/prisma/client";

const Overview = async () => {
  const complete = await prisma.task.count({ where: { status: "COMPLETED" } });
  const incomplete = await prisma.task.count({
    where: { status: "INCOMPLETE" },
  });
  return (
    <Container>
      <TaskSummary complete={complete} incomplete={incomplete} />
    </Container>
  );
};

export default Overview;
