import { Button, Input } from "~/lib/ui";

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<Button>bla</Button>
			<Button color="primary">bla</Button>
			<Button color="discord">bla</Button>
			<Button color="github">bla</Button>
			<Button color="success">bla</Button>
			<Input placeholder="hola" />
		</div>
	);
}
