import { clsx } from "clsx";
import { CSSTransition } from "react-transition-group";
import {
	cloneElement,
	forwardRef,
	useRef,
	useImperativeHandle,
	type ReactElement,
} from "react";

export const FadeIn = forwardRef<
	HTMLElement,
	{ children: ReactElement; isOpen: boolean; style?: any }
>((props, ref) => {
	const childrenRef = useRef<HTMLElement>(null);
	useImperativeHandle<HTMLElement | null, HTMLElement | null>(
		ref,
		() => childrenRef.current
	);
	return (
		<CSSTransition
			addEndListener={(done) =>
				childrenRef.current!.addEventListener("transitionend", done, false)
			}
			classNames="animation-fadein"
			in={props.isOpen}
			nodeRef={childrenRef}
			unmountOnExit
		>
			{cloneElement(props.children, {
				className: clsx("animation-fadein", props.children.props.className),
				ref: childrenRef,
				style: props.style,
			})}
		</CSSTransition>
	);
});
