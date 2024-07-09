import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const envTest = Netlify.env.get("ENV_TEST");
  return new Response(`Hello, world! With environment variable: '${envTest}'`);
}