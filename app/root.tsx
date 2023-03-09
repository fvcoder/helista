import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";

import { getCssText } from "./lib/ui";

interface rootLoader {
	styles: string;
}

export const loader: LoaderFunction = () => {
	return json<rootLoader>({
		styles: getCssText(),
	});
};

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Helista",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	const { styles } = useLoaderData<rootLoader>();

	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				<style id="css">{styles}</style>
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
