import { Container, Flex, TabNav } from "@radix-ui/themes";
import Link from "next/link";
import { FcTodoList } from "react-icons/fc";
import { CgDetailsMore } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  const links = [
    { label: "Tasks", href: "/", icon: <FcTodoList size={20} /> },
    { label: "Mine", href: "/user", icon: <IoPersonSharp size={20} /> },
  ];
  return (
    <nav className="p-4 border-b mb-5">
      <Container>
        <Flex align="center" gap="6">
          <CgDetailsMore className="mr-3" size={20} />
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.icon}</Link>
              </li>
            ))}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
