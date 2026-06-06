import { Resend } from "resend";
import { NextResponse } from "next/server";

// Rate limiting : max 5 requêtes par IP sur une fenêtre de 15 minutes
const rateLimit = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && now - entry.ts < WINDOW_MS) {
    if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Trop de tentatives. Réessayez dans 15 minutes." },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, ts: now });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    const { error: sendError } = await resend.emails.send({
      from: "EDS Web Solutions <contact@eds-web.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[EDS] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:32px 16px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#dc2f02,#f48c06);padding:32px 40px;">
                      <p style="margin:0;font-family:'Courier New',monospace;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-1px;">
                        &lt;<span style="color:#ffba08;">EDS</span>/&gt;
                      </p>
                      <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.8);letter-spacing:1px;text-transform:uppercase;">
                        Nouveau message de contact
                      </p>
                    </td>
                  </tr>

                  <!-- Corps -->
                  <tr>
                    <td style="padding:36px 40px;">

                      <p style="margin:0 0 24px;font-size:16px;color:#333;">
                        Tu as reçu un nouveau message depuis le formulaire de contact de ton site.
                      </p>

                      <!-- Infos expéditeur -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff8f0;border-radius:10px;padding:20px;margin-bottom:24px;border:1px solid #ffe0b2;">
                        <tr>
                          <td style="padding:8px 0;border-bottom:1px solid #ffe0b2;">
                            <span style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Nom</span><br/>
                            <span style="font-size:15px;color:#111;font-weight:700;margin-top:2px;display:block;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;border-bottom:1px solid #ffe0b2;">
                            <span style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Email</span><br/>
                            <a href="mailto:${email}" style="font-size:15px;color:#e85d04;font-weight:600;text-decoration:none;margin-top:2px;display:block;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;">
                            <span style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Sujet</span><br/>
                            <span style="font-size:15px;color:#111;font-weight:700;margin-top:2px;display:block;">${subject}</span>
                          </td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <p style="margin:0 0 8px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Message</p>
                      <div style="background:#fafafa;border-left:4px solid #e85d04;border-radius:0 8px 8px 0;padding:16px 20px;font-size:15px;color:#333;line-height:1.7;white-space:pre-wrap;">${message}</div>

                      <!-- CTA répondre -->
                      <div style="text-align:center;margin-top:32px;">
                        <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;background:linear-gradient(135deg,#dc2f02,#f48c06);color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:50px;text-decoration:none;letter-spacing:0.5px;">
                          Répondre à ${name} →
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f5f5f5;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
                      <p style="margin:0;font-size:12px;color:#999;">
                        Message reçu via le formulaire de contact · <strong style="color:#e85d04;">EDS Web Solutions</strong>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (sendError) {
      return NextResponse.json({ error: `Resend error: ${sendError.message}` }, { status: 500 });
    }

    // Email de confirmation au client
    await resend.emails.send({
      from: "EDS Web Solutions <contact@eds-web.dev>",
      to: email,
      subject: "Votre message a bien été reçu — EDS Web Solutions",
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:32px 16px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#dc2f02,#f48c06);padding:32px 40px;">
                      <p style="margin:0;font-family:'Courier New',monospace;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-1px;">
                        &lt;<span style="color:#ffba08;">EDS</span>/&gt;
                      </p>
                      <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.8);letter-spacing:1px;text-transform:uppercase;">
                        Message bien reçu
                      </p>
                    </td>
                  </tr>

                  <!-- Corps -->
                  <tr>
                    <td style="padding:36px 40px;">
                      <p style="margin:0 0 16px;font-size:16px;color:#333;line-height:1.6;">
                        Bonjour <strong>${name}</strong>,
                      </p>
                      <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.7;">
                        Merci pour votre message ! Je l'ai bien reçu et vous répondrai dans les plus brefs délais, généralement sous <strong style="color:#e85d04;">24h</strong>.
                      </p>

                      <!-- Récap message -->
                      <div style="background:#fff8f0;border-radius:10px;padding:20px;margin:24px 0;border:1px solid #ffe0b2;">
                        <p style="margin:0 0 8px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Votre message</p>
                        <p style="margin:0 0 4px;font-size:14px;color:#333;font-weight:700;">${subject}</p>
                        <p style="margin:0;font-size:14px;color:#666;line-height:1.6;white-space:pre-wrap;">${message}</p>
                      </div>

                      <p style="margin:0;font-size:15px;color:#555;line-height:1.7;">
                        À très bientôt,<br/>
                        <strong style="color:#dc2f02;">Eléa</strong><br/>
                        <span style="font-size:13px;color:#999;">EDS Web Solutions</span>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f5f5f5;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
                      <p style="margin:0;font-size:12px;color:#999;">
                        Cet email est une confirmation automatique · <strong style="color:#e85d04;">EDS Web Solutions</strong>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi. Veuillez réessayer." }, { status: 500 });
  }
}
