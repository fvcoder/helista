/* eslint-disable camelcase */
import { createCookieSessionStorage } from "@remix-run/node";
import type { Session } from "@supabase/supabase-js";
import dayjs from "dayjs";

import { getSupabase } from "~/lib/supabase";
import { getEnv } from "~/lib/util";

export interface dataSession extends Omit<Session, "user"> {
	theme: "light" | "dark";
	userId: string;
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
		const expires_at = dayjs().add(data.expires_in, "second").toDate().getTime();
		session.set("session", { ...data, expires_at });
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
}: Pick<upsetSessionProps, "request">): Promise<
	| { session: null; setCookie: null }
	| { session: dataSession; setCookie: string }
	| { session: dataSession; setCookie: null }
> {
	const session = await getAuthSession(request);

	if (!session || !session.access_token || !session.refresh_token) {
		return { session: null, setCookie: null };
	}

	if (dayjs(session.expires_at).isBefore(dayjs())) {
		const supabase = getSupabase(session.access_token);
		const { data, error } = await supabase.auth.refreshSession({
			refresh_token: String(session.refresh_token),
		});

		if (error) {
			return { session: null, setCookie: null };
		}

		const userData = await supabase.auth.getUser();
		// eslint-disable-next-line unused-imports/no-unused-vars
		const { user, ...dataSession } = data.session as Session;

		return {
			session,
			setCookie: await upsetSession({
				request,
				data: {
					...dataSession,
					userId: userData.data.user?.id ?? "",
					theme: "light",
				},
			}),
		};
	}

	return { session, setCookie: null };
}
