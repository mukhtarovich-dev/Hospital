import "../assets/css/register.css"
import {useEffect, useState} from "react";
import {register} from "../../Server/service/AuthService.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../utils/Utils.js";

export const Register = () => {
    const [firstName, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [prePassword, setPrePassword] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const redirectAdminPanel = () => {
            const token = localStorage.getItem('token');
            const isAuth = isAuthenticated(token)
            if (isAuth) {
                if (localStorage.getItem("role") === "USER") {
                    return navigate('/menu')
                } else {
                    return navigate("/admin")
                }
            }
        }
        redirectAdminPanel()
    }, [])

    const Register = async () => {
        if (prePassword !== password) {
            toast.warn("tasdiqlash paroli bilan parol mos kelamdi")
        }  else {
            try {
                const data = {
                    firstName, lastName, phoneNumber, password
                }
                await register(data)
            } catch (err) {
                console.log("")
            }
        }
    }
    return (
        <div>
            <div className="container " style={{marginLeft: "10%", marginTop: "10%"}}>
                <div className="title">Registratsya</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Imingiz</span>
                                <input type="text" placeholder="Ismingizni kiriitng" value={firstName}
                                       onChange={e => setName(e.target.value)} required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Familiyangiz</span>
                                <input type="text" placeholder="Familiyangizni kiriting" value={lastName}
                                       onChange={e => setLastName(e.target.value)} required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Telefon Raqami</span>
                                <input type="number" placeholder="Telefon yoki userName kiriting" value={phoneNumber}
                                       onChange={e => setPhoneNumber(e.target.value)} required/>
                            </div><div className="input-box">
                                <span className="details">Karta raqami</span>
                                <input type="text" placeholder="Karta raqamingizni kriting" value={cardNumber}
                                       onChange={e => setCardNumber(e.target.value)} required/>
                            </div>
                            <div className="input-box ">
                                <span className="details">Parolingiz</span>
                                <input type="password" placeholder="Parolingizni kriting" value={password}
                                       onChange={e => setPassword(e.target.value)} required/>
                            </div>
                            <div className="input-box" >
                                <span className="details ">Parolni tasdiqlash</span>
                                <input type="password" value={prePassword} onChange={e => setPrePassword(e.target.value)}
                                       placeholder="Parolingizni tasdiqlang" required/>
                            </div>
                        </div>

                        <button onClick={() => Register()} style={{marginLeft: "30%", width: "40%"}}
                                className={"btn btn"}>Registratsya
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}