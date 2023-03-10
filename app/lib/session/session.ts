import { createCookieSessionStorage } from "@remix-run/node";

// Todo: Crear variable de entorno "secret_cookie"
export const session = createCookieSessionStorage({
	cookie: {
		name: "session",
		secure: true,
		secrets: ["SESSION_SECRET"],
		sameSite: "lax",
		path: "/",
		expires: 604800,
		httpOnly: true,
	},
});
