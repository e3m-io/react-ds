import "./index.scss";

export const parameters = {
	darkMode: {
		classTarget: "html",
		lightClass: "theme-light",
		darkClass: "theme-dark",
		stylePreview: true,
	},
};

export const decorators = [
	(Story) => (
	  <div className="elevation-sunken p-2 h-full border-box overflow-y-auto">
		<Story />
	  </div>
	),
  ]
