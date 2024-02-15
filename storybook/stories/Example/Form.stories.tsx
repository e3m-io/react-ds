// import { fullFormats } from "ajv-formats/dist/formats";
import UserAccountSchema from "../../story-utilities/UserAccount.schema.json";
import { UserFormUISchema } from "../../story-utilities/UserForm.schema";
import { renderUISchema } from "../../FormUtils/renderUISchema";
import { Button } from "../../../src";
import type { JSONSchema7 } from "json-schema";

export default {
	title: "Examples/Form",
};

export const JSONForm = () => {
	return (
		<form
			className="form"
			style={{ maxWidth: "75ch" }}
			onSubmit={(e) => {
				e.preventDefault();
				console.log(Object.fromEntries(new FormData(e.currentTarget)));
			}}
		>
			{renderUISchema(UserAccountSchema as JSONSchema7)(UserFormUISchema)}
			<Button
				className="mt-205 w-full"
				type="submit"
				variant="default"
				weight="primary"
			>
				Submit
			</Button>
		</form>
	);
};
