import {useState} from "react";

import './App.css';
import HomePage from "./Pages/Home_Page/HomePage.tsx";
import GoalPage from "./Pages/GoalPage/GoalPage.tsx";


const App = () => {

    const [CurrentProgramState, SetCurrentProgramState] = useState<"HomePage" | "GoalPage" | "ProgressPage">("HomePage");

    function SwitchPage(NewPage : "HomePage" | "GoalPage" | "ProgressPage"): void {
        console.log(`Switched page to ${NewPage}`);
        SetCurrentProgramState(NewPage);
    }

    if (CurrentProgramState === "HomePage") {
        return <HomePage SwitchPage={SwitchPage}></HomePage>;
    }
    else if(CurrentProgramState === "GoalPage") {
        return <GoalPage SwitchPage={SwitchPage}></GoalPage>
    }

};

export default App;
