import { defineMiddleware } from "astro:middleware";
import "better-auth/plugins";

// This logs as `Headers { map: {} }`
// If "better-auth" import is removed, it logs as `Headers {}`
console.log(new Request("https://example.com").headers);

export const onRequest = defineMiddleware( (_, next) => {
  return next();
});