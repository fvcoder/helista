import { styled } from "../stitches.config";

export const Text = styled("p", {
	variants: {
		size: {
			h1: {
				fontSize: "1.13rem",
				lineHeight: "1.2",
				color: "$gray12",
			},
			p: {
				fontSize: "0.88rem",
				lineHeight: "1.2",
				color: "$gray11",
			},
			button: {
				fontSize: "0.88rem",
				lineHeight: "1.2",
				color: "#FCFCFC",
			},
		},
	},
});
