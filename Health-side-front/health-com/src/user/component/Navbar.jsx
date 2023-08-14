import logo from "../assets/img/logo/logo.png"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {getDoctor} from "../../Server/service/AppService.js";

export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const logout = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <>
            <header>
                <div id={"nav"} className="header-area ">
                    <div className="main-header header-sticky shadow">
                        <div className="container-fluid">
                            <div className="row align-items-center ">
                                <div className="col-xl-2 col-lg-2 col-md-1">
                                    <div className="logo">
                                        <a href="/">
                                            <img src={logo} alt=""/></a>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="menu-main d-flex align-items-center justify-content-end">
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a href="#home">Asosiy</a></li>
                                                    <li><a href="#about">Haqida</a></li>
                                                    <li><a href="#doctor">Shifokorlar</a></li>
                                                    <li><a href="#footer">Bog'lanish</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                            {localStorage.getItem("token") ? (

                                                <>
                                                    <button className={"btn btn-danger"} onClick={() => logout()}
                                                            style={{marginRight: "20px"}}>logOut
                                                    </button>
                                                    {
                                                        location.pathname!=="/menu"?(
                                                            <Link to={"/menu"} className="btn header-btn">Kabinet</Link>
                                                        ):("")
                                                    }
                                                </>

                                            ) : (

                                                    <Link to={"/auth/login"} className="btn header-btn">Kirish</Link>

                                                )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}