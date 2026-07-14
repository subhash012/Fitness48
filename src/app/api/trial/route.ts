import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { trialBookingSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = trialBookingSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  await prisma.trialBooking.create({
    data: {
      fullName: parsed.data.fullName,
      phoneNumber: parsed.data.phoneNumber,
      email: parsed.data.email || null,
      age: parsed.data.age ? Number(parsed.data.age) : null,
      gender: parsed.data.gender || null,
      fitnessGoal: parsed.data.fitnessGoal,
      preferredTimeSlot: parsed.data.preferredTimeSlot
    }
  });

  return NextResponse.json({ ok: true });
}