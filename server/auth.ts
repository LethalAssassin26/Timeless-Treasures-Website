import { SignJWT, jwtVerify } from "jose";

export async function login(req: Request, env: Env) {
  const body = await req.json();

  if (!body.username || !body.password) {
    return new Response("Invalid credentials", { status: 401 });
  }

  const token = await new SignJWT({ user: body.username })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(new TextEncoder().encode(env.JWT_SECRET));

  return Response.json(
    { success: true },
    {
      headers: {
        "Set-Cookie": `auth=${token}; HttpOnly; Secure; SameSite=Strict; Path=/`,
      },
    }
  );
}

export async function register(req: Request) {
  const body = await req.json();
  return Response.json({ success: true, user: body.username });
}
