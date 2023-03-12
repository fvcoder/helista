import { session } from "./session";

// Theme
export enum Theme {
	light = "light",
	dark = "dark",
}
const ThemeArray: Array<Theme> = Object.values(Theme);

// out
export interface SessionRes {
	theme: Theme;
}

export async function getThemeSession({ request }: { request: Request }): Promise<SessionRes> {
	const data: SessionRes = {
		theme: Theme.light,
	};

	const cookie = await session.getSession(request.headers.get("Cookie"));

	// validar theme
	const cTheme = cookie.get("theme") as string;
	if (typeof cTheme === "string" && ThemeArray.includes(cTheme as Theme)) {
		data.theme = cTheme as Theme;
	}

	return data;
}
