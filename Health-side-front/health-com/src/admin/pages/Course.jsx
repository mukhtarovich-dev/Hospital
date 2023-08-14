import {useEffect, useState} from "react";
import {BaseConfig} from "../../Server/BaseConfig.js";
import {Api} from "../../Server/Api.js";
import {getCategory, getDoctor} from "../../Server/service/AppService.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export const Course = () => {
    const [course, setCourse] = useState([])
    const getAll = async () => {
        try {
            const res = await BaseConfig.doGet(Api.course)
            setCourse(res.data)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <>
            <AddCourse/>
            <div className={"container m-5"}>
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight" className={"btn btn-success m-5"}>+add
                </button>
            </div>
            {course.length !== 0 ? (
                <table className={"table mt-3"}>
                    <thead>
                    <tr>
                        <th>T/r</th>
                        <th>name</th>
                        <th colSpan={2}>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {course.map((item, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <button onClick={() => setId(item.id)} type="button" className="btn btn-warning"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal">
                                    edit
                                </button>
                            </td>
                            <td>
                                <button onClick={() => setId(item.id)} type="button" className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <h1 className={"text-center text-danger"}>Ma'lumot mavjud emas</h1>
            )}
        </>

    )
}
const AddCourse = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [userId, setDoctorId] = useState('')
    const [category, setCategory] = useState([])
    const [doctor, setDoctor] = useState([])

    const navigate = useNavigate();
    const getAll = async () => {
        try {
            await getDoctor(setDoctor)
            await getCategory(setCategory)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    const addCourse = async () => {
        const data = {
            name, description, userId, categoryId
        }
        try {
            await BaseConfig.doPost(Api.course, data)
            toast.success("kurs saqlandi")
            setTimeout(() => {
                window.location.reload()
            }, 1000)        } catch (err) {
            toast.warn(err.message)
        }
    }

    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Shifokor Qo'shish</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <label htmlFor="name" className={"m-2 text-primary"}>Kurs nomini
                        kiriting</label>
                    <input type="text " value={name} onChange={e => setName(e.target.value)} placeholder={"nomi..."}
                           className={"form-control"} id={"name"}
                           name={"name"}/>
                    <label htmlFor="name" className={"m-2 text-primary"}>Kurs haqida ma'lumot
                        kiriting</label>
                    <textarea name="description" value={description} onChange={e => setDescription(e.target.value)}
                              id="description" cols="10" rows="3"
                              className={"form-control"}></textarea>
                    <label htmlFor="name" className={"m-2 text-primary"}>Kurs bo'limini tanlang</label>

                    <select name="categoryId" value={categoryId}
                            onChange={e => setCategoryId(e.target.value)}
                            id="categoryId"
                            className={"form-select"}>
                        <option value="0" selected={true}>bo'limni tanlang</option>
                        {category.map(item => (
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>
                    <label htmlFor="name" className={"m-2 text-primary"}>Kurs Shifokorini tanlang</label>

                    <select name="categoryId" value={userId}
                            onChange={e => setDoctorId(e.target.value)}
                            id="categoryId"
                            className={"form-select"}>
                        <option value="0" selected={true}>Shifokorni tanlang</option>
                        {doctor.map(item => (
                            <option value={item.id}>{item.firstName}</option>
                        ))}
                    </select>
                </div>
                <button className={"btn btn-primary"} onClick={() => addCourse()}>
                    kurs saqlash
                </button>
            </div>
        </>
    )
}