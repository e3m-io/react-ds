import { Button } from "../../../src";

export default {
	title: "Components/Button",
};

export const Default = () => {
	return (
		<div className="prose">
			<div className="btn-group">
				<Button weight="primary" variant="default">
					<i className="fa fa-trash"></i>Test
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="secondary" variant="default">
					Test
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="tertiary" variant="default">
					Test
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="secondary" variant="default">
					Cancel
				</Button>
				<Button weight="primary" variant="default">
					Save
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="tertiary" variant="default" className="btn--icon-only">
					<i className="fa fa-trash"></i>
				</Button>
			</div>

			<div className="btn-group">
				<Button weight="tertiary" variant="default" className="btn--icon-only">
					<i className="fa fa-trash"></i>
				</Button>
				<Button weight="tertiary" variant="default" className="btn--icon-only">
					<i className="fa fa-save"></i>
				</Button>
			</div>
		</div>
	);
};

Default.storyName = "Button";
