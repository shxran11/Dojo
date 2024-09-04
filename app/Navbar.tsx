"use client";

import { Container, Flex, Spinner } from "@radix-ui/themes";
import Link from "next/link";
import { FcTodoList } from "react-icons/fc";
import { IoPersonSharp } from "react-icons/io5";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <Container
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <nav
        className="p-4 border-t"
        style={{ backgroundColor: "var(--accent-12)" }}
      >
        <Flex align="center" justify="between" gap="6">
          <Link href="/">
            <FcTodoList className="w-6 h-6" />
          </Link>
          <Link href="/tasks">
            <Pencil2Icon className="w-5 h-5" />
          </Link>
          {status === "authenticated" && (
            <Link href="/api/auth/signout">Log out</Link>
          )}
          {status === "unauthenticated" && (
            <Link href="/api/auth/signin">Login</Link>
          )}
          {status === "loading" && <Spinner />}
        </Flex>
      </nav>
    </Container>
  );
};

export default Navbar;
