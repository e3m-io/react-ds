import { forwardRef } from "react";
import { clsx } from "clsx";

export const MaskedInput = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"]
>((props, ref) => {
	return (
		<input
			ref={ref}
			{...props}
			type="password"
			className={clsx("form-control", props.className)}
		/>
	);
});
