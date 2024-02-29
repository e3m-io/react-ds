import { useState } from "react";
import { LoadingOverlay, Button } from "../../../src";

export default {
	title: "Components/Loading Overlay",
};

export const Default = () => {
	const [loading, setLoading] = useState(true);
	return (
		<div>
			<Button
				variant="normal"
				weight="primary"
				onClick={() => setLoading((prev) => !prev)}
			>
				{loading ? "Hide" : "Show"}
			</Button>
			<div className="position-relative elevation-sunken">
				<LoadingOverlay visible={loading}>Loading...</LoadingOverlay>
				<h1>Real content here</h1>
			</div>
		</div>
	);
};

Default.storyName = "Loading Overlay";
