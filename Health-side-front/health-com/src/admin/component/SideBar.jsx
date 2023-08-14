import logo1 from "../assets/img.png"
import {Link, useLocation} from "react-router-dom";
import {Api} from "../../Server/Api.js";

export const SideBar = () => {
    const location = useLocation();

    const arr = [
        {name: "Asosiy", link: "/admin", icon: "fa fa-dashboard yellow_color"},
        {name: "Bo'limlar", link: "/admin/category", icon: "fa fa-table purple_color2"},
        {name: "Kurslar", link: "/admin/course", icon: "fa fa-clock-o orange_color"},
        {name: "Shifokorlar", link: "/admin/doctor", icon: "fa fa-user purple_color2"},
        {name: "Foydalanuvchilar", link: "/admin/user", icon: "fa fa-users blue2_color"},
        {name: "Darslar", link: "/admin/lesson", icon: "fa fa-table blue1_color"},
    ]
    return (
        <>
            <nav id="sidebar">
                <div className="sidebar_blog_1">
                    <div className="sidebar_user_info">
                        <Link to={"/admin/my"} className="user_profle_side">
                            <div className="user_img">
                                {localStorage.getItem("photoId")!=null?(
                                    <img className="img-responsive" src={Api.downloadPhoto+localStorage.getItem("photoId")} alt="#"/>
                                ):(
                                    <img className="img-responsive" src={logo1} alt="#"/>
                                )}
                            </div>
                            <div className="user_info">
                                <h6>{localStorage.getItem("firstName")}</h6>
                                <p><span className="online_animation"></span> Online</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="sidebar_blog_2">
                    <h4>Tanlang</h4>
                    <ul className="list-unstyled components">
                        {arr.map(item => (
                            <li className={item.link === location ? ("btn active") : ("")}><Link to={item.link}><i
                                className={item.icon}></i> <span>{item.name}</span></Link></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}