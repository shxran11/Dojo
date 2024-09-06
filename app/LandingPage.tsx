import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FcTodoList } from "react-icons/fc";

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
      <div className="items-center text-center">
        <Flex align="center" direction="column" gap="3">
          <Heading mt="5" align="center" size="8" weight="medium">
            Master Your Tasks with <Text color="blue">Dojo</Text>:
          </Heading>
          <Text align="center">
            Your personal productivity trainer, designed for simplicity and
            efficiency.
          </Text>
        </Flex>
        <Button color="blue" size="4" mt="5">
          <Link href="/api/auth/signin">Get Started for Free</Link>
        </Button>
        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Image
              src="/Dojo-snap1-portrait.png"
              alt="Dojo App UI"
              width={300}
              height={600}
              className="shadow-lg"
            />
            <Image
              src="/Dojo-snap2-portrait.png"
              alt="Dojo App UI"
              width={300}
              height={600}
              className="shadow-lg"
            />
            <Image
              src="/Dojo-snap3-portrait.png"
              alt="Dojo App UI"
              width={300}
              height={600}
              className="shadow-lg"
            />
          </div>
        </section>

        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Feature
              icon={<TaskIcon />}
              title="Organize Tasks Easily"
              description="Simplify your task management with an intuitive interface."
            />

            <Feature
              icon={<ProgressIcon />}
              title="Track Your Progress"
              description="Stay on top of your tasks and track completion effortlessly."
            />

            <Feature
              icon={<CustomizeIcon />}
              title="Customize Your Workflow"
              description="Tailor Dojo to fit your unique productivity style."
            />
          </div>
        </section>
      </div>
      <footer className="py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Dojo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: Props) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TaskIcon() {
  return (
    <svg
      className="mx-auto mb-4 w-12 h-12 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12h6m2 0a9 9 0 11-8.996-9 9 9 0 018.996 9z"
      />
    </svg>
  );
}

function ProgressIcon() {
  return (
    <svg
      className="mx-auto mb-4 w-12 h-12 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3"
      />
      <path d="M4 4v16h16" />
    </svg>
  );
}

function CustomizeIcon() {
  return (
    <svg
      className="mx-auto mb-4 w-12 h-12 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 7v4a9 9 0 018 8h4"
      />
    </svg>
  );
}
