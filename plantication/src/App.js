import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "../src/pages/auth/Login";
import Main from "../src/pages/Main";
import Group from "./pages/cultivation/Group";
import PlantTest from "./pages/test/PlantTest";
import GroupCreate from "./pages/cultivation/GroupCreate";
import SignUp from "./pages/auth/SignUp";
import Result from "./pages/test/Result";
import QuestionPage from "./pages/test/QuestionPage";
import Challenge from "./pages/challenge/challenge";
import ChallengeDetail from "./pages/challenge/ChallengeDetail";
import ChallengeJoin from "./pages/challenge/ChallengeJoin";
import ChallengeResult from "./pages/challenge/ChallengeResult";
import MyGroup from "./pages/cultivation/MyGroup";
import GroupChat from "./pages/cultivation/GroupChat";

function App() {
  const [plant, setPlant] = useState([]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Login />} />
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
