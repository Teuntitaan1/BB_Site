import './HomePage.css';

const CurrentDate: Date = new Date();
const BreakUpDate: number = Date.parse("2023-09-28");



interface HomePage {
	SwitchPage: (NewPage : "HomePage" | "GoalPage" | "ProgressPage") => void
}

const HomePage = (props: HomePage) => {

	return (
		<>
			<div>
				<h1>Welkom Teun</h1>
				<p>
					Dit is dag {Math.floor(( CurrentDate.getTime() - BreakUpDate) / (1000* 60 * 60 * 24))} na de breakup,
					We hopen dat je je beter voelt dan gisteren, is dit zo? <button>Houd bij</button>
					<br></br>
					In het menu hieronder kun je verschillende dingen doen:
				</p>
				<ul>
					<li><button onClick={() => {props.SwitchPage("GoalPage")}}>Bekijk mijn doelen</button></li>
					<li><button onClick={() => {props.SwitchPage("ProgressPage")}}>Bekijk mijn voortgang</button></li>
				</ul>
				<p>
					Veel succes kanjer, je kan dit.
				</p>
			</div>
		</>
	)
};

export default HomePage;
