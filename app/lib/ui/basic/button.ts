import { styled } from "./../stitches.config";

export const Button = styled("button", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.5rem",
	padding: "0.5rem 1rem",
	fontWeight: 400,
	fontSize: "0.88rem",
	lineHeight: 1,
	border: "none",
	borderRadius: "0.25rem",
	"&:disabled": {
		userSelect: "none",
		opacity: 0.5,
	},
	variants: {
		color: {
			primary: {
				backgroundColor: "#0091FF",
				color: "#fcfcfc",
			},
			discord: {
				backgroundColor: "#5865F2",
				color: "#fcfcfc",
			},
			github: {
				backgroundColor: "#171717",
				color: "#fcfcfc",
			},
			success: {
				backgroundColor: "$green9",
				color: "#fcfcfc",
			},
		},
	},
	defaultVariants: {
		color: "primary",
	},
});
