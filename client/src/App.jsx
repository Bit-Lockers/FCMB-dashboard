import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import MyLoanDashboard from "./pages/myLoan/MyLoanDashboard";
import LoanRequests from "./pages/loanRequests/LoanRequests";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loan" element={<LoanRequests />} />
    </Routes>
  );
}

export default App;
