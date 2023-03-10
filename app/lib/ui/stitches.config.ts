import { gray, grayDark, green } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme } = createStitches({
	theme: {
		colors: {
			...gray,
			...green,
		},
	},
});

export const darkTheme = createTheme("dark", {
	colors: {
		...grayDark,
	},
});
