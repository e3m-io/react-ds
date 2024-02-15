import { createContext, forwardRef, useContext, useReducer } from "react";
import { clsx } from "clsx";
import { FloatingContainer } from "./FloatingContainer";

const SelectOptionContext = createContext<
	(args: { value: string; disabled: boolean }) => any
>(() => ({}));

type SelectState = {
	activeDescendent: string | null;
	expanded: boolean;
	value: string | null;
};

const initialState: SelectState = {
	activeDescendent: null,
	expanded: false,
	value: null,
};

const selectReducer = (
	state: SelectState = initialState,
	action: any
): SelectState => {
	switch (action.type) {
		case "openMenu":
			return {
				...state,
				expanded: true,
			};
		case "closeMenu":
			return {
				...state,
				expanded: false,
			};
		case "selectItem":
			return {
				...state,
				value: action.value,
			};
		case "selectHighlightedItem":
			return {
				...state,
				value: state.activeDescendent,
			};
		case "toggleMenu":
			return {
				...state,
				expanded: !state.expanded,
			};
		case "setHighlightedValue":
			return {
				...state,
				activeDescendent: action.value,
			};
		default:
			return state;
	}
};

export const Select = forwardRef<
	HTMLDivElement,
	{
		className?: string;
		children?: any;
		disabled?: boolean;
		id: string;
		name: string;
		value?: string;
		onInput?: (value: string) => void;
	}
>((props, ref) => {
	const [selectState, dispatch] = useReducer(selectReducer, initialState);
	const menuId = `${props.id}-listbox`;

	const getOptionProps = (args: any) => {
		const id = `${menuId}-${args.value}`;
		return {
			"aria-selected": selectState.value === args.value,
			id,
			onMouseOver: () => {
				dispatch({
					type: "setHighlightedValue",
					value: args.value,
				});
			},
			onClick: (e: MouseEvent) => {
				e.stopPropagation();
				// e.preventDefault();
				dispatch({ type: "selectHighlightedItem" });
			},
			role: "option",
		};
	};

	return (
		<div ref={ref}>
			<FloatingContainer
				placement="bottom"
				matchTriggerWidth={true}
				isOpen={selectState.expanded}
				trigger={
					<button
						id={props.id}
						className="form-control"
						role="combobox"
						type="button"
						aria-expanded={selectState.expanded}
						onClick={() => {
							dispatch({ type: "toggleMenu" });
						}}
						aria-controls={menuId}
						aria-haspopup="listbox"
						aria-activedescendant={
							selectState.activeDescendent
								? selectState.activeDescendent
								: undefined
						}
						//@ts-ignore
						aria-labelledby={props["aria-labelledby"]}
					>
						{selectState.value}
					</button>
				}
			>
				<ul
					id={menuId}
					className="elevation-raised listbox"
					role="listbox"
					style={{
						borderRadius: "4px",
						overflow: "hidden",
					}}
				>
					<SelectOptionContext.Provider value={getOptionProps}>
						{props.children}
					</SelectOptionContext.Provider>
				</ul>
			</FloatingContainer>

			<input
				role="presentation"
				readOnly
				hidden
				name={props.name}
				value={selectState.value || ""}
			/>
		</div>
	);
});

export const SelectOption = forwardRef<
	HTMLLIElement,
	{
		className?: string;
		children?: any;
		disabled?: boolean;
		value: string;
	}
>((props, ref) => {
	const getOptionProps = useContext(SelectOptionContext);
	return (
		<li
			ref={ref}
			className={clsx("listbox-item", props.className)}
			{...getOptionProps(props as any)}
		>
			{props.children}
		</li>
	);
});
