import type { LoaderFunction } from "@remix-run/node";
import { json } from "react-router";

import type { dataSession } from "~/lib/session";
import { requestVerifySession } from "~/lib/session";

export interface indexLoaderI {
	session: dataSession | null;
}

export const indexLoader: LoaderFunction = async ({ request }) => {
	return json<indexLoaderI>({
		session: await requestVerifySession({ request }),
	});
};
