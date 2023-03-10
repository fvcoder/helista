import { Button } from "../basic/button";
import { Input } from "../basic/input";

export function HomePage() {
	return (
		<>
			<Button color="success">Crear una Reunion</Button>
			<div className="border-b w-2/3 mx-auto" style={{ borderColor: "var(--colors-gray6)" }} />
			<form className="flex gap-2 w-full">
				<Input className="flex-1 w-full" placeholder="Url de la reunion" />
				<Button disabled>Ir</Button>
			</form>
		</>
	);
}
