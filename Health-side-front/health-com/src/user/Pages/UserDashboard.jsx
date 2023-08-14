import {Navbar} from "../component/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../component/Footer.jsx";

export const UserDashboard = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}