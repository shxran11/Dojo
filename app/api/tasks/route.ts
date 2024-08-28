import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newTask = await prisma.task.create({
    data: {
      title: body.title,
    },
  });

  return NextResponse.json(newTask, { status: 201 });
}
