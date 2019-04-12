export async function handleRequest(request) {
  try {
    const {_fib} = import("./fib.c");
    return new Response("fib(10) = " + _fib(10));
  } catch (e) {
    return new Response(JSON.stringify(e.message));
  }
}
