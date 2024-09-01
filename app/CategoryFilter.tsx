"use client";

import { Category } from "@prisma/client";
import { Button, Flex, ScrollArea } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const categories: { label: string; value: Category | undefined }[] = [
  { label: "Work", value: "WORK" },
  { label: "Personal", value: "PERSONAL" },
  { label: "Wishlist", value: "WISHLIST" },
  { label: "Birthday", value: "BIRTHDAY" },
  { label: "All", value: undefined },
];

const CategoryFilter = () => {
  const router = useRouter();
  const constructQuery = (category: Category | undefined) => {
    return category ? `?category=${category}` : "";
  };

  return (
    <ScrollArea
      size="1"
      type="hover"
      scrollbars="horizontal"
      style={{ width: "100%" }}
    >
      <Flex wrap="nowrap" gap="2" style={{ minWidth: "100%" }} mb="4">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant="soft"
            onClick={() => {
              const query = constructQuery(category.value);
              router.push(`/${query}`);
            }}
          >
            {category.label}
          </Button>
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default CategoryFilter;
