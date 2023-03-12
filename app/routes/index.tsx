import { useLoaderData } from "@remix-run/react";

import { CardHeader, HomePage, RequireAuth } from "~/lib/ui";
import type { indexLoaderI } from "~/module/auth/loader/index.loader";
import { indexLoader } from "~/module/auth/loader/index.loader";

export const loader = indexLoader;

export default function Index() {
	const loader = useLoaderData<indexLoaderI>();

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<CardHeader>{loader.session ? <HomePage /> : <RequireAuth />}</CardHeader>
		</div>
	);
}
