export async function onRequestGet({ env }) {
  const raw = await env.GESSLER_KV.get("state");
  return new Response(raw || "null", { headers: { "content-type": "application/json" } });
}

export async function onRequestPost({ request, env }) {
  const body = await request.text();
  await env.GESSLER_KV.put("state", body);
  return new Response(JSON.stringify({ ok: true }), { headers: { "content-type": "application/json" } });
}
