import type { PropsWithChildren } from "react";

import Logo from "~/assets/logo500.png";
import { Card, Text } from "~/lib/ui";

export function CardHeader({ children }: PropsWithChildren<unknown>) {
	return (
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
			{children}
		</Card>
	);
}
