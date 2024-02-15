import { forwardRef } from "react";
import { clsx } from "clsx";

export const TextInput = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"]
>((props, ref) => {
	return (
		<input
			ref={ref}
			{...props}
			className={clsx("form-control", props.className)}
		/>
	);
});
