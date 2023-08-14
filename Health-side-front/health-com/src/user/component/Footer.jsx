import logo from "../assets/img/logo/logo2_footer.png"
import bg from "../assets/img/gallery/blog1.png"
import {useState} from "react";
import {sendMsg} from "../../Server/service/AppService.js";
export const Footer = () => {
    const [msg, setMsg] = useState('')
    const SendMsg = async () => {
        try {
            await sendMsg(msg)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (err) {
            console.log("")
        }
    }
    return (
        <div id={"footer"} className="footer-area section-bg" data-background={bg}>
            <div className="container">
                <div className="footer-top footer-padding">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-logo">
                                    <a href="/"><img src={logo} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>About Us</h4>
                                    <div className="footer-pera">
                                        <p className="info1">Biz bilan o'z sog'ig'ingiz haqida qayg'uring</p>
                                        <p className="info1">Jamoamiz siz sog'lom bo'ilishingiz uchun harakatda</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-number mb-50">
                                    <h4><span>+998 </span>50-053-70-27</h4>
                                    <p>dilbekk3@gmail.com</p>
                                </div>
                                <div className="footer-form">
                                    <div id="msg">
                                        <form  className="subscribe_form relative mail_part" >
                                            <input type="text" name="msg" id="msg" placeholder="Habar yuborish" onChange={event => setMsg(event.target.value)}   />
                                                <div className="form-icon">
                                                    <button type="button" name="submit" id="msg" onClick={()=>SendMsg()}>
                                                        Send
                                                    </button>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="back-top" >
                <a title="Go to Top" href="#nav"> <i className="fa fa-level-up"></i></a>
            </div>

        </div>
    )
}