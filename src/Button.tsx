import { forwardRef } from "react";
import { clsx } from "clsx";

export type ButtonProps = {
	variant: "default" | "warning" | "danger";
	weight: "primary" | "secondary" | "tertiary";
};

export const getButtonClasses = (
	props: Pick<ButtonProps, "variant" | "weight">
) => `btn btn--vt-${props.variant} btn--wt-${props.weight}` as const;

export const getIconButtonClasses = (
	props: Pick<ButtonProps, "variant" | "weight">
) => `${getButtonClasses(props)} btn--icon-only` as const;

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
