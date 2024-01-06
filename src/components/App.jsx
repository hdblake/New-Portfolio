import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";

export default function App() {
  return (
    <div className="w-full lg:w-4/5 m-auto">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
    </div>
  );
}
