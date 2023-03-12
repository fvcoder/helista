/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createClient } from "@supabase/supabase-js";

import { getEnv } from "../util/getEnv";

export function getSupabase(accessToken?: string) {
	return createClient(getEnv("SUPABASE_URL", true), getEnv("SUPABASE_ANON_KEY", true), {
		auth: {
			autoRefreshToken: false,
			persistSession: false,
		},
		...(accessToken
			? {
					global: {
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					},
			  }
			: {}),
	});
}
