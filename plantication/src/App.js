import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./Pages/auth/Login";
import Main from "./Pages/Main";
import Group from "./Pages/cultivation/Group";
import PlantTest from "./Pages/test/PlantTest";
import GroupCreate from "./Pages/cultivation/GroupCreate";
import SignUp from "./Pages/auth/SignUp";
import Result from "./Pages/test/Result";
import QuestionPage from "./Pages/test/QuestionPage";
import Challenge from "./Pages/challenge/challenge";
import ChallengeDetail from "./Pages/challenge/ChallengeDetail";
import ChallengeJoin from "./Pages/challenge/ChallengeJoin";
import ChallengeResult from "./Pages/challenge/ChallengeResult";
import MyGroup from "./Pages/cultivation/MyGroup";
import GroupChat from "./Pages/cultivation/GroupChat";
import LoginDetail from "./Pages/auth/LoginDetail";

function App() {
  const [plant, setPlant] = useState([]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/Login" element={<LoginDetail />} />
          <Route path="/cooperate" element={<Group />} />
          <Route path="/cooperate-create" element={<GroupCreate />} />
          <Route path="/cooperate/my" element={<MyGroup />} />
          <Route path="/cooperate/:id/chat" element={<GroupChat />} />
          <Route path="/recommendation" element={<PlantTest />} />
          <Route
            path="/recommendation/question/:questionNumber"
            element={<QuestionPage plant={plant} setPlant={setPlant} />}
          />{" "}
          <Route
            path="/recommendation/result/:plantsName"
            element={<Result />}
          />
          <Route path="/auth-signup" element={<SignUp />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/challenge/:id" element={<ChallengeDetail />} />
          <Route path="/challenge/:id/join" element={<ChallengeJoin />} />
          <Route path="/challenge/:id/result" element={<ChallengeResult />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
