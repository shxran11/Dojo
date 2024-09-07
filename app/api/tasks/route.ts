import { ValidationSchema } from "@/app/ValidationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth"; // Import next-auth session function
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = ValidationSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  const userId = session.user.id;

  try {
    const newTask = await prisma.task.create({
      data: {
        title: body.title,
        category: body.category || null,
        userId: userId,
      },
    });

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    );
  }
}
