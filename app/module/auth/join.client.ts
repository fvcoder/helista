import { getSupabase } from "~/lib/supabase";
import { getEnv } from "~/lib/util/getEnv";

export async function joinWithOAuth(provider: "github" | "discord"): Promise<void> {
	await getSupabase().auth.signInWithOAuth({
		provider,
		options: {
			redirectTo: `${getEnv("BASE_URL")}/oauth`,
		},
	});
}
