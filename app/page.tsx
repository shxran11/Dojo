// app/page.tsx (or app/index.tsx)
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LandingPage from "./LandingPage";
import TaskListPage from "./tasks/page";

async function fetchSession() {
  const session = await getServerSession(authOptions);
  return session;
}

const HomePage = async () => {
  const session = await fetchSession();

  if (!session) {
    return <LandingPage />;
  }

  const searchParams = {};

  return <TaskListPage searchParams={searchParams} />;
};

export default HomePage;
