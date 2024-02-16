import type { FormUISchema } from "./FormUISchema.type";
import { renderControlSchema } from "./renderControlSchema";
import type { JSONSchema7 } from "json-schema";

export const renderUISchema =
	(formSchema: JSONSchema7) => (schema: FormUISchema) => {
		switch (schema.type) {
			case "VerticalLayout":
				return (
					<div className="form-vertical">
						{schema.elements.map(renderUISchema(formSchema))}
					</div>
				);
			case "HorizontalLayout":
				return (
					<div className="form-horizontal">
						{schema.elements.map(renderUISchema(formSchema))}
					</div>
				);
			case "Control":
				return renderControlSchema(formSchema)(schema);
		}
	};
