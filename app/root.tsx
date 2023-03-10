import OSFontCss from "@fontsource/open-sans/index.css";
import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
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
import { useEffect, useState } from "react";

import type { SessionRes } from "./lib/session/getSesion";
import { getThemeSession } from "./lib/session/getSesion";
import { Body, darkTheme } from "./lib/ui";
import tailwind from "./lib/ui/tailwind.css";

type loaderData = SessionRes;
export const loader: LoaderFunction = async ({ request }) => {
	const session = await getThemeSession({ request });

	return json<loaderData>({
		theme: session.theme,
	});
};

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Helista",
	viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: OSFontCss },
		{ rel: "stylesheet", href: tailwind },
	];
};

export default function App() {
	const loader = useLoaderData<loaderData>();
	const [theme, setTheme] = useState(loader.theme === "light");

	useEffect(() => {
		setTheme(loader.theme === "dark");
	}, [loader.theme]);

	return (
		<html lang="es" className={theme ? darkTheme : ""}>
			<head>
				<Meta />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<Links />
			</head>
			<Body className={theme ? darkTheme : ""}>
				<div className={darkTheme} />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</Body>
		</html>
	);
}
