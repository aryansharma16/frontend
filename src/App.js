import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";
import StudentHome from "./components/student/studentHome";
import WelcomePage from "./pages/WelcomePage";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/sign" element={<Homepage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="studentboard" element={<StudentHome />} />
          <Route path="chats" element={<ChatPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
