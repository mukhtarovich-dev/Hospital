import rasm from "../assets/img/gallery/about2.png"
import rasm1 from "../assets/img/gallery/about1.png"
import styleImg from "../assets/img/gallery/gallery1.png"
import styleImg1 from "../assets/img/gallery/gallery2.png"
import styleImg3 from "../assets/img/gallery/gallery3.png"
import styleImg4 from "../assets/img/gallery/gallery4.png"
import styleImg5 from "../assets/img/gallery/gallery5.png"
import styleImg6 from "../assets/img/gallery/gallery6.png"
import {getCategory, getDoctor} from "../../Server/service/AppService.js";
import {useEffect, useState} from "react";
import {Api} from "../../Server/Api.js";
import {toast} from "react-toastify";

export const Menu = () => {
    const [doctor, setDoctor] = useState([])
    const getAll = async () => {
        try {
            await getDoctor(setDoctor)
        } catch (err) {
            console.log("")
        }
    }
    const getToast = () => {
        toast.warn("Tanishi uchun ro'yhatdan o'ting")
    }
    useEffect(() => {
        getAll()
    }, []);
    return (
        <>
            <div className="about-area section-padding2">
                <div className="container" id={"home"}>
                    <div className="row">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-caption mb-50">
                                <div className="section-tittle section-tittle2 mb-35">
                                    <span>Bizning platforma haqida</span>
                                    <h2>Bizning online shifoxonaga hush kelibsiz</h2>
                                </div>
                                <p>Bizning platformada siz ozingizni qiynaydigan kassallikga tashxis
                                    olishingiz va mualajalarni uy sharoitida qabul qilishingiz mumkin!</p>
                                <div className="about-btn1 mb-30">
                                    <a href="#doctor" className="btn about-btn">Shifokorlar<i
                                        className="ti-arrow-right"></i></a>
                                </div>
                                <div className="about-btn1 mb-30">
                                    <a href="#about" className="btn about-btn2">Bo'limlar<i
                                        className="ti-arrow-right"></i></a>
                                </div>
                                <div className="about-btn1 mb-30">
                                    {localStorage.getItem("token") ? (
                                        <a href="/" className="btn about-btn2">Kurslar<i
                                            className="ti-arrow-right"></i></a>
                                    ) : (
                                        <a href="/auth/login" className="btn about-btn2">Kurslar<i
                                            className="ti-arrow-right"></i></a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img ">
                                <div className="about-font-img d-none d-lg-block">
                                    <img src={rasm} alt=""/>
                                </div>
                                <div className="about-back-img ">
                                    <img src={rasm1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={"about"} className="department_area section-padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle text-center mb-100">
                                <span>Bizning Bo'limlar</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" onClick={()=>getToast()}>
                            <div className="depart_ment_tab mb-30">
                                <ul className="nav" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#/"
                                           role="tab" aria-controls="home" aria-selected="true">
                                            <i className="flaticon-teeth"></i>
                                            <h4>Dentistry</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#/"
                                           role="tab" aria-controls="profile" aria-selected="false">
                                            <i className="flaticon-cardiovascular"></i>
                                            <h4>Cardiology</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#/"
                                           role="tab" aria-controls="contact" aria-selected="false">
                                            <i className="flaticon-ear"></i>
                                            <h4>ENT Specialists</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Astrology-tab" data-toggle="tab" href="#/"
                                           role="tab" aria-controls="contact" aria-selected="false">
                                            <i className="flaticon-bone"></i>
                                            <h4>Astrology</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Neuroanatomy-tab" data-toggle="tab"
                                           href="#/"
                                           role="tab" aria-controls="contact" aria-selected="false">
                                            <i className="flaticon-lung"></i>
                                            <h4>Neuroanatomy</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#/"
                                           role="tab"
                                           aria-controls="contact" aria-selected="false">
                                            <i className="flaticon-cell"></i>
                                            <h4>Blood Screening</h4>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery-area section-padding30">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-tittle text-center mb-100">
                                <span>Hizmat ko'rsatish</span>
                                <h2>Ish holatidan lavha</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img big-img"
                                             style={{backgroundImage: `url(${styleImg})`}}></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img small-img"
                                             style={{backgroundImage: `url(${styleImg6})`}}
                                        ></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img small-img"
                                             style={{backgroundImage: `url(${styleImg1})`}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img small-img"
                                             style={{backgroundImage: `url(${styleImg3})`}}></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img small-img"
                                             style={{backgroundImage: `url(${styleImg4})`}}></div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img big-img"
                                             style={{backgroundImage: `url(${styleImg5})`}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={"doctor"} className="team-area section-padding30">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-tittle text-center mb-100">
                                <span>Bizning Shifokorlar</span>
                                <h2>Mutahasislar</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {doctor.length === 0 ? (
                            <h1>no doctors</h1>
                        ) : (
                            doctor.map(item => (
                                <div onClick={()=>getToast()} className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                    <div className="single-team mb-30">
                                        <div className="team-img">
                                            <img width={"100"} height={"280"} src={Api.downloadPhoto + item.photoId}
                                                 alt=""/>
                                        </div>
                                        <div className="team-caption">
                                            <h3><a href="#">{item.firstName}</a></h3>
                                            <span>{item.lastName}</span>
                                            <div className="team-social">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}


                    </div>
                </div>
            </div>

        </>
    )
}