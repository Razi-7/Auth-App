import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sigin from "./pages/Sigin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Sigin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
