import {BaseConfig} from "../BaseConfig.js";
import {Api} from "../Api.js";
import {toast} from "react-toastify";

export const addCategory = async (data) => {
    try {
        await BaseConfig.doPost(Api.category, data)
    } catch (err) {
        toast.warn(err.response.data.message)
    }
}
export const getCourseByCategory = async (Cid, setCourse) => {
    try {
        const res = await BaseConfig.doGet(Api.course + "/category/" + Cid)
        setCourse(res.data)
    } catch (err) {
        console.log(err);
    }
}
export const getCategory = async (setCategory) => {
    try {
        const res = await BaseConfig.doGet(Api.category)
        setCategory(res.data)
    } catch (err) {
        toast.warn(err.response.data.message)
    }

}
export const getOneCategory = async (id, setCategory) => {
    try {
        const res = await BaseConfig.doGet(Api.course+"/one/"+id)
        setCategory(res.data)
    } catch (err) {
        toast.warn(err.response.data.message)
    }
}
export const getAllLesson = async (setLesson) => {
    try {
        const res = await BaseConfig.doGet(Api.course + "/lesson")
        setLesson(res.data)
    } catch (err) {
        toast.warn(err.response.data.message)
    }
}

export const AddLesson = async (data) => {
    try {
        await BaseConfig.doPost(Api.course + "/lesson?userId=" + localStorage.getItem("id"), data)
        toast.success("saqlandi")
    } catch (err) {
        toast.warn(err.response.data.message)
    }
}
export const getDoctor = async (setDoctor) => {
    try {
        const res = await BaseConfig.doGet(Api.doctor + "/doctor")
        setDoctor(res.data)
    } catch (err) {
        toast.warn(err.response.data.message)
    }
}
export const getUserCourse = async (setCourse) => {
    try {
        const res = await BaseConfig.doGet(Api.course + "/get?userId=" + localStorage.getItem("id"))
        setCourse(res.data)
    } catch (err) {
        toast.warn(err.response.data.message)
    }
}
export const UploadPhoto = async (photo) => {
    try {
        const res = await BaseConfig.doPost(Api.uploadPhoto, photo)
        return res.data
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const sendMsg = async (msg) => {
    try {
        const res = await BaseConfig.doPost("/message?message=" + msg + "&&name=" + localStorage.getItem("firstName"))
        toast.success(res.data.message)
    } catch (err) {
        console.log(err)
    }
}
export const getMsg = async (setMsg) => {
    try {
        const res = await BaseConfig.doGet("/message/today")
        setMsg(res.data)
    } catch (err) {
        console.log(err)
    }
}
export const getAllMsg = async (setMsg) => {
    try {
        const res = await BaseConfig.doGet("/message")
        setMsg(res.data)
    } catch (err) {
        console.log(err)
    }
}
