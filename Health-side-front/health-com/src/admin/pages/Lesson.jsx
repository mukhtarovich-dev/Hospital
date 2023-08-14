import {AddLesson, getAllLesson, getUserCourse, UploadPhoto} from "../../Server/service/AppService.js";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Api} from "../../Server/Api.js";
import {BaseConfig} from "../../Server/BaseConfig.js";

export const Lesson = () => {
    const [lessonText, setName] = useState('')
    const [foodMenu, setLastName] = useState('')
    const [courseId, setCourseId] = useState('')
    const [id, setId] = useState('')
    const [course, setCategory] = useState([])
    const [courses, setCourses] = useState([])
    const [lesson, setLesson] = useState([])
    const getAll = async () => {
        try {
            const res = await BaseConfig.doGet(Api.course)
            setCourses(res.data)
            await getAllLesson(setLesson)
            await getUserCourse(setCategory)
        } catch (err) {
            console.log("")
        }
    }
    const deleteLesson = async () => {
        try {
            await BaseConfig.doDelete(Api.course + "/lesson", id)
        } catch (err) {
            console.log(err)
        }
    }
    const addLesson = async () => {
        const file = new FormData()
        let rasm = document.getElementById("img")
        file.append("rasm", rasm.files[0])
        let photoId = await UploadPhoto(file)
        try {
            const data = {
                foodMenu, lessonText, courseId, photoId
            }
            await AddLesson(data)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <>
            <button className={"btn btn-primary m-5"} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">+
            </button>
            <div className={"d-flex row row-cols-3 "}>
                {lesson.length !== 0 ? (
                    localStorage.getItem("role") === "ADMIN" ? (
                        lesson.map((item1) => (
                            <div className="card  shadow m-4" style={{width: " 18rem"}}>
                                <img src={Api.downloadPhoto + item1.photos[0].photoId} className="card-img-top"
                                     alt="#"/>
                                <div className="card-body">
                                    <p className="card-text">{item1.foodMenu}</p>
                                    <p className="card-text">{item1.lessonText}</p>
                                    <a href="#" onClick={() => setId(item1.id)} data-bs-toggle="modal"
                                       data-bs-target="#deleteModal" className="btn btn-primary">O'chirish</a>
                                </div>
                            </div>
                        ))
                    ) : (
                        course.map((item) => (
                            item.lessons.map((item1, i) => (
                                <div className="card  shadow m-4" style={{width: " 18rem"}}>
                                    <img src={Api.downloadPhoto + item1.photos[0].photoId} className="card-img-top"
                                         alt="#"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Dars kursi: {" " + item.name}</h5>
                                        <p className="card-text">{item1.foodMenu}</p>
                                        <p className="card-text">{item1.lessonText}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            ))

                        )))) : (
                    <h1 className={"text-center text-danger"}>Darslar Mvjud emas</h1>
                )}
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Dars saqlash</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <label htmlFor="name" className={"m-2 text-primary"}>Dars Haqida
                        kiriting</label>
                    <input type="text " value={lessonText} onChange={e => setName(e.target.value)}
                           placeholder={"Dars Haqida"}
                           className={"form-control"} id={"name"}
                           name={"name"}/>
                    <label htmlFor="name" className={"m-2 text-primary"}>Ovqatlanish menusi
                        kiriting</label>
                    <textarea name="menu" id="menu" cols="10" onChange={event => setLastName(event.target.value)}
                              className={"form-control"} rows="4"></textarea>
                    <label htmlFor="name" className={"m-2 text-primary"}>Dars fotosi</label>
                    <input type="file" id={"img"} className={"form-control"}/>
                    <label htmlFor="name" className={"m-2 text-primary"}>Dars kursi</label>
                    <select name="categoryId" value={courseId}
                            onChange={e => setCourseId(e.target.value)}
                            id="categoryId"
                            className={"form-select"}>
                        <option value="0" selected={true}>bo'limni tanlang</option>
                        {course.length === 0 ? (
                            <option value="0" selected={true}> bolim yoq</option>
                        ) : (
                            course.map(item => (
                                <option value={item.id}>{item.name}</option>
                            )))}
                    </select>
                </div>
                <button className={"btn btn-primary"} onClick={() => addLesson()}>
                    Dars saqlash
                </button>
            </div>
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">delete Lesson</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => deleteLesson()} type="button" className="btn btn-primary">delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}