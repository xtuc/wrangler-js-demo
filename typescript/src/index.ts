import { handleRequest } from './handler.ts'

addEventListener('fetch', (event: any) => {
  event.respondWith(handleRequest(event.request));
});

