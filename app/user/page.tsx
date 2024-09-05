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

export default UserPage;
