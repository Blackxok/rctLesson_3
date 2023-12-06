import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <nav>
               <h1>My articls</h1>
               <NavLink to={"/"}>Home</NavLink>
               <NavLink to={"/About"}>About</NavLink>
               <NavLink to={"/Contact"}>Contact</NavLink>
            </nav>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/About" element={<About />} />
               <Route path="/Contact" element={<Contact />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
