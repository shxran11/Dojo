"use client";

import { Category } from "@prisma/client";
import { Button, Flex, ScrollArea } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const categories: { label: string; value: Category | undefined }[] = [
  { label: "Work", value: "WORK" },
  { label: "Personal", value: "PERSONAL" },
  { label: "Wishlist", value: "WISHLIST" },
  { label: "Birthday", value: "BIRTHDAY" },
  { label: "All", value: undefined },
];

const CategoryFilter = () => {
  const router = useRouter();
  const pathname = usePathname();

  const constructQuery = (category: Category | undefined) => {
    return category ? `?category=${category}` : "";
  };

  useEffect(() => {
    // Scroll to the top when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "white",
        padding: "15px 0px 10px 0px",
      }}
    >
      <ScrollArea
        size="1"
        type="hover"
        scrollbars="horizontal"
        style={{ width: "100%" }}
      >
        <Flex wrap="nowrap" gap="2" style={{ minWidth: "100%" }}>
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="soft"
              mb="4"
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
    </div>
  );
};

export default CategoryFilter;
