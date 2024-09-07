import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import CategoryChart from "./CategoryChart";
import LatestTasks from "./LatestTasks";
import TaskChart from "./TaskChart";
import TaskSummary from "./TaskSummary";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

const Overview = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  const complete = await prisma.task.count({
    where: { status: "COMPLETED", userId },
  });
  const incomplete = await prisma.task.count({
    where: { status: "INCOMPLETE", userId },
  });

  const tasks = await prisma.task.findMany({
    where: {
      status: "COMPLETED",
      completedAt: {
        not: null,
      },
      userId,
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

  const work = await prisma.task.count({ where: { category: "WORK", userId } });
  const personal = await prisma.task.count({
    where: { category: "PERSONAL", userId },
  });
  const birthday = await prisma.task.count({
    where: { category: "BIRTHDAY", userId },
  });
  const wishlist = await prisma.task.count({
    where: { category: "WISHLIST", userId },
  });
  const none = await prisma.task.count({ where: { category: null, userId } });

  return (
    <Grid columns={{ initial: "1", md: "2" }} mt="5" gap="3">
      <Flex direction="column" gap="3">
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
      </Flex>
      <Flex direction="column" gap="3">
        <LatestTasks />
        <CategoryChart
          work={work}
          birthday={birthday}
          personal={personal}
          wishlist={wishlist}
          none={none}
        />
      </Flex>
    </Grid>
  );
};

export default Overview;
