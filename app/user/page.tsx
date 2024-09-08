import { Metadata } from "next";
import Overview from "./Overview";
import PersonalInfo from "./PersonalInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import LandingPage from "../LandingPage";

const UserPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <LandingPage />;
  }

  return (
    <div className="mb-20">
      <PersonalInfo />
      <Overview />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Dojo - User page",
  description: "Track the progress of user",
};

export default UserPage;
