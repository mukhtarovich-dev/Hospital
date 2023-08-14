import {NotFount} from "../../admin/component/404.jsx";
import "../../admin/assets/scss/style.scss"
import rasm1 from "../../admin/assets/img.png"
import rasm from "../assets/img/gallery/blog1.png"
import {getAllLesson, getCategory} from "../../Server/service/AppService.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BaseConfig} from "../../Server/BaseConfig.js";
import {Api} from "../../Server/Api.js";

export const RMenu = () => {
    const [category, setCategory] = useState([])
    const [course, setCourse] = useState([])
    const [lesson, setLesson] = useState([])
    const getAll = async () => {
        try {
            await getCategory(setCategory)
            const res = await BaseConfig.doGet(Api.course)
            await getAllLesson(setLesson)
            setCourse(res.data)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, []);
    return (
        localStorage.getItem("token") ? (
            <>
                <h3 className={"text-center mt-5"}>Bo'limlar</h3>
                <div className="services">
                    <hr/>
                    <div className="container-fluid px-0">
                        <div className="row no-gutters align-items-stretch">
                            {category.map(item => (
                                <div className="col-6 col-sm-6 col-md col-lg h-100">
                                    <Link to={"/categories/" + item.id} className="service">
                                        <div className="icon-wrap">
                                            <span className="fa fa-plus-square"></span>
                                        </div>
                                        <h3>{item.name}</h3>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="site-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 text-center order-lg-2">
                                <div className="img-wrap-1 mb-5">
                                    <img src={rasm} alt="Image" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-4 ml-auto order-lg-1">
                                <h3 className="mb-4 section-heading"><strong>Biz bilan bog'laning</strong></h3>
                                <p className="mb-5">Tugmani bosing va bizga o'zingizni qiynaydigan kassallik haqida
                                    ma'lummot bering biz albatta sizga yechim topishga harakat qilamz</p>

                                <p><Link to={"/contact"} className="btn btn-primary">Bog'lanish</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <h2 className={"text-center m-3 text-primary"}>Kurslar</h2>
                    <div className="container">
                        <div className="row">
                            {course.map(item => (
                                <div className="col-lg-6 mb-4">
                                    <Link to={"/courses/" + item.id} className="d-flex service-2">
                                        <div className="icon-wrap">
                                            <span className="fa fa-tasks"></span>
                                        </div>
                                        <div className="contents">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 text-center mx-auto">
                                <span className="text-primary d-block">Sinovchilar</span>
                                <h2 className="section-heading"><strong>Hursand foydalanuvchilar</strong></h2>
                                <p className="mb-5">Bizning platformada sog'ligini topgan foydalanuvhilar</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="testimonial-2">
                                    <blockquote className="mb-4">
                                        <p>"Platformadan ro'yhatdan o'tib ozimni ancha yaxshi his qila boshladim "</p>
                                    </blockquote>
                                    <div className="d-flex v-card align-items-center">
                                        <img src={rasm1} alt="Image" className="img-fluid mr-3"/>
                                        <div className="author-name">
                                            <span className="d-block">A Sharofat</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="testimonial-2">
                                    <blockquote className="mb-4">
                                        <p>"Manga kerakli barcha mashq va sog'lom hayot yoli shu yerda ekan"</p>
                                    </blockquote>
                                    <div className="d-flex v-card align-items-center">
                                        <img src={rasm1} alt="Image" className="img-fluid mr-3"/>
                                        <div className="author-name">
                                            <span className="d-block">J Toshmurot</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="testimonial-2">
                                    <blockquote className="mb-4">
                                        <p>"Yomon emas raxmat hammaga"</p>
                                    </blockquote>
                                    <div className="d-flex v-card align-items-center">
                                        <img src={rasm1} alt="Image" className="img-fluid mr-3"/>
                                        <div className="author-name">
                                            <span className="d-block">N Jabbor</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : (
            <NotFount/>
        )
    )
}