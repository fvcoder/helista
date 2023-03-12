import { createCookieSessionStorage } from "@remix-run/node";
import type { Session } from "@supabase/supabase-js";

import { getEnv } from "../util/getEnv";

export interface dataSession extends Omit<Session, "user"> {
	theme: "light" | "dark";
}

const sessionStorage = createCookieSessionStorage<{ session: dataSession }>({
	cookie: {
		name: "session",
		httpOnly: true,
		path: "/",
		sameSite: "lax",
		secrets: [getEnv("COOKIE_SECRET", true)],
		secure: getEnv("NODE_ENV") === "production",
	},
});

interface upsetSessionProps {
	request: Request;
	data: dataSession | null;
}

// insert/update
export async function upsetSession({ request, data }: upsetSessionProps): Promise<string> {
	const session = await getSession(request);

	if (data) {
		session.set("session", data);
	}

	return sessionStorage.commitSession(session);
}

// get
async function getSession(request: Request) {
	const cookie = request.headers.get("Cookie");

	return sessionStorage.getSession(cookie);
}

async function getAuthSession(request: Request) {
	const session = await getSession(request);

	return session.get("session");
}

export async function requestVerifySession({
	request,
}: Pick<upsetSessionProps, "request">): Promise<dataSession | null> {
	const session = await getAuthSession(request);

	if (!session || !session.access_token || !session.refresh_token) {
		return null;
	}

	return session;
}
