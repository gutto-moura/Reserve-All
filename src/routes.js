import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";


export default function Router() {
 return (
   <div>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/reservas" element={<Reservas />}/>
        </Routes>
   </div>
 );
}