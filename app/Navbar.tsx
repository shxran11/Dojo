import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FcTodoList } from "react-icons/fc";
import { IoPersonSharp } from "react-icons/io5";
import { Pencil2Icon } from "@radix-ui/react-icons";

const Navbar = () => {
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
          <FcTodoList className="w-6 h-6" />
          <Link href="/">
            <Pencil2Icon className="w-5 h-5" />
          </Link>
          <Link href="/user">
            <IoPersonSharp className="w-5 h-5" />
          </Link>
        </Flex>
      </nav>
    </Container>
  );
};

export default Navbar;
