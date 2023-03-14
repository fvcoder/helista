import { gray, grayDark, green } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme } = createStitches({
	theme: {
		colors: {
			...gray,
			...green,
			grayDark2: grayDark.gray2,
		},
	},
});

export const darkTheme = createTheme("dark", {
	colors: {
		...grayDark,
	},
});
