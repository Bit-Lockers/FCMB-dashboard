import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import LoanDetail from "./pages/loanRequestDetail/LoanDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/detail" element={<LoanDetail />} />
    </Routes>
  );
}

export default App;
