import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login signup/Login";
import Profile from "./components/profile/Profile";
import RecipePage from "./components/home/RecipePage";
import SignUp from "./components/login signup/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipe/:id" element={<RecipePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
