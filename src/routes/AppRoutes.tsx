import { Route, Routes } from "react-router-dom"
import Formulario from "../pages/Formulario";
import Home from "../pages/Home";
import Historial_tickets from "../pages/Historial_tickets";
import Admin from "../pages/admin";
import AdminLogin from "../pages/Home_Admin";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/formulario" element={<Formulario/>} />
            <Route path="/listado" element={<Historial_tickets/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/adminlogin" element={<AdminLogin/>} />
        </Routes>
    )
}

export default AppRoutes