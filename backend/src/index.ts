import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { trialBookingSchema, contactMessageSchema } from "../../src/lib/validators";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 150,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.get("/health", (_request, response) => {
  response.json({ ok: true, service: "Fitness 48 API" });
});

app.post("/api/trial", (request, response) => {
  const parsed = trialBookingSchema.safeParse(request.body);

  if (!parsed.success) {
    response.status(400).json({ error: parsed.error.flatten() });
    return;
  }

  response.json({ ok: true, message: "Trial booking accepted", data: parsed.data });
});

app.post("/api/contact", (request, response) => {
  const parsed = contactMessageSchema.safeParse(request.body);

  if (!parsed.success) {
    response.status(400).json({ error: parsed.error.flatten() });
    return;
  }

  response.json({ ok: true, message: "Contact message accepted", data: parsed.data });
});

app.listen(port, () => {
  // Intentionally minimal: this server is meant to be wired to Prisma and admin routes next.
  console.log(`Fitness 48 API listening on http://localhost:${port}`);
});