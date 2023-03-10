/* eslint-disable unused-imports/no-unused-vars */
import type { ComponentPropsWithoutRef, MutableRefObject } from "react";
import { forwardRef, useRef } from "react";
import { HiXCircle } from "react-icons/hi2";

import { styled } from "../stitches.config";

const InputElement = styled("input", {
	backgroundColor: "$gray5",
	color: "$gray11",

	caretColor: "#446BF2",
	outline: "none",

	"&::placeholder": {
		color: "$gray9",
	},
});

const Box = styled("div", {
	display: "inline-flex",
	alignItems: "center",
	backgroundColor: "$gray5",

	gap: "0.5rem",

	padding: "0.5rem 1rem",
	borderRadius: "0.5rem",
});

const Button = styled("button", {
	color: "$gray10",
});

type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(function inputElement(props, ref) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const r = useRef<HTMLInputElement>();

	return (
		<Box>
			<InputElement ref={r as MutableRefObject<HTMLInputElement>} {...props} />
			<Button
				onClick={() => {
					if (r.current) {
						r.current.value = "";
					}
				}}
			>
				<HiXCircle className="text-xl" />
			</Button>
		</Box>
	);
});
