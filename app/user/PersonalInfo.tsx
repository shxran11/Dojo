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
          <Text
            size="7"
            weight="medium"
            color="violet"
            className="truncate max-w-[200px]"
            title={session?.user?.name!}
          >
            Hi, {session?.user?.name?.split(" ")[0]}
          </Text>
          <Flex gap="2" align="center">
            <Text
              color="gray"
              className="truncate max-w-[200px] md:max-w-[300px]"
              title={session?.user?.email!}
            >
              {session?.user?.email}
            </Text>
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
