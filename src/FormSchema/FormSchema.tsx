import type { JSONSchema7 } from "json-schema";
import { renderUISchema } from "./renderUISchema";
import type { FormUISchema } from "./FormUISchema.type";

type Props = {
	dataSchema: JSONSchema7;
	uiSchema: FormUISchema;
};
export const FormSchema = (props: Props) => {
	return renderUISchema(props.dataSchema)(props.uiSchema);
};
