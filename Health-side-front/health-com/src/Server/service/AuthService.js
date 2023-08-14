import {ifStatus} from "../../utils/Utils.js";
import {toast} from "react-toastify";
import {BaseConfig} from "../BaseConfig.js";
import {Api} from "../Api.js";
import axios from "axios";
import {BaseUrl} from "../BaseUrl.js";

export const LoginHandler = async (data) => {
    if (data.phoneNumber.trim().length === 0) {
        return toast.error("tel raqam kiritish shart")
    }
    if (data.password.trim().length === 0) {
        return toast.error("parolda xatolik")
    }
    try {
        const res = await BaseConfig.doPost(Api.login, data)
        if (ifStatus(res.status)) {
            localStorage.setItem("id", res.data.user.id)
            localStorage.setItem("firstName", res.data.user.firstName)
            localStorage.setItem("lastName", res.data.user.lastName)
            localStorage.setItem("phoneNumber", res.data.user.phoneNumber)
            localStorage.setItem("role", res.data.user.roles[0].roleName)
            localStorage.setItem("token", res.data.resToken.body)
            localStorage.setItem("photoId", res.data.user.photoId)
            localStorage.setItem("tokenType", res.data.resToken.tokenType)
            toast.success("kuting...")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
    } catch (err) {
        toast.error(err.message)
    }
}
export const addPhoto = async (photoId) => {
    try {
        await axios.put(BaseUrl + "/auth/addPhoto?photoId=" + photoId + "&&userId=" + localStorage.getItem("id"))
        localStorage.setItem("photoId", photoId)
        toast.success("saqlandi")
    } catch (err) {
        toast.error("xatolik")
    }
}
export const getUser = async (setUser) => {
    try {
        const res = await BaseConfig.doGet("/auth/user")
        setUser(res.data)
    } catch (err) {
        toast.error("xatolik")
    }
}
export const editUser = async (data) => {
    try {
        await BaseConfig.doPutt("/auth/edit", data)
        localStorage.setItem("firstName", data.firstName)
        localStorage.setItem("lastName", data.lastName)
        localStorage.setItem("phoneNumber", data.phoneNumber)
        toast.success("tahrirlandi")
    } catch (err) {
        toast.error("xatolik")
    }
}
export const register = async (data) => {
    try {
        await BaseConfig.doPost("/auth/register", data)
        await LoginHandler(data)
    } catch (err) {
        toast.error(err.message)
    }
}