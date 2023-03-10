import { SiDiscord, SiGithub } from "react-icons/si";

import { Button, Text } from "~/lib/ui";

export function RequireAuth() {
	return (
		<>
			<Button color="discord">
				<SiDiscord />
				<Text size="button">Inicia con Discord</Text>
			</Button>
			<Button color="github">
				<SiGithub />
				<Text size="button">Inicia con Github</Text>
			</Button>
		</>
	);
}
