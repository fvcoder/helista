import { json } from "@remix-run/node";
import type { LoaderFunction } from "react-router";

import { requestVerifySession } from "~/lib/session";
import type { Theme } from "~/lib/session/getSesion";
import { getEnv } from "~/lib/util/getEnv";

export type loaderData = {
	theme: Theme;
	env: Record<string, string>;
};

export const RootLoader: LoaderFunction = async ({ request }) => {
	const session = await requestVerifySession({ request });

	return json<loaderData>({
		theme: (session?.theme ?? "light") as Theme,
		env: {
			SUPABASE_URL: getEnv("SUPABASE_URL"),
			SUPABASE_ANON_KEY: getEnv("SUPABASE_ANON_KEY"),
			BASE_URL: new URL(request.url).origin,
		},
	});
};
