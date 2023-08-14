import {NavbarAdmin} from "../component/Navbar.jsx";
import {SideBar} from "../component/SideBar.jsx";
import {Outlet} from "react-router-dom";
import {FooterAdmin} from "../component/Footer.jsx";
import {NotFount} from "../component/404.jsx";
import {SideBarDoctor} from "../component/SideBarDoctor.jsx";

export const AdminDashboard = () => {
    return (
        localStorage.getItem("token") ? (
            localStorage.getItem("role") === "ADMIN" ? (
                <>
                    <NavbarAdmin/>
                    <SideBar/>
                    <div className={"container"} style={{marginLeft: "300px", marginTop: "60px",width:"75%"}}>
                        <Outlet/>
                    </div>
                    <FooterAdmin/>
                </>
            ) : localStorage.getItem("role") === "DOCTOR" ? (
                <>
                    <NavbarAdmin/>
                    <SideBarDoctor/>
                    <div className={"container"} style={{marginLeft: "300px", marginTop: "60px"}}>
                        <Outlet/>
                    </div>
                    <FooterAdmin/>
                </>
            ) : (
                <NotFount/>
            )
        ) : (
            <NotFount/>
        )
    )
}