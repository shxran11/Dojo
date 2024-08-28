import { ValidationSchema } from "@/app/ValidationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = ValidationSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newTask = await prisma.task.create({
    data: {
      title: body.title,
    },
  });

  return NextResponse.json(newTask, { status: 201 });
}
