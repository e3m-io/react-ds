import { forwardRef } from "react";
import { clsx } from "clsx";
import {
	getButtonClasses,
	type ButtonProps,
} from "@e3m-io/css-ds/components/Button";

export const Button = forwardRef<
	HTMLButtonElement,
	JSX.IntrinsicElements["button"] & ButtonProps
>((props, ref) => {
	const { variant, weight, ...rest } = props;
	return (
		<button
			ref={ref}
			{...rest}
			className={clsx(props.className, getButtonClasses(props))}
		/>
	);
});
