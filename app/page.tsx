import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <Button>
      <Link href="/new">Add new task</Link>
    </Button>
  );
}
