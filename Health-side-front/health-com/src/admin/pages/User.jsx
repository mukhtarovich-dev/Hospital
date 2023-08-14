import {getUser} from "../../Server/service/AuthService.js";
import {useEffect, useState} from "react";

export const Users = () => {
    const [users, setUser] = useState([])
    console.log(users)
    const getAll = async () => {
        try {
            await getUser(setUser)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, []);
    return (
        <div className={"container "}>
            {users.length === 0 ? (
                <h1 className={" text-center text-danger"}>Foydalanuvchilar mavjud emas</h1>
            ) : (
                users.map(item=>(
                    <h3>{item.firstName}</h3>
                ))
            )
            }
        </div>

    )
}