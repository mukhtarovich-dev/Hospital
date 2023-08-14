import {NotFount} from "../../admin/component/404.jsx";
import {useState} from "react";
import {sendMsg} from "../../Server/service/AppService.js";
import {toast} from "react-toastify";

export const Contact = () => {
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
        localStorage.getItem("token") ? (
            <div className="site-section bg-light" id="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <form method="post">
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <h2 className={"text-center"}>Bizga murojat</h2>
                                        <hr/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-12">
                                    <textarea name="msg" id="msg" onChange={event => setMsg(event.target.value)}
                                              value={msg} className="form-control shadow"
                                              placeholder="Habaringizni yozing!"
                                              cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                            </form>
                            <button onClick={() => SendMsg()} className="btn  btn-primary  py-3 px-5">Yuborish</button>
                        </div>
                        <div className="col-lg-4 ml-auto">
                            <div className="bg-white p-3 p-md-5 shadow">
                                <h3 className="text-black mb-4">Bog'lanish</h3>
                                <ul className="list-unstyled footer-link">
                                    <li className="d-block mb-3">
                                        <span className="d-block text-black">Manzil</span>
                                        <span>Shahrisabz shahar Ipak yo'li ko'chasi</span></li>
                                    <li className="d-block mb-3"><span
                                        className="d-block text-black">Phone:</span><span>+998 50-053-70-27</span>
                                    </li>
                                    <li className="d-block mb-3"><span
                                        className="d-block text-black">Email:</span><span>@dilbekk3@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <NotFount/>
        )

    )
}