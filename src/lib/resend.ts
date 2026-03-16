import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailParams = {
  to: string;
  subject: string;
  message: string;
  html?: string;
  replyTo?: string;
};

export const sendEmail = async ({
  to,
  subject,
  message,
  html,
  replyTo,
}: SendEmailParams) => {
  await resend.emails.send({
    from: "noreply@johnsenb.dev",
    to,
    subject,
    html: html || `<p>${message}</p>`,
    replyTo,
  });
};
