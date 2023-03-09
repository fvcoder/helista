import { gray, grayDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme } = createStitches({
	theme: {
		colors: {
			...gray,
		},
	},
});

export const darkTheme = createTheme("dark", {
	colors: {
		...grayDark,
	},
});
