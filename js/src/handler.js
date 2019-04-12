import yosay from 'yosay';

export async function handleRequest(request) {
  return new Response(yosay("hi"));
}
