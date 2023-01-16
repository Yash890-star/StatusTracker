import { useEffect, useState,createContext } from "react";
import { useRouter } from "next/router";
import s from "../../styles/studentDashboard.module.css"
import ProgressCard from "@/components/ProgressCard";
import UserCard from "@/components/UserCard";
import Selector from "@/components/Selector";
import CheckList from "@/components/CheckList";

export const UserContext = createContext()

const Dashboard = () => {
    const router = useRouter()
    const [onClickVal, setOnClickVal] = useState('')
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch("http://localhost:8080/api/user", {
            credentials: "include"
        }).then(data => {
            return data.json()
        }).then(res => {
            if (res.message === 'unauthenticated') {
                router.push('/login')
            }
            setUserData(res)
        })
    }, [])

    return (
    <UserContext.Provider value={[onClickVal, setOnClickVal]}>
        <div className={`${s.body} mt-20 `}>
            <h1 className="font-bold text-center mb-10 mx-auto text-white text-2xl">STUDENT DASHBOARD</h1>
            <div className={s.container}> 
                <UserCard data={userData}/>
                <div className={`${s.progressCard}`}>
                    <ProgressCard data={userData}/>
                </div>
                <div className={`grow flex basis-1/3 ${s.selector}`}>
                <Selector data={userData}/>
                </div>
            </div>
            <div className="my-14">
            <CheckList data={userData}/>
            </div>
        </div>
        </UserContext.Provider>
);
}

export default Dashboard;