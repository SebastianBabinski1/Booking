import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/Hotel/Hotel";
import "./utils/reset.scss";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Reservations from "./pages/Reservations/Reservations";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
