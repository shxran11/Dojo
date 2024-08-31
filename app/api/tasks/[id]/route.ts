import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) {
    return NextResponse.json({ error: "Invalid task" }, { status: 404 });
  }

  const updatedTask = await prisma.task.update({
    where: { id: task.id },
    data: {
      status: body.status,
    },
  });

  return NextResponse.json(updatedTask, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const taskId = parseInt(params.id);

  if (isNaN(taskId)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    return NextResponse.json({ error: "Invalid task" }, { status: 404 });
  }

  await prisma.task.delete({
    where: { id: taskId },
  });

  return NextResponse.json({}, { status: 200 });
}
