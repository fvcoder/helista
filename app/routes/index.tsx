import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "react-router";

import { CardHeader, HomePage, RequireAuth } from "~/lib/ui";
import type { dataSession } from "~/module/auth";
import { requestVerifySession } from "~/module/auth";

export interface indexLoaderI {
	session: dataSession | null;
	userId: string;
}

export const loader: LoaderFunction = async ({ request }) => {
	const { session } = await requestVerifySession({ request });

	return json<indexLoaderI>({
		session,
		userId: session?.userId ?? "",
	});
};

export default function Index() {
	const loader = useLoaderData<indexLoaderI>();

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<CardHeader>{loader.session ? <HomePage /> : <RequireAuth />}</CardHeader>
		</div>
	);
}
