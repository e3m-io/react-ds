import { forwardRef } from "react";
import { clsx } from "clsx";

export const Checkbox = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"]
>((props, ref) => {
	return (
		<input
			ref={ref}
			{...props}
			type="checkbox"
			className={clsx("form-control", props.className)}
		/>
	);
});
