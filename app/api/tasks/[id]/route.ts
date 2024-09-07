import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const taskId = parseInt(params.id);
  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  // Ensure the task belongs to the current user
  if (task.userId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: {
      status: body.status,
      completedAt: body.status === "COMPLETED" ? new Date() : null,
    },
  });

  return NextResponse.json(updatedTask, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions); // Adjust based on your auth setup

  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const taskId = parseInt(params.id);

  if (isNaN(taskId)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  // Ensure the task belongs to the current user
  if (task.userId !== session.user?.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prisma.task.delete({
    where: { id: taskId },
  });

  return NextResponse.json({}, { status: 200 });
}
