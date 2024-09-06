import { Metadata } from "next";
import Overview from "./Overview";
import PersonalInfo from "./PersonalInfo";

const UserPage = () => {
  return (
    <div className="mb-8">
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
