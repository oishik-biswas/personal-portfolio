import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readEnv(name: string) {
  return process.env[name]?.trim() ?? "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getMailConfig() {
  const host = readEnv("SMTP_HOST");
  const portValue = readEnv("SMTP_PORT") || "587";
  const port = Number(portValue);
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const from = readEnv("SMTP_FROM") || user;
  const to = readEnv("CONTACT_TO") || readEnv("SMTP_TO") || user;

  if (!host || !user || !pass || !from || !to || !Number.isFinite(port)) {
    throw new Error("Missing mail configuration");
  }

  return {
    from,
    to,
    transport: nodemailer.createTransport({
      host,
      port,
      secure: readEnv("SMTP_SECURE") === "true" || port === 465,
      auth: {
        user,
        pass,
      },
    }),
  };
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json(
      { message: "Please fill out every field." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const { from, to, transport } = getMailConfig();
    const safeName = name.replace(/[\r\n]+/g, " ").slice(0, 100);

    await transport.sendMail({
      from,
      to,
      replyTo: {
        name: safeName,
        address: email,
      },
      subject: `Portfolio contact: ${safeName}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    return Response.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email failed:", error);

    return Response.json(
      { message: "Unable to send message right now." },
      { status: 500 },
    );
  }
}
