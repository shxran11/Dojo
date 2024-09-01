import { Category } from "@prisma/client";
import { ScrollArea, Box, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const categories: { label: string; value: Category }[] = [
  { label: "Work", value: "WORK" },
  { label: "Personal", value: "PERSONAL" },
  { label: "Wishlist", value: "WISHLIST" },
  { label: "Birthday", value: "BIRTHDAY" },
  { label: "None", value: "NONE" },
];

const CategoryFilter = () => {
  return (
    <ScrollArea
      size="1"
      type="hover"
      scrollbars="horizontal"
      style={{ width: "100%" }}
    >
      <Flex wrap="nowrap" gap="2" style={{ minWidth: "100%" }} mb="4">
        {categories.map((category) => (
          <Button key={category.value} asChild variant="soft">
            <Link href={`/tasks?orderBy=${category.value}`}>
              {category.label}
            </Link>
          </Button>
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default CategoryFilter;
