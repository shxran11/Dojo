"use client";

import { Pencil2Icon } from "@radix-ui/react-icons";
import { Avatar, Flex, Spinner } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FcTodoList } from "react-icons/fc";

const Navbar = () => {
  const { status, data: session } = useSession();

  if (status === "unauthenticated") return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <nav
        className="p-2 border-t"
        style={{ backgroundColor: "var(--accent-12)" }}
      >
        <Flex align="center" justify="between" gap="6">
          {status === "authenticated" && (
            <>
              <Link href="/tasks">
                <FcTodoList className="w-6 h-6" />
              </Link>
              <Link href="/tasks">
                <Pencil2Icon className="w-5 h-5" />
              </Link>
              <Link href="/user">
                <Avatar
                  src={session.user!.image!}
                  fallback="?"
                  radius="full"
                  size="2"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </>
          )}
          {status === "loading" && <Spinner />}
        </Flex>
      </nav>
    </div>
  );
};

export default Navbar;
