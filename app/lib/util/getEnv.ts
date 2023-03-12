import { isBrowser } from "./isBrowser";

declare global {
	interface Window {
		env: Record<string, string>;
	}
}

export function getEnv(key: string, requerid = false): string {
	const value = isBrowser() ? window.env[key] : process.env[key];

	if (requerid && !value) {
		throw new Error(`${key} is Requerid`);
	}

	return String(value);
}
