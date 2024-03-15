import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";
import StudentHome from "./components/student/studentHome";
function App() {
  // Assume you have a state or variable to determine the role of the user
  const userRole = "student"; // Example role (you can replace it with dynamic logic)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/studentboard" element={<StudentHome />} />
        <Route path="/chats" element={<ChatPage />} />
        {/* {userRole === "student" && (
          <Route path="/student" element={<ChatPage />} />
        )}
        {userRole === "teacher" && (
          <Route path="/teacher" element={<ChatPage />} />
        )}
        {userRole === "admin" && <Navigate to="/admin" replace />} */}
      </Routes>
    </div>
  );
}

export default App;
