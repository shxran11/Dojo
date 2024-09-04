import { Container } from "@radix-ui/themes";
import TaskSummary from "./TaskSummary";
import prisma from "@/prisma/client";
import TaskChart from "./TaskChart";

const Overview = async () => {
  const complete = await prisma.task.count({ where: { status: "COMPLETED" } });
  const incomplete = await prisma.task.count({
    where: { status: "INCOMPLETE" },
  });

  const tasks = await prisma.task.findMany({
    where: {
      status: "COMPLETED",
      completedAt: {
        not: null,
      },
    },
    select: {
      completedAt: true,
    },
  });

  const taskCounts = {
    Mon: 0,
    Tues: 0,
    Wed: 0,
    Thurs: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
  };

  tasks.forEach((task) => {
    if (task.completedAt) {
      const day = new Date(task.completedAt).toLocaleString("en-US", {
        weekday: "short",
      });
      switch (day) {
        case "Mon":
          taskCounts.Mon += 1;
          break;
        case "Tue":
          taskCounts.Tues += 1;
          break;
        case "Wed":
          taskCounts.Wed += 1;
          break;
        case "Thu":
          taskCounts.Thurs += 1;
          break;
        case "Fri":
          taskCounts.Fri += 1;
          break;
        case "Sat":
          taskCounts.Sat += 1;
          break;
        case "Sun":
          taskCounts.Sun += 1;
          break;
      }
    }
  });

  return (
    <Container>
      <TaskSummary complete={complete} incomplete={incomplete} />
      <TaskChart
        mon={taskCounts.Mon}
        tues={taskCounts.Tues}
        wed={taskCounts.Wed}
        thurs={taskCounts.Thurs}
        fri={taskCounts.Fri}
        sat={taskCounts.Sat}
        sun={taskCounts.Sun}
      />
    </Container>
  );
};

export default Overview;
