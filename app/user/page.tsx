import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";

const UserPage = () => {
  return (
    <Button className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
      <PlusIcon />
    </Button>
  );
};

export default UserPage;
