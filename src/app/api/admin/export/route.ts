import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function toCsv(rows: Array<Record<string, string | number | Date | null | undefined>>) {
  if (rows.length === 0) {
    return "";
  }

  const headers = Object.keys(rows[0]);
  const lines = [headers.join(",")];

  for (const row of rows) {
    lines.push(
      headers
        .map((header) => {
          const value = row[header];
          const normalized = value instanceof Date ? value.toISOString() : String(value ?? "");
          return `"${normalized.replace(/"/g, '""')}"`;
        })
        .join(",")
    );
  }

  return lines.join("\n");
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const model = url.searchParams.get("model") ?? "trials";

  if (model === "contact") {
    const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });
    return new NextResponse(toCsv(messages), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="contact-messages.csv"'
      }
    });
  }

  const bookings = await prisma.trialBooking.findMany({ orderBy: { createdAt: "desc" } });
  return new NextResponse(toCsv(bookings), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="trial-bookings.csv"'
    }
  });
}