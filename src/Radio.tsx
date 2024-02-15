import { forwardRef } from "react";
import { clsx } from "clsx";

export const Radio = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"]
>((props, ref) => {
	return (
		<input
			ref={ref}
			{...props}
			type="radio"
			className={clsx("form-control", props.className)}
		/>
	);
});
