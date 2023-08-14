import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import {addCategory, getCategory} from "../../Server/service/AppService.js";
import {BaseConfig} from "../../Server/BaseConfig.js";
import {Api} from "../../Server/Api.js";

export const Category = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState([])
    const [id, setId] = useState('')
    const navigate = useNavigate();
    const location = useLocation();


    const editCategory = async () => {
        if (name.trim().length === 0) {
            return toast.warning("name not null")
        }
        try {
            const data = {
                name
            }
            await BaseConfig.doPut(Api.category, id, data)
            toast.success("successfully edited category")
            getAll()
            navigate(location.pathname)
        } catch (e) {
            toast.error("error")
        }
    }

    const deleteCategory = async () => {
        try {
            await BaseConfig.doDelete(Api.category, id)
            toast.success("deleted")
        } catch (err) {
            toast.error("error")
        }
    }

    const getAll = async () => {
        try {
            await getCategory(setCategory)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAll()
    }, [])
    const saveCategory = async () => {
        if (name.trim().length === 0) {
            return toast.warning("name not null")
        }
        try {
            const data = {
                name
            }
            await addCategory(data)
            toast.success("saqlandi")
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (e) {
            toast.error("error")
        }
    }

    return (
        <div className={"container"}>
            <h1 className={"text-center  text-primary"}>Category pages</h1>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                +add
            </button>

            <table className={"table "}>
                <thead>
                <tr>
                    <th>T/r</th>
                    <th>name</th>
                    <th colSpan={2}>action</th>
                </tr>
                </thead>
                <tbody>
                {category.length !== 0 ? (
                    category.map((item, i) => (
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
                    ))) : (<h1 className={"text-center text-danger"}>Ma'lumot mavjud emas</h1>)}
                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">add category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder={"enter category name"} value={name}
                                   onChange={e => setName(e.target.value)} className={"form-control"}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => saveCategory()} type="button" className="btn btn-primary">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editModalLabel">etid category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder={"enter category name"} value={name}
                                   onChange={e => setName(e.target.value)} className={"form-control"}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => editCategory()} type="button" className="btn btn-primary">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">delete category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => deleteCategory()} type="button" className="btn btn-primary">delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}