import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const LandingPage = () => {
  return (
    <div className="mt-3">
      <Flex justify="between" align="center" className="border-b">
        <Flex align="center" gap="3">
          <Image src="/Dojo-logo.png" alt="Dojo-logo" width={70} height={70} />
          <Text size="7" weight="bold" color="blue">
            DOJO
          </Text>
        </Flex>
        <Button variant="soft" color="blue" size="3">
          <Link href="/api/auth/signin">Login</Link>
        </Button>
      </Flex>

      <section className="text-center mt-8">
        <Flex align="center" direction="column" gap="4">
          <Heading size="8" weight="medium">
            Master Your Tasks with <Text color="blue">Dojo</Text>:
          </Heading>
          <Text>
            Your personal productivity trainer, designed for simplicity and
            efficiency.
          </Text>
          <Button color="blue" size="4">
            <Link href="/api/auth/signin">Get Started for Free</Link>
          </Button>
        </Flex>
      </section>

      <section className="container mx-auto px-4 mt-12">
        <Flex direction="column" align="center" justify="center">
          <Image
            src="/Dojo-snap7.png"
            alt="Dojo App UI"
            width={700}
            height={300}
            className="object-cover"
          />
        </Flex>
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
