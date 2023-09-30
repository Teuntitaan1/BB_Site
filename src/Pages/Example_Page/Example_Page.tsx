import './Example_Page.css';

interface Example_Page {
	SwitchPage: (NewPage : "HomePage" | "GoalPage" | "ProgressPage") => void
}

const Example_Page = (props: Example_Page) => {

	return (
		<>
			<div>
			</div>
		</>
	)
};

export default Example_Page;
