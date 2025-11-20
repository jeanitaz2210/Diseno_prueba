import { Route, Routes } from "react-router-dom"
import Formulario from "../pages/Formulario";
import Home from "../pages/Home";
import Historial_tickets from "../pages/Historial_tickets";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/formulario" element={<Formulario/>} />
            <Route path="/listado" element={<Historial_tickets/>} />
        </Routes>
    )
}

export default AppRoutes