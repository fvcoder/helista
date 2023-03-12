import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useFetcher, useLocation } from "@remix-run/react";
import { useEffect } from "react";

import { getSupabase } from "~/lib/supabase";
import { Text } from "~/lib/ui";
import { getParameterByName } from "~/lib/util/getParameterByName";
import { upsetSession } from "~/module/auth";

export const action: ActionFunction = async ({ request }) => {
	const f = await request.formData();
	const refresh = f.get("refreshToken");
	const redirectTo = String(f.get("redirectTo") ?? "/");

	if (!refresh && typeof refresh !== "string") {
		return json({ msg: "No se encontro ninguna sesion " });
	}

	const supabase = getSupabase();

	const { data, error } = await supabase.auth.refreshSession({ refresh_token: String(refresh) });

	if (error) {
		return json({ msg: error.message });
	}

	if (data.session) {
		// eslint-disable-next-line unused-imports/no-unused-vars
		const { user, ...dataSession } = data.session;

		const userData = await supabase.auth.getUser();

		return redirect(redirectTo, {
			headers: {
				"Set-Cookie": await upsetSession({
					request,
					data: { ...dataSession, theme: "light", userId: userData.data.user?.id ?? "" },
				}),
			},
		});
	}

	return json({ msg: "No se encontro ninguna sesion " });
};

export default function OauthPage() {
	const location = useLocation();
	const redirectTo = getParameterByName("redirectTo", location.hash) ?? "/";
	const refreshToken = getParameterByName("refresh_token", location.hash);
	const fetcher = useFetcher<{ msg: string }>();

	useEffect(() => {
		if (refreshToken && fetcher.type === "init") {
			const data = new FormData();
			data.append("refreshToken", refreshToken);
			data.append("redirectTo", redirectTo);
			fetcher.submit(data, { method: "post", action: "/oauth" });
		}
	}, [fetcher, redirectTo, refreshToken]);

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Text size="p">{fetcher.data?.msg ? fetcher.data.msg : "Verificando Sesion"}</Text>
		</div>
	);
}
