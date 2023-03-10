export function getThemeState(): "light" | "dark" {
	if (typeof window === "undefined") {
		return "dark";
	}

	const t = window.localStorage.getItem("theme");

	if (t === "light") {
		return "light";
	}
	if (t === "dark") {
		return "dark";
	}
	window.localStorage.setItem("theme", "light");

	return "light";
}
