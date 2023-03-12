/* eslint-disable @typescript-eslint/no-misused-promises */
import { SiDiscord, SiGithub } from "react-icons/si";

import { Button, Text } from "~/lib/ui";
import { joinWithOAuth } from "~/module/auth/join.client";

export function RequireAuth() {
	return (
		<>
			<Button color="discord">
				<SiDiscord />
				<Text
					size="button"
					onClick={async () => {
						await joinWithOAuth("discord");
					}}
				>
					Inicia con Discord
				</Text>
			</Button>
			<Button color="github">
				<SiGithub />
				<Text
					size="button"
					onClick={async () => {
						await joinWithOAuth("github");
					}}
				>
					Inicia con Github
				</Text>
			</Button>
		</>
	);
}
