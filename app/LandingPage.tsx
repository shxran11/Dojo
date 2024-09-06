import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { FcTodoList } from "react-icons/fc";
import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="mt-3">
      <Flex justify="between" align="center" className="border-b pb-2">
        <Flex align="center" gap="4">
          <FcTodoList size={50} />
          <Text size="7" weight="bold" color="blue">
            DOJO
          </Text>
        </Flex>
        <Button variant="soft" color="blue" size="3">
          <Link href="/api/auth/signin">Login</Link>
        </Button>
      </Flex>
      <Heading mt="5" align="center" size="8" weight="medium">
        Master Your Tasks with <Text color="blue">Dojo</Text>: <br />
        Your Personal Productivity Trainer
      </Heading>
    </div>
  );
};

export default LandingPage;
