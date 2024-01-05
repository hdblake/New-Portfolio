import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "../pages/Home.jsx";

export default function App() {
  return (
    <div className="w-full lg:w-4/5 m-auto">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />}></Route>
        </Routes>
      </main>
    </div>
  );
}
