import { serve } from "https://deno.land/std@0.84.0/http/server.ts";
const server = serve({ port: 5000 });
console.log("http://localhost:5000/");
for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}