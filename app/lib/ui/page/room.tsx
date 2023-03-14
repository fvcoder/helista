import type { PropsWithChildren } from "react";

import { styled } from "../stitches.config";

const Layout = styled("main", {
	position: "relative",
	width: "100vw",
	height: "100vh",
	backgroundColor: "$grayDark2",
});

export function RoomLayout({ children }: PropsWithChildren<unknown>) {
	return <Layout>{children}</Layout>;
}
