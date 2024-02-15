import type { FormUISchema } from "../FormUtils/FormUISchema.type";

export const UserFormUISchema = {
	type: "VerticalLayout",
	elements: [
		{
			type: "HorizontalLayout",
			elements: [
				{
					type: "Control",
					scope: "/given_name",
					label: "First name",
					options: {
						autocomplete: "given-name",
					},
				},
				{
					type: "Control",
					scope: "/family_name",
					label: "Last name",
					options: {
						autocomplete: "family-name",
					},
				},
			],
		},
		{
			type: "HorizontalLayout",
			elements: [
				{
					type: "Control",
					scope: "/username",
					label: "Username",
					options: {
						autocomplete: "username"
					}
				},
				{
					type: "Control",
					scope: "/email",
					label: "Email",
					options: {
						autocomplete: "email",
						format: "email",
					},
				},
			],
		},
		{
			type: "Control",
			scope: "/password",
			label: "Password",
			options: {
				autocomplete: "new-password",
				format: "masked",
			},
		},
		{
			type: "Control",
			scope: "/password-confirm",
			label: "Confirm password",
			options: {
				autocomplete: "new-password",
				format: "masked",
			},
		},
		{
			type: "Control",
			scope: "/address/street",
			label: "Street Address",
		},
		{
			type: "HorizontalLayout",
			elements: [
				{
					type: "Control",
					scope: "/address/country",
					label: "Country",
				},
				{
					type: "Control",
					scope: "/address/zip_code",
					label: "Postal code",
				},
			],
		},
		{
			type: "Control",
			scope: "/subscribe",
			label: "Subscribe to product update communications",
			options: {
				format: "checkbox",
			},
		},
		{
			type: "Control",
			scope: "/subscription_type",
			label: "Subscription level",
			options: {
				format: "radio",
			},
		},
		{
			type: "Control",
			scope: "/region",
			label: "Region",
			options: {
				format: "select",
			},
		},
	],
} satisfies FormUISchema;
