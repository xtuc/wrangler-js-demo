export async function handleRequest(request) {
  try {
    const module = await import("./pkg");
    return new Response(module.hi("Sven"));
  } catch (e) {
    return new Response(e.stack || err);
  }
}
