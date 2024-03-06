import { Checkbox } from "../../../src";

export default {
	title: "Input Controls/Checkbox",
};

export const Default = () => {
	return (
		<div>
			<div className="elevation-sunken p-1">
				<Checkbox />
			</div>
			<div className="elevation-default p-1">
				<Checkbox />
			</div>
		</div>
	);
};

Default.storyName = "Checkbox";
