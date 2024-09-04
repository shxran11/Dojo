"use client";

import {
  Avatar,
  Button,
  ChevronDownIcon,
  Flex,
  Popover,
  Text,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";

const PersonalInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="pt-5 pb-5 border-b">
      <Flex gap="3">
        <Avatar
          src={session?.user?.image!}
          fallback="?"
          radius="full"
          size="6"
        />
        <Flex direction="column" justify="end">
          <Text size="7" weight="medium">
            Hi, {session?.user?.name}
          </Text>
          <Flex gap="2" justify="center">
            <Text color="gray">{session?.user?.email}</Text>
            <Popover.Root>
              <Popover.Trigger>
                <ChevronDownIcon />
              </Popover.Trigger>
              <Popover.Content
                className="p-2"
                size="1"
                style={{ backgroundColor: "var(--accent-2)" }}
              >
                <Text size="2">Do you want to log out of Dojo?</Text>
                <Flex pt="2" justify="between">
                  <Popover.Close>
                    <Button>Cancel</Button>
                  </Popover.Close>
                  <Button>
                    <Link href="/api/auth/signout">Log out</Link>
                  </Button>
                </Flex>
              </Popover.Content>
            </Popover.Root>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default PersonalInfo;
