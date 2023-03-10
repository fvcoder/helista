import { styled } from "../stitches.config";

export const Card = styled("div", {
	minWidth: "340px",
	backgroundColor: "$gray2",

	display: "flex",
	flexDirection: "column",
	gap: "1rem",

	padding: "1rem",

	borderRadius: "0.75rem",
});
