import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (
      !process.env.BREVO_API_KEY ||
      !process.env.RECIPIENT_EMAIL ||
      !process.env.BREVO_SENDER_EMAIL
    ) {
      console.error("Missing required environment variables.");
      return NextResponse.json(
        { message: "Email sending failed due to server configuration." },
        { status: 500 }
      );
    }

    const bookingData = await request.json();
    const { name, email, phone, date, car, services, comments } = bookingData;

    const htmlContent = `
    <h2>New Car Detailing Booking</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Car:</strong> ${car || "Not provided"}</p>
    <p><strong>Additional Comments:</strong> ${
      comments?.trim() || "None provided"
    }</p>
    <p><strong>Services:</strong></p>
    <ul>
      ${Object.entries(services)
        .map(([category, service]: any) => {
          const addonList =
            service.addons && service.addons.length
              ? `<br /><em>Add-ons:</em> <ul>${service.addons
                  .map((addon: string) => `<li>${addon}</li>`)
                  .join("")}</ul>`
              : "";

          return `<li><strong>${category}:</strong> ${
            service.package
          } - Size: ${service.size || "Not Specified"}${addonList}</li>`;
        })
        .join("")}
    </ul>
  `;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "NexGen Auto Detail",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.RECIPIENT_EMAIL,
            name: "Booking Recipient",
          },
        ],
        subject: "New Car Detailing Booking",
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", response.status, errorData);
      throw new Error(
        `Brevo API error: ${response.status} - ${JSON.stringify(errorData)}`
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully via Brevo API" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email via Brevo API:", error);
    return NextResponse.json(
      { message: "Failed to send email via Brevo API", error: error.message },
      { status: 500 }
    );
  }
}
