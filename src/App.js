import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
