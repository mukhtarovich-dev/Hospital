import {getAllMsg} from "../../Server/service/AppService.js";
import {useEffect, useState} from "react";

export const AllMessage = () => {
    const [msg, setMsg] = useState([])
    console.log(msg)
    const getAll = async () => {
        try {
            await getAllMsg(setMsg)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (

        <div className={"container "} style={{marginLeft:"21%",top:"10%"}}>
            <div className="row column4 graph">
                <div className="col-md-6 margin_bottom_30">
                    <div className="dash_blog">
                        <div className="dash_blog_inner">
                            <div className="dash_head">
                                <h3><span><i
                                    className="fa fa-calendar"></i> {" " + Date().substring(10, 16)}</span>
                                </h3>
                            </div>
                            <div className="list_cont">
                                <p>Habarlar</p>
                            </div>
                            <div className="task_list_main">
                                <ul className="task_list">
                                    {msg.length === 0 ? (
                                        <h3>Bugun Habarlar Yoq</h3>
                                    ) : (
                                        msg.map((item) => (
                                            <>
                                                {

                                                    <li>
                                                        <p>{item.userName}</p>
                                                        <a>{item.message}</a>
                                                        <br/>
                                                        <strong>{item.createAt.substring(11,16)}AM</strong>
                                                    </li>
                                                }
                                            </>
                                        )))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}