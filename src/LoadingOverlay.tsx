import { useRef, type PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";

export const LoadingOverlay = (
	props: PropsWithChildren<{ visible: boolean }>
) => {
	const nodeRef = useRef<HTMLDivElement>(null);
	return (
		<CSSTransition
			addEndListener={(done) =>
				nodeRef.current!.addEventListener("transitionend", done, false)
			}
			appear
			classNames="sequential-fade-in"
			in={props.visible}
			nodeRef={nodeRef}
			unmountOnExit
		>
			<div
				className="sequential-fade-in"
				ref={nodeRef}
				style={{ position: "absolute", inset: "0", background: "inherit" }}
			>
				<div>{props.children}</div>
			</div>
		</CSSTransition>
	);
};
