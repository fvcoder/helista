import { CardHeader, HomePage, RequireAuth } from "~/lib/ui";

export default function Index() {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<CardHeader>{true ? <HomePage /> : <RequireAuth />}</CardHeader>
		</div>
	);
}
