import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Api} from "../../Server/Api.js";
import {BaseConfig} from "../../Server/BaseConfig.js";
import {Loading} from "../../admin/component/Loading.jsx";

export const GetLesson = () => {
    const id = useParams().id
    const [course, setCourse] = useState([])
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false);
    // console.log(user)

    const getAll = async () => {
        try {
            const res = await BaseConfig.doGet(Api.course + "/one/" + id)
            setCourse(res.data.lessons)
            setLoading(true)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAll()
    }, []);
    return (
        <div className={"container mt-5 d-flex"}>
            {loading ? (
                course.map(item1 => (
                        <div className={"row"}>
                            <div className="col">
                                <div className="post-entry-1 h-100">
                                    <a className="mb-3 d-block">
                                        <img src={Api.downloadPhoto + item1.photos[0].photoId} alt="Image"
                                             className="img-fluid" width={220}/>
                                    </a>
                                    <div className="post-entry-1-contents w-50">
                                        <h2><a>{item1.lessonText}</a></h2>
                                        <p>{item1.foodMenu}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )) : (
                <Loading/>
            )}

        </div>
    )
}