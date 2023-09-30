import './GoalManager.css';
import {useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const GoalManager = () => {

	const [Goals, SetGoals] = useState<string[]>([]);
	const [GoalAdderValue, SetGoalAdderValue] = useState<string>("");

	useEffect(() => {
		if(window.localStorage.getItem("Goals") !== null) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const Goals: string[] = JSON.parse(window.localStorage.getItem("Goals"));
			SetGoals(Goals);
		}
		else {
			window.localStorage.setItem("Goals", JSON.stringify([]));
		}
	}, []);

	useEffect(() => {
		if (Goals.length !== 0) {
			window.localStorage.setItem("Goals", JSON.stringify(Goals));
		}
	}, [Goals]);

	return (
		<>
			<div>
				<ul>
					{Goals.map((element, index) => <li key={index}>{element}</li>)}
				</ul>
			</div>

			<div>
				<input value={GoalAdderValue} onChange={(event) => {SetGoalAdderValue(event.target.value)}}/>
				<button onClick={() => {SetGoals(CurrentGoals => [...CurrentGoals, GoalAdderValue]);}}>Voeg toe</button>
			</div>
		</>
	)
};

export default GoalManager;
