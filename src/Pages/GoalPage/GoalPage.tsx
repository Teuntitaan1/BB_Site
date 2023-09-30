import './GoalPage.css';
import GoalManager from "./Components/Example_Component/GoalManager.tsx";

interface GoalPage {
	SwitchPage: (NewPage : "HomePage" | "GoalPage" | "ProgressPage") => void
}

const GoalPage = (props: GoalPage) => {

	return (
		<>
			<div>
				<div>
					<button onClick={() => {props.SwitchPage("HomePage")}}>Home</button>
				</div>
			<GoalManager></GoalManager>
			</div>
		</>
	)
};

export default GoalPage;
