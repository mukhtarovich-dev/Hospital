import logo1 from "../assets/img_1.png"
import {useEffect, useState} from "react";
import {addPhoto, editUser} from "../../Server/service/AuthService.js";
import {toast} from "react-toastify";
import {getAllMsg, getMsg, UploadPhoto} from "../../Server/service/AppService.js";
import {Api} from "../../Server/Api.js";

export const My = () => {
    const [firstName, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const userId = localStorage.getItem("id")
    const Edit = async () => {
        if (firstName.trim().length === 0) {
            setName(localStorage.getItem("firstName"))
        }
        if (lastName.trim().length === 0) {
            setLastName(localStorage.getItem("lastName"))
        }
        if (phoneNumber.trim().length === 0) {
            setPhoneNumber(localStorage.getItem("phoneNumber"))
        }
        if (password.trim().length === 0) {
            toast.warn("parolni kiritish shart")
        } else {

            const data = {
                userId, firstName, lastName, phoneNumber, password
            }
            console.log(data)
            await editUser(data)
        }
    }
    const [msg, setMsg] = useState([])
    const getAll = async () => {
        try {
            await getMsg(setMsg)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    const AddPhoto = async () => {
        try {
            const file = new FormData()
            let rasm = document.getElementById("img")
            file.append("rasm", rasm.files[0])
            let photoId = await UploadPhoto(file)
            await addPhoto(photoId)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="midde_cont">
            <div className="container-fluid">
                <div className="row column_title">
                    <div className="col-md-12">
                        <div className="page_title">
                            <h2>Profile</h2>
                        </div>
                    </div>
                </div>
                <div className="row column1">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="white_shd full margin_bottom_30">
                            <div className="full graph_head">
                                <div className="heading1 margin_0">
                                    <h2>My profile</h2>
                                </div>
                            </div>
                            <div className="full price_table padding_infor_info">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="full dis_flex center_text">
                                            <label className="profile_img" htmlFor={"img"}>
                                                {localStorage.getItem("photoId") != null ? (
                                                    <img width="180" className="roundede-circle"
                                                         src={Api.downloadPhoto + localStorage.getItem("photoId")}
                                                         alt={localStorage.getItem("firstName")}/>
                                                ) : (
                                                    <img width="180" className="roundede-circle" src={logo1} alt={"3"}/>
                                                )}
                                                <input type="file" className={"hidden"} id={"img"}/>
                                                <button onClick={() => AddPhoto()} className={"btn"}>profile suratiga
                                                    qo'shish
                                                </button>
                                            </label>
                                            <div className="profile_contant">
                                                <div className="contact_inner">
                                                    <h3>{localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")}</h3>
                                                    <p><strong>About: </strong>{localStorage.getItem("role")}</p>
                                                    <ul className="list-unstyled">
                                                        <li><i
                                                            className="fa fa-phone"></i> {localStorage.getItem("phoneNumber")}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="user_progress_bar">
                                                    <hr/>
                                                    <br/>
                                                    Tahrirlash
                                                    <div className="input-group m-3">
                                                        <input type="text" aria-label="First name"
                                                               value={firstName} onChange={e => setName(e.target.value)}
                                                               placeholder={localStorage.getItem("firstName")}
                                                               className="form-control"/>
                                                        <input type="text" aria-label="Last name"
                                                               value={lastName}
                                                               onChange={e => setLastName(e.target.value)}
                                                               placeholder={localStorage.getItem("lastName")}
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="input-group m-3">
                                                        <input type="text" aria-label="PhoneNumber"
                                                               value={phoneNumber}
                                                               onChange={e => setPhoneNumber(e.target.value)}
                                                               placeholder={localStorage.getItem("phoneNumber")}
                                                               className="form-control"/>
                                                        <input type="text" aria-label="Last name"
                                                               value={password}
                                                               onChange={e => setPassword(e.target.value)}
                                                               placeholder="password" className="form-control"/>
                                                    </div>
                                                    <div className="m-0 mt-0 mb-0">
                                                        <button className={"btn btn-success"}
                                                                onClick={() => Edit()}
                                                                style={{marginLeft: "40%"}}>Tahrirlash
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="full inner_elements margin_top_30">
                                            <div className="tab_style2">
                                                <div className="tabbar">
                                                    <nav>
                                                        <div className="nav nav-tabs" style={{marginLeft: "40%"}}
                                                             id="nav-tab" role="tablist">
                                                            <a className="nav-item nav-link active" id="nav-home-tab"
                                                               data-toggle="tab" href="/admin/message   " role="tab"
                                                               aria-selected="true">Habarlar</a>
                                                        </div>
                                                    </nav>
                                                    <div className="tab-content" id="nav-tabContent">
                                                        <div className="tab-pane fade show active" id="recent_activity"
                                                             role="tabpanel" aria-labelledby="nav-home-tab">
                                                            <div className="msg_list_main">
                                                                <ul className="msg_list">
                                                                    {msg.map(item => (
                                                                        <li>
                                                                        <span><img src={logo1}
                                                                                   className="img-responsive"
                                                                                   alt="#"/></span>
                                                                            <span>
                                                               <span className="name_user">{item.userName}</span>
                                                               <span className="msg_user">{item.message}</span>
                                                               <span
                                                                   className="time_ago">{item.createAt.substring(11, 16)} AM</span>
                                                               </span>
                                                                        </li>
                                                                    ))}

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="project_worked"
                                                             role="tabpanel" aria-labelledby="nav-profile-tab">
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit
                                                                voluptatem accusantium doloremque laudantium, totam rem
                                                                aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                                quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                                enim ipsam voluptatem quia voluptas sit aspernatur aut
                                                                odit aut fugit, sed quia consequuntur magni dolores eos
                                                                qui ratione voluptatem sequi nesciunt.
                                                            </p>
                                                        </div>
                                                        <div className="tab-pane fade" id="profile_section"
                                                             role="tabpanel" aria-labelledby="nav-contact-tab">
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit
                                                                voluptatem accusantium doloremque laudantium, totam rem
                                                                aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                                quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                                enim ipsam voluptatem quia voluptas sit aspernatur aut
                                                                odit aut fugit, sed quia consequuntur magni dolores eos
                                                                qui ratione voluptatem sequi nesciunt.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}