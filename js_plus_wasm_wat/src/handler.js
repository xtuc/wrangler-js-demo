export async function handleRequest(request) {
  const {get1} = await import("./module.wat");
  return new Response("hi: " + get1());
}
