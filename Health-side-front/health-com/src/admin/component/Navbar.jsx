import logo from "../assets/img.png"
import {Link, useNavigate} from "react-router-dom";
import {Api} from "../../Server/Api.js";
import {useEffect, useState} from "react";
import {getAllMsg} from "../../Server/service/AppService.js";

export const NavbarAdmin = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }
    const [msg, setMsg] = useState([])
    const getAll = async () => {
        try {
            await getAllMsg(setMsg)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <>
            <div className="topbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="full">
                        <button type="button" id="sidebarCollapse" className="sidebar_toggle"><i
                            className="fa fa-bars"></i></button>
                        <div className="right_topbar">
                            <div className="icon_info">
                                <ul>
                                    <li><a href="/admin/message"><i className="fa fa-bell-o"></i><span
                                        className="badge">{msg.length}</span></a></li>
                                    <li><Link to="/admin/my"><i className="fa fa-cog"></i></Link></li>
                                    <li>
                                        <Link to="/admin/message"><i className="fa fa-envelope-o"></i>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="user_profile_dd">
                                    <li>
                                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            {localStorage.getItem("photoId")!=null?(
                                                <img className="img-responsive rounded-circle" src={Api.downloadPhoto+localStorage.getItem("photoId")} alt="#"/>
                                            ):(
                                                <img className="img-responsive rounded-circle" src={logo} alt="#"/>
                                            )}

                                            <span
                                            className="name_user">{localStorage.getItem("firstName") + " " +localStorage.getItem("lastName")}</span></a>
                                        <div className="dropdown-menu">
                                            <Link to={"/admin/my"} className="dropdown-item">My
                                                Profile</Link>
                                            <a className="dropdown-item" href="#"
                                               onClick={() => logout()}><span>Log Out</span> <i
                                                className="fa fa-sign-out"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}