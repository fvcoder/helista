import { SiDiscord, SiGithub } from "react-icons/si";

import Logo from "~/assets/logo500.png";
import { Button, Card, Text } from "~/lib/ui";

export default function Index() {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<Card>
				<div className="flex flex-col items-center gap-4">
					<img src={Logo} alt="Helista" width={60} />
					<Text as="h1" size="h1">
						Helista
					</Text>
					<Text as="p" size="p">
						Aplicación de videoconferencia
					</Text>
				</div>
				<Button color="discord">
					<SiDiscord />
					<Text size="button">Inicia con Discord</Text>
				</Button>
				<Button color="github">
					<SiGithub />
					<Text size="button">Inicia con Github</Text>
				</Button>
			</Card>
		</div>
	);
}
