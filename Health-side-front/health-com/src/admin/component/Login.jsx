import logo from "../assets/images/logo/logo.png"

import {InputMask} from 'primereact/inputmask';
import {useEffect, useState} from "react";
import {isAuthenticated} from "../../utils/Utils.js";
import {Link, useNavigate} from "react-router-dom";
import {LoginHandler} from "../../Server/service/AuthService.js";

export const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        const redirectAdminPanel = () => {
            const token = localStorage.getItem('token');
            const isAuth = isAuthenticated(token)
            if (isAuth) {
                if (localStorage.getItem("role") === "USER") {
                    return navigate('/')
                } else {
                    return navigate("/admin")
                }
            }
        }
        redirectAdminPanel()
    }, [])

    const loginHandler = async () => {
        const data = {phoneNumber, password}
        await LoginHandler(data)
    }
    return (
        <>
            <div className={"container d-flex align-items-center justify-content-center"} style={{height: '100vh'}}>
                <form className={"w-50 p-5 shadow"}>
                    <h1 className={"text-center text-primary mb-3"}>Kirish</h1>
                    <div className="form-outline mb-4">
                        <input type="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                               id="form2Example1" className="form-control"/>
                        <label className="form-label" htmlFor="form2Example1">tel raqam</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                               id="form2Example2" className="form-control"/>
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>
                    <Link className={"text-primary"} style={{marginLeft: "90%"}} to="/auth/register">Register</Link>
                    <button type="button" onClick={() => loginHandler()} className="btn btn-primary btn-block m-1">Sign
                        in
                    </button>
                </form>
            </div>
        </>
    )
}