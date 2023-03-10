import OSFontCss from "@fontsource/open-sans/index.css";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { useEffect, useState } from "react";

import { Body, darkTheme, getCssText, getThemeState } from "./lib/ui";
import tailwind from "./lib/ui/tailwind.css";

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
	const [theme, setTheme] = useState(false);

	useEffect(() => {
		setTheme(getThemeState() === "dark");
	}, []);

	return (
		<html lang="es" className={theme ? darkTheme : ""}>
			<head>
				<Meta />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<Links />
				<style
					id="css"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{ __html: getCssText() }}
				></style>
			</head>
			<Body>
				<div className={darkTheme} />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</Body>
		</html>
	);
}
