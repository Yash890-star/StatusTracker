import { useEffect, useState, createContext } from "react";
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
    let a = {}
    let c = {}
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

    let total = 0, totalOnes = 0;
        if(userData.trainingData){
            let k = Object.keys(userData['trainingData']);
            for (let i of k) {
                c[i] = 0;
                total += Object.keys(userData['trainingData'][i]).length;
                console.log(total)
            }
            for (let i of k) {
                let m = Object.keys(userData['trainingData'][i])
                for (let j of m) {
                    if (userData['trainingData'][i][j][0] == 1) {
                        totalOnes += 1;
                        c[i] += 1;
                    }
                }
            }
            let percent = (totalOnes / total) * 100;
            c['percent'] = percent
            console.log(c)
        }


    return (
        <UserContext.Provider value={[onClickVal, setOnClickVal, userData, setUserData, c]}>
            <div className={`${s.body} mt-20 text-white`}>
                <h1 className={`text-center mb-10 mx-auto text-2xl ${s.font}`}>STUDENT <span className="text-white">DASHBOARD</span></h1>
                <div className={s.container}>
                    <UserCard />
                    <div className={`${s.progressCard}`}>
                        <ProgressCard />
                    </div>
                    <div className={`grow flex basis-1/3 ${s.selector}`}>
                        <Selector />
                    </div>
                </div>
                <div className="my-14">
                    <CheckList />
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default Dashboard;