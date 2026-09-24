// Cloudflare Pages Function: POST /api/contact
// Recibe las respuestas del asistente de contacto y las reenvía por correo con Resend.
// Variables necesarias en Cloudflare Pages (Settings > Environment variables):
//   RESEND_API_KEY   (secret) - API key de https://resend.com
//   CONTACT_TO_EMAIL (texto)  - correo donde quieres recibir las solicitudes
//   CONTACT_FROM     (texto, opcional) - remitente verificado, ej: "Gessler Studio <formulario@gesslerstudio.com>"

export async function onRequestPost(context) {
    const { request, env } = context;

    let data;
    try {
        data = await request.json();
    } catch (e) {
        return jsonResponse({ success: false, error: "invalid_json" }, 400);
    }

    const name = String(data.name || "").trim();
    const contact = String(data.contact || "").trim();
    const answers = data.answers && typeof data.answers === "object" ? data.answers : {};

    if (!name || contact.length < 5) {
        return jsonResponse({ success: false, error: "invalid_fields" }, 400);
    }

    // Ley 1581: sin autorización expresa no se reciben datos
    if (data.consent !== true) {
        return jsonResponse({ success: false, error: "consent_required" }, 400);
    }
    const consentAt = String(data.consentAt || new Date().toISOString());

    if (!env.RESEND_API_KEY) {
        return jsonResponse({ success: false, error: "not_configured" }, 500);
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const answerLines = Object.keys(answers).map(function (label) {
        return "<p><strong>" + escapeHtml(label) + ":</strong> " + escapeHtml(String(answers[label])) + "</p>";
    });

    const html =
        "<h2>Nueva solicitud de cotización — Gessler Studio</h2>" +
        "<p><strong>Nombre:</strong> " + escapeHtml(name) + "</p>" +
        "<p><strong>Contacto:</strong> " + escapeHtml(contact) + "</p>" +
        answerLines.join("") +
        "<p><strong>Autorización de datos:</strong> Sí, aceptó la Política de Privacidad (" + escapeHtml(consentAt) + ")</p>";

    const payload = {
        from: env.CONTACT_FROM || "Gessler Studio <formulario@gesslerstudio.com>",
        to: [env.CONTACT_TO_EMAIL || "felipe12.florez14@gmail.com"],
        subject: "Nueva solicitud de cotización - Gessler Studio",
        html: html
    };
    if (isEmail) payload.reply_to = contact;

    let resendRes;
    try {
        resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + env.RESEND_API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        return jsonResponse({ success: false, error: "network_error" }, 502);
    }

    if (!resendRes.ok) {
        return jsonResponse({ success: false, error: "send_failed" }, 502);
    }

    return jsonResponse({ success: true });
}

function jsonResponse(obj, status) {
    return new Response(JSON.stringify(obj), {
        status: status || 200,
        headers: { "Content-Type": "application/json" }
    });
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
}
