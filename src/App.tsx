import Menus from "./pages/Menus";
import { Routes, Route } from "react-router-dom";
import ModalDefault from "./components/ModalDefault";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import LogIn from "./components/ModalLogin";

function App() {
  return (
    <div className="w-full">
      <Menus />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog" Component={Blogs} />
        <Route path="/login" Component={LogIn} />
      </Routes>
    </div>
  );
}

export default App;
