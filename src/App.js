import { Route, Router, Routes } from "react-router-dom";
import AgentPage from "./components/pages/AgentPage";
import HandlePagesAccess from "./components/pages/HandlePagesAccess";
import Login from "./components/pages/Login";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="pageAccess" element={<HandlePagesAccess />} />
      <Route path="agentpage" element={<AgentPage />} />
    </Routes>
  );
}

export default App;
