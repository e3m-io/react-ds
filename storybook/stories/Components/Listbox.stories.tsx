export default {
	title: "Components/Listbox",
};

export const Default = () => {
	return (
		<ul className="listbox max-w-max elevation-raised">
			<ul className="listbox-group">
				<span className="listbox-group-label">AWS</span>
				<li className="listbox-item">
					<span>
						US West (N. California) <small>us-west-1</small>
					</span>
				</li>
				<li className="listbox-item">
					<span>
						US West (Oregon) <small>us-west-2</small>
					</span>
				</li>
				<li className="listbox-item">
					<span>
						US East (N. Virginia) <small>us-east-1</small>
					</span>
				</li>
				<li className="listbox-item">
					<span>
						US East (Ohio) <small>us-east-2</small>
					</span>
				</li>
				<li className="listbox-item">
					<span>
						Canada (Central) <small>ca-central-1</small>
					</span>
				</li>
			</ul>

			<ul className="listbox-group">
				<span className="listbox-group-label">Azure</span>
				<li className="listbox-item">
					<span>
						East US <small>east-us</small>
					</span>
				</li>
				<li className="listbox-item">
					<span>
						East US 2 <small>east-us-2</small>
					</span>
				</li>
			</ul>
		</ul>
	);
};

Default.storyName = "Listbox";
