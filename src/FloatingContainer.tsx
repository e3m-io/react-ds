import {
	useFloating,
	flip,
	autoUpdate,
	size,
	offset,
	type Placement,
} from "@floating-ui/react-dom";
import { cloneElement, type ReactElement } from "react";
import { FadeIn } from "./FadeIn";

export const FloatingContainer = (props: {
	children: ReactElement;
	isOpen: boolean;
	placement: Placement;
	trigger: ReactElement;
	matchTriggerWidth?: boolean;
}) => {
	const { trigger, children, isOpen, placement, matchTriggerWidth } = props;
	const { x, y, strategy, refs } = useFloating({
		middleware: [
			offset(4),
			flip(),
			matchTriggerWidth &&
				size({
					apply({ rects, elements }) {
						Object.assign(elements.floating.style, {
							width: `${rects.reference.width}px`,
						});
					},
				}),
		].filter(Boolean),
		placement,
		strategy: "fixed",
		whileElementsMounted: autoUpdate,
	});

	return (
		<>
			{cloneElement(trigger, {
				ref: refs.setReference,
			})}
			<FadeIn
				isOpen={isOpen}
				ref={refs.setFloating}
				style={{
					position: strategy,
					top: y ?? 0,
					left: x ?? 0,
				}}
			>
				{children}
			</FadeIn>
		</>
	);
};
