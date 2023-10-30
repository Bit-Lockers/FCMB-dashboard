import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import DisputeChatbot from "./pages/chatBot/DisputeChatBot";
// import NewLoanRequest from "./pages/myLoan/NewLoanRequest";
import LoanDetail from "./pages/loanRequestDetail/LoanDetail";
import { useEffect } from "react";
import { authState } from "./context/authContext";
import axios from "axios";
// import ChatBot from "./pages/chatBot/ChatBot";
// import Setting from "./pages/setting/Setting";
// import VerticalTabs from "./pages/profile/Profile";
// import MyLoanDashboard from "./pages/myLoan/MyLoanDashboard";
// import LoanRequests from "./pages/loanRequests/LoanRequests";
// import SendMoney from "./pages/sendMoney/SendMoney";
// import PaymentHistory from "./pages/paymentHistory/PaymentHistory";
function App() {
  const { setUser, user } = authState();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/v1/me", {
          withCredentials: true,
          credentials: "include",
        });
        setUser(data?.user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <Home />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/dashboard" /> : <Registration />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loan" element={<DisputeChatbot />} />
    </Routes>
  );
}

export default App;
