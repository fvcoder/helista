import type { EntryContext } from "@remix-run/node"; // or cloudflare/deno
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

import { getCssText } from "./lib/ui";

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext
) {
	const markup = renderToString(<RemixServer context={remixContext} url={request.url} />).replace(
		/<\/head>/,
		`<style>${getCssText()}</style></head>`
	);

	responseHeaders.set("Content-Type", "text/html");

	return new Response(`<!DOCTYPE html>${markup}`, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
