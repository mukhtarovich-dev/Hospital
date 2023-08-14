import {Link, useParams} from "react-router-dom";
import {getCourseByCategory} from "../../Server/service/AppService.js";
import {useEffect, useState} from "react";

export const Categories = () => {
    const id = useParams().id;
    const [course, setCourse] = useState([])
    const getAll = async () => {
        try {
            await getCourseByCategory(id, setCourse)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, []);
    return (
        <>
            <div className="site-section">
                <h2 className={"text-center m-3 text-primary"}>Kurslar</h2>
                <div className="container">
                    <div className="row">
                        {course.map(item => (
                            <div className="col-lg-6 mb-4">
                                <Link to={"/courses/" + item.id} className="d-flex service-2">
                                    <div className="icon-wrap">
                                        <span className="fa fa-tasks"></span>
                                    </div>
                                    <div className="contents">
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}