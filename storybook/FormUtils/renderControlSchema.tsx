import { useId } from "react";
import {
	Checkbox,
	MaskedInput,
	Radio,
	Select,
	SelectOption,
	TextInput,
} from "../../src";
import type { ControlSchema } from "./FormUISchema.type";
import type { JSONSchema7 } from "json-schema";
import jsonpointer from "jsonpointer";

type ControlRenderer = (
	getControlSchema: () => ControlSchema,
	getFieldSchema: () => JSONSchema7
) => JSX.Element;

const getCommonPropsFromControlSchema = (controlSchema: ControlSchema) => ({
	autoComplete: controlSchema.options?.autocomplete,
	name: controlSchema.scope,
});

const checkboxRenderer: ControlRenderer = (getControlSchema) => {
	const controlSchema = getControlSchema();
	return (
		<label className="form-label-horizontal">
			<Checkbox {...getCommonPropsFromControlSchema(controlSchema)} />
			{controlSchema.label}
		</label>
	);
};

const emailRenderer: ControlRenderer = (getControlSchema) => {
	const controlSchema = getControlSchema();
	return (
		<label>
			{controlSchema.label}
			<TextInput
				type="email"
				{...getCommonPropsFromControlSchema(controlSchema)}
			/>
		</label>
	);
};

const maskedRenderer: ControlRenderer = (getControlSchema) => {
	const controlSchema = getControlSchema();
	return (
		<label>
			{controlSchema.label}
			<MaskedInput {...getCommonPropsFromControlSchema(controlSchema)} />
		</label>
	);
};

const radioRenderer: ControlRenderer = (getControlSchema, getFieldSchema) => {
	const controlSchema = getControlSchema();
	const fieldSchema = getFieldSchema();
	let options;
	if (fieldSchema.enum) {
		options = fieldSchema.enum.map((value) => {
			if (typeof value !== "string") {
				return null;
			}
			return (
				<label className="form-label-horizontal">
					<Radio
						value={value}
						{...getCommonPropsFromControlSchema(controlSchema)}
					/>
					{value}
				</label>
			);
		});
	} else if (fieldSchema.oneOf) {
		options = fieldSchema.oneOf.map((schema) => {
			if (typeof schema === "boolean" || typeof schema.const !== "string") {
				return null;
			}
			return (
				<label className="form-label-horizontal">
					<Radio
						value={schema.const}
						{...getCommonPropsFromControlSchema(controlSchema)}
					/>
					{schema.title || schema.const}
				</label>
			);
		});
	}
	return (
		<fieldset>
			<legend>{controlSchema.label}</legend>
			<div className="flex flex-col">{options}</div>
		</fieldset>
	);
};

const textRenderer: ControlRenderer = (getControlSchema) => {
	const controlSchema = getControlSchema();
	return (
		<label>
			{controlSchema.label}
			<TextInput {...getCommonPropsFromControlSchema(controlSchema)} />
		</label>
	);
};

const selectRenderer: ControlRenderer = (getControlSchema, getFieldSchema) => {
	const controlSchema = getControlSchema();
	const fieldSchema = getFieldSchema();
	const commonProps = { ...getCommonPropsFromControlSchema(controlSchema) };
	let options;
	if (fieldSchema.enum) {
		options = fieldSchema.enum.map((value) => {
			if (typeof value !== "string") {
				return null;
			}
			return (
				<SelectOption value={value} {...commonProps}>
					{value}
				</SelectOption>
			);
		});
	} else if (fieldSchema.oneOf) {
		options = fieldSchema.oneOf.map((schema) => {
			if (typeof schema === "boolean" || typeof schema.const !== "string") {
				return null;
			}
			return (
				<SelectOption value={schema.const} {...commonProps}>
					{schema.title || schema.const}
				</SelectOption>
			);
		});
	}
	const id = useId();
	return (
		<label id={id}>
			{controlSchema.label}
			<Select id={`${id}-control`} {...commonProps} aria-labelledby={id}>
				{options}
			</Select>
		</label>
	);
};

export const BuiltinRenderers = new Map([
	["checkbox", checkboxRenderer],
	["email", emailRenderer],
	["masked", maskedRenderer],
	["radio", radioRenderer],
	["text", textRenderer],
	["select", selectRenderer],
]);

export const renderControlSchema =
	(formSchema: JSONSchema7) => (controlSchema: ControlSchema) => {
		const getControlSchema = () => controlSchema;
		const getFieldSchema = () =>
			jsonpointer.get(
				formSchema.properties,
				controlSchema.scope
			) as JSONSchema7;
		const renderer = BuiltinRenderers.get(
			controlSchema.options?.format || "text"
		);
		if (!renderer) {
			return <p>Unsupported input type</p>;
		}

		return renderer(getControlSchema, getFieldSchema);
	};
