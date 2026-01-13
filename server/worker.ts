import { router } from "./router";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      return await router.handle(request, env);
    } catch (err) {
      console.error(err);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
