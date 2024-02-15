import { Button } from "../../../src";

export default {
	title: "Components/Button",
};

export const Default = () => {
	return (
		<div className="prose">
			<div className="btn-group">
				<Button weight="primary" variant="normal">
					<i className="fa fa-trash"></i>Test
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="secondary" variant="normal">
					Test
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="tertiary" variant="normal">
					Test
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="secondary" variant="normal">
					Cancel
				</Button>
				<Button weight="primary" variant="normal">
					Save
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="tertiary" variant="normal" className="btn--icon-only">
					<i className="fa fa-trash"></i>
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="tertiary" variant="normal" className="btn--icon-only">
					<i className="fa fa-trash"></i>
				</Button>
				<Button weight="tertiary" variant="normal" className="btn--icon-only">
					<i className="fa fa-save"></i>
				</Button>
			</div>
		</div>
	);
};

Default.storyName = "Button";
