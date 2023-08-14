import logo1 from "../assets/images/layout_img/user_img.jpg"
import {useEffect, useState} from "react";
import {getUser} from "../../Server/service/AuthService.js";
import {getAllLesson, getCategory, getDoctor, getMsg} from "../../Server/service/AppService.js";
import {Link} from "react-router-dom";

export const AdminMenu = () => {
    const [users, setUser] = useState([])
    const [lesson, setLesson] = useState([])
    const [doctor, setDoctor] = useState([])
    const [category, setCategory] = useState([])
    const [msg, setMsg] = useState([])


    const getAll = async () => {
        try {
            await getAllLesson(setLesson)
            await getMsg(setMsg)
            await getUser(setUser)
            await getDoctor(setDoctor)
            await getCategory(setCategory)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, []);
    return (
        <>
            <div className="midde_cont">
                <div className="container-fluid">
                    <div className="row column_title">
                        <div className="col-md-12">
                            <div className="page_title">
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row column1">
                        <div className="col-md-6 col-lg-3">
                            <div className="full counter_section margin_bottom_30">
                                <div className="couter_icon">
                                    <div>
                                        <i className="fa fa-users yellow_color"></i>
                                    </div>
                                </div>
                                <div className="counter_no">
                                    <div>
                                        <h1>{users.length}</h1>
                                        <p>Foydalanuvchilar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="full counter_section margin_bottom_30">
                                <div className="couter_icon">
                                    <div>
                                        <i className="fa fa-user blue2_color"></i>
                                    </div>
                                </div>
                                <div className="counter_no">
                                    <div>
                                        <h1>{doctor.length}</h1>
                                        <p>Shifokorlar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="full counter_section margin_bottom_30">
                                <div className="couter_icon">
                                    <div>
                                        <i className="fa fa-clock-o blue1_color"></i>
                                    </div>
                                </div>
                                <div className="counter_no">
                                    <div>
                                        <h1>{lesson.length}</h1>
                                        <p>Darslar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="full counter_section margin_bottom_30">
                                <div className="couter_icon">
                                    <div>
                                        <i className="fa fa-cloud-download green_color"></i>
                                    </div>
                                </div>
                                <div className="counter_no">
                                    <div>
                                        <h1>{category.length}</h1>
                                        <p>Bo'limlar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row column1 social_media_section">
                        <div className="col-md-6 col-lg-3">
                            <div className="full socile_icons fb margin_bottom_30">
                                <div className="social_icon">
                                    <i className="fa fa-facebook"></i>
                                </div>
                                <div className="social_cont">
                                    <ul>
                                        <li>
                                            <span><strong>35k</strong></span>
                                            <span>Friends</span>
                                        </li>
                                        <li>
                                            <span><strong>128</strong></span>
                                            <span>Feeds</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="full socile_icons tw margin_bottom_30">
                                <div className="social_icon">
                                    <i className="fa fa-twitter"></i>
                                </div>
                                <div className="social_cont">
                                    <ul>
                                        <li>
                                            <span><strong>584k</strong></span>
                                            <span>Followers</span>
                                        </li>
                                        <li>
                                            <span><strong>978</strong></span>
                                            <span>Tweets</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="full socile_icons linked margin_bottom_30">
                                <div className="social_icon">
                                    <i className="fa fa-linkedin"></i>
                                </div>
                                <div className="social_cont">
                                    <ul>
                                        <li>
                                            <span><strong>758+</strong></span>
                                            <span>Contacts</span>
                                        </li>
                                        <li>
                                            <span><strong>365</strong></span>
                                            <span>Feeds</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="full socile_icons google_p margin_bottom_30">
                                <div className="social_icon">
                                    <i className="fa fa-google-plus"></i>
                                </div>
                                <div className="social_cont">
                                    <ul>
                                        <li>
                                            <span><strong>450</strong></span>
                                            <span>Followers</span>
                                        </li>
                                        <li>
                                            <span><strong>57</strong></span>
                                            <span>Circles</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row column3">
                        <div className="col-md-6">
                            <div className="dark_bg full margin_bottom_30">
                                <div className="full graph_head">
                                    <div className="heading1 margin_0">
                                        <h2>Testimonial</h2>
                                    </div>
                                </div>
                                <div className="full graph_revenue">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="content testimonial">
                                                <div id="testimonial_slider" className="carousel slide"
                                                     data-ride="carousel">
                                                    items -->
                                                    <div className="carousel-inner">
                                                        <div className="item carousel-item active">
                                                            <div className="img-box"><img
                                                                src={logo1} alt=""/></div>
                                                            <p className="testimonial">Sed ut perspiciatis unde omnis
                                                                iste natus error sit voluptatem accusantium doloremque
                                                                laudantium, totam rem aperiam, eaque ipsa quae..</p>
                                                            <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                                                        </div>
                                                        <div className="item carousel-item">
                                                            <div className="img-box"><img
                                                                src={logo1} alt=""/></div>
                                                            <p className="testimonial">Sed ut perspiciatis unde omnis
                                                                iste natus error sit voluptatem accusantium doloremque
                                                                laudantium, totam rem aperiam, eaque ipsa quae..</p>
                                                            <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                                                        </div>
                                                        <div className="item carousel-item">
                                                            <div className="img-box"><img
                                                                src={logo1} alt=""/></div>
                                                            <p className="testimonial">Sed ut perspiciatis unde omnis
                                                                iste natus error sit voluptatem accusantium doloremque
                                                                laudantium, totam rem aperiam, eaque ipsa quae..</p>
                                                            <p className="overview"><b>Michael Stuart</b>Seo Founder</p>
                                                        </div>
                                                    </div>
                                                    <a className="carousel-control left carousel-control-prev"
                                                       href="/" data-slide="prev">
                                                        <i className="fa fa-angle-left"></i>
                                                    </a>
                                                    <a className="carousel-control right carousel-control-next"
                                                       href="/" data-slide="next">
                                                        <i className="fa fa-angle-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="white_shd full margin_bottom_30">
                                <div className="full graph_head">
                                    <div className="heading1 margin_0">
                                        <h2>Progress Bar</h2>
                                    </div>
                                </div>
                                <div className="full progress_bar_inner">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="progress_bar">

                                                <span className="skill" style={{width: "73%"}}>Facebook <span
                                                    className="info_valume">73%</span></span>
                                                <div className="progress skill-bar ">
                                                    <div
                                                        className="progress-bar progress-bar-animated progress-bar-striped"
                                                        role="progressbar" aria-valuenow="73" aria-valuemin="0"
                                                        aria-valuemax="100" style={{width: " 73%"}}>
                                                    </div>
                                                </div>
                                                <span className="skill" style={{width: "62%"}}>Twitter <span
                                                    className="info_valume">62%</span></span>
                                                <div className="progress skill-bar">
                                                    <div
                                                        className="progress-bar progress-bar-animated progress-bar-striped"
                                                        role="progressbar" aria-valuenow="62" aria-valuemin="0"
                                                        aria-valuemax="100" style={{width: " 62%"}}>
                                                    </div>
                                                </div>
                                                <span className="skill" style={{width: "54%"}}>Instagram <span
                                                    className="info_valume">54%</span></span>
                                                <div className="progress skill-bar">
                                                    <div
                                                        className="progress-bar progress-bar-animated progress-bar-striped"
                                                        role="progressbar" aria-valuenow="54" aria-valuemin="0"
                                                        aria-valuemax="100" style={{width: " 54%"}}>
                                                    </div>
                                                </div>
                                                <span className="skill" style={{width: "82%"}}>Google plus <span
                                                    className="info_valume">82%</span></span>
                                                <div className="progress skill-bar">
                                                    <div
                                                        className="progress-bar progress-bar-animated progress-bar-striped"
                                                        role="progressbar" aria-valuenow="82" aria-valuemin="0"
                                                        aria-valuemax="100" style={{width: " 82%"}}>
                                                    </div>
                                                </div>
                                                <span className="skill" style={{width: "48%"}}>Other <span
                                                    className="info_valume">48%</span></span>
                                                <div className="progress skill-bar">
                                                    <div
                                                        className="progress-bar progress-bar-animated progress-bar-striped"
                                                        role="progressbar" aria-valuenow="48" aria-valuemin="0"
                                                        aria-valuemax="100" style={{width: " 48%"}}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row column4 graph">
                        <div className="col-md-6 margin_bottom_30">
                            <div className="dash_blog">
                                <div className="dash_blog_inner">
                                    <div className="dash_head">
                                        <h3><span><i
                                            className="fa fa-calendar"></i> {" " + Date().substring(0, 16)}</span>
                                        </h3>
                                    </div>
                                    <div className="list_cont">
                                        <p>Bugungi Habarlar</p>
                                    </div>
                                    <div className="task_list_main">
                                        <ul className="task_list">
                                            {msg.length === 0 ? (
                                                <h3>Bugun Habarlar Yoq</h3>
                                            ) : (
                                                msg.map((item) => (
                                                    <>
                                                        {

                                                            <li>
                                                                <p>{item.userName}</p>
                                                                <a>{item.message}</a>
                                                                <br/>
                                                                <strong>{item.createAt.substring(11, 16)}AM</strong>
                                                            </li>
                                                        }
                                                    </>
                                                )))}
                                        </ul>
                                    </div>
                                    <div className="read_more">
                                        <div className="center"><Link className="main_bt read_bt" to="/admin/message">Read
                                            More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="dash_blog">
                                <div className="dash_blog_inner">
                                    <div className="dash_head">
                                        <h3><span><i className="fa fa-comments-o"></i> Updates</span><span
                                            className="plus_green_bt"><a href="#">+</a></span></h3>
                                    </div>
                                    <div className="list_cont">
                                        <p>User confirmation</p>
                                    </div>
                                    <div className="msg_list_main">
                                        <ul className="msg_list">
                                            <li>
                                                <span><img src={logo1} className="img-responsive"
                                                           alt="#"/></span>
                                                <span>
                                          <span className="name_user">Herman Beck</span>
                                          <span className="msg_user">Sed ut perspiciatis unde omnis.</span>
                                          <span className="time_ago">12 min ago</span>
                                          </span>
                                            </li>
                                            <li>
                                                <span><img src={logo1} className="img-responsive"
                                                           alt="#"/></span>
                                                <span>
                                          <span className="name_user">John Smith</span>
                                          <span className="msg_user">On the other hand, we denounce.</span>
                                          <span className="time_ago">12 min ago</span>
                                          </span>
                                            </li>
                                            <li>
                                                <span><img src={logo1} className="img-responsive"
                                                           alt="#"/></span>
                                                <span>
                                          <span className="name_user">John Smith</span>
                                          <span className="msg_user">Sed ut perspiciatis unde omnis.</span>
                                          <span className="time_ago">12 min ago</span>
                                          </span>
                                            </li>
                                            <li>
                                                <span><img src={logo1} className="img-responsive"
                                                           alt="#"/></span>
                                                <span>
                                          <span className="name_user">John Smith</span>
                                          <span className="msg_user">On the other hand, we denounce.</span>
                                          <span className="time_ago">12 min ago</span>
                                          </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="read_more">
                                        <div className="center"><a className="main_bt read_bt" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}