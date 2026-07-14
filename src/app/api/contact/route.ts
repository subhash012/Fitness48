import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactMessageSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactMessageSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  await prisma.contactMessage.create({
    data: {
      fullName: parsed.data.fullName,
      phoneNumber: parsed.data.phoneNumber,
      email: parsed.data.email || null,
      message: parsed.data.message
    }
  });

  return NextResponse.json({ ok: true });
}