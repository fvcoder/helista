/* eslint-disable @typescript-eslint/no-misused-promises */
import { useLoaderData, useNavigate } from "@remix-run/react";

import { createRoom } from "~/module/room";
import type { indexLoaderI } from "~/routes";

import { Button } from "../basic/button";
import { Input } from "../basic/input";

export function HomePage() {
	const navigate = useNavigate();
	const { userId, session } = useLoaderData<indexLoaderI>();

	return (
		<>
			<Button
				color="success"
				onClick={async () => {
					const room = await createRoom({
						access_token: String(session?.access_token),
						userId: String(userId),
					});
					navigate(`/${room.room}`);
				}}
			>
				Crear una Reunion
			</Button>
			<div className="border-b w-2/3 mx-auto" style={{ borderColor: "var(--colors-gray6)" }} />
			<form className="flex gap-2 w-full">
				<Input className="flex-1 w-full" placeholder="Url de la reunion" />
				<Button disabled>Ir</Button>
			</form>
		</>
	);
}
