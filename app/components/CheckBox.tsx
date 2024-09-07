"use client";

import { Checkbox } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  taskId: number;
  currentStatus: string;
}

const CheckBox = ({ taskId, currentStatus }: Props) => {
  const router = useRouter();

  const handleCheck = async () => {
    try {
      const newStatus =
        currentStatus === "COMPLETED" ? "INCOMPLETE" : "COMPLETED";
      await axios.patch(
        `/api/tasks/${taskId}`,
        {
          status: newStatus,
        },
        {
          withCredentials: true,
        }
      );
      router.refresh();
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <Checkbox checked={currentStatus === "COMPLETED"} onClick={handleCheck} />
  );
};

export default CheckBox;
