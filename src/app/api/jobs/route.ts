import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        company: true,
        stack: true,
        location: true,
        level: true,
        applyUrl: true,
        createdAt: true,
      },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
