/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { AuthApiError } from "@supabase/supabase-js";
import { v4 } from "uuid";

import { getSupabase } from "~/lib/supabase";

import type { dataSession } from "./../auth";

interface room extends Pick<dataSession, "access_token"> {
	userId: string;
}

export async function createRoom({
	access_token,
	userId,
}: room): Promise<{ owner: string; room: string }> {
	const supabase = getSupabase(access_token);
	const id = v4() as string;

	const { error } = await supabase.from("room").insert({
		id,
		owner: userId,
	});

	if (error) {
		throw new AuthApiError("Se produjo un error", 401);
	}

	return {
		owner: userId,
		room: id,
	};
}
