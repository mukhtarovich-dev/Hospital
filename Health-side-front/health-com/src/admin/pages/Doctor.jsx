import {getCategory, getDoctor} from "../../Server/service/AppService.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {BaseConfig} from "../../Server/BaseConfig.js";
import {Api} from "../../Server/Api.js";
import {toast} from "react-toastify";

export const Doctor = () => {
    const [doctor, setDoctor] = useState([])
    const [id, setId] = useState('')
    console.log(doctor)
    const getAll = async () => {
        try {
            await getDoctor(setDoctor)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className={"container m-5"}>
            <AddDoctor/>
            <button className={"btn btn-primary m-5"} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">+
            </button>
            <table className="table mt-3">
                <thead>
                <tr>
                    <th>T/r</th>
                    <th>name</th>
                    <th colSpan={2}>action</th>
                </tr>
                </thead>
                <tbody>
                {doctor.map((item, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{item.firstName}</td>
                        <td>
                            <button onClick={() => setId(item.id)} type="button" className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal">
                                delete
                            </button>
                        </td>
                        <td>
                            <button onClick={() => setId(item.id)} type="button" className="btn btn-danger">
                                see
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
const AddDoctor = () => {
    const [firstName, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigate = useNavigate();
    const addDoctor = async () => {
        const data = {
            firstName, lastName, phoneNumber, password
        }
        try {
            await BaseConfig.doPost(Api.doctor + "/addDoctor", data)
            toast.success("Shifokor saqlandi")
            setTimeout(() => {
                window.location.reload()
            }, 1000)        } catch (err) {
            console.log(err)
            toast.warn(err.message)
        }
    }

    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <label htmlFor="name" className={"m-2 text-primary"}>Shifokor Ismini
                        kiriting</label>
                    <input type="text " value={firstName} onChange={e => setName(e.target.value)}
                           placeholder={"Shifokor ismi"}
                           className={"form-control"} id={"name"}
                           name={"name"}/>
                    <label htmlFor="name" className={"m-2 text-primary"}>shifokor Familiyasini
                        kiriting</label>
                    <input type="text " value={lastName} onChange={e => setLastName(e.target.value)}
                           placeholder={"Familiya"}
                           className={"form-control"} id={"name"}
                           name={"name"}/>
                    <label htmlFor="name" className={"m-2 text-primary"}>Telefon raqamini
                        kiriting</label>
                    <input type="number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                           placeholder={"Telefon Raqam"}
                           className={"form-control"} id={"name"}
                           name={"name"}/><label htmlFor="name" className={"m-2 text-primary"}>Parolni
                    kiriting</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                           placeholder={"Parol"}
                           className={"form-control"} id={"name"}
                           name={"name"}/>
                </div>
                <button className={"btn btn-primary"} onClick={() => addDoctor()}>
                    Shifokor saqlash
                </button>
            </div>
        </>
    )
}