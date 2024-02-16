import UserAccountSchema from "../../story-utilities/UserAccount.schema.json";
import { UserFormUISchema } from "../../story-utilities/UserForm.schema";
import { Button, FormSchema } from "../../../src";

export default {
	title: "Components/FormSchema",
};

export const Default = () => {
	return (
		<form
			className="form"
			style={{ maxWidth: "75ch" }}
			onSubmit={(e) => {
				e.preventDefault();
				console.log(Object.fromEntries(new FormData(e.currentTarget)));
			}}
		>
			<FormSchema dataSchema={UserAccountSchema} uiSchema={UserFormUISchema} />
			<Button
				className="mt-205 w-full"
				type="submit"
				variant="normal"
				weight="primary"
			>
				Submit
			</Button>
		</form>
	);
};

Default.storyName = "FormSchema";
