import {BaseUrl} from "./BaseUrl.js";

export const Api = {
    uploadPhoto: '/attachment/upload',
    downloadPhoto: BaseUrl + '/attachment/download?id=',
    category:"/category",
    course:"/course",
    login:"/auth/login",
    doctor:"/auth"

}