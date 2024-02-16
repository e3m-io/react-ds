export type LayoutSchema = {
	type: "HorizontalLayout" | "VerticalLayout";
	elements: FormUISchema[];
};

export type ControlSchema = {
	type: "Control";
	scope: string;
	label: string;
	options?: {
		autocomplete?: string;
		format?:
		| "checkbox"
		| "email"
		| "masked"
		| "radio"
		| "text"
		| "select"
		| "multiselect";
		readonly?: boolean;
	};
};

export type FormUISchema = LayoutSchema | ControlSchema;
