import type { Config, Context } from "@netlify/edge-functions";

export const config: Config = {
  path: "/netlify-edge",
};

export default async (request: Request, context: Context) => {
  console.log('Netlify context', context)

  return Response.json({
    context
  });
};
