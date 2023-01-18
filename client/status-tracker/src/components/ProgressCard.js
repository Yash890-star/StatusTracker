import s from "../styles/usercard.module.css"
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import ProgressBar from "@ramonak/react-progress-bar";
import { UserContext } from "@/pages/student/dashboard";
import { useContext, useEffect } from "react";

const ProgressCard = () => {

    //useContext hook
    const user = useContext(UserContext)

    //Function to get Progress values
    const progressCheck = (b) => {
        let c = {}
        if (b) {
            let total = 0, totalOnes = 0;
            let k = Object.keys(b);
            for (let i of k) {
                c[i] = 0;
                total += Object.keys(b[i]).length;
            }
            for (let i of k) {
                let m = Object.keys(b[i])
                for (let j of m) {
                    if (b[i][j][0] == 1) {
                        totalOnes += 1;
                        c[i] += 1;
                    }
                }
            }
            let z
            for (let i in c) {
                console.log(i)
                z = <div className='self-start mt-4 pl-4' key={i}>
                    <div className='flex justify-between'>
                        <h1 className='mb-2'>{i.toUpperCase()}</h1>
                        <p className=''>{Math.floor((user[4][i] / Object.keys(b[i]).length) * 100)}</p>
                    </div>
                    <div className={`${s.pbc}`}>
                        <ProgressBar
                            completed={(user[4][i] / Object.keys(b[i]).length) * 100}
                            height="5px"
                            labelAlignment="outside"
                            isLabelVisible={false}
                            bgColor="#2563eb"
                            baseBgColor="#bbbbbb"
                            labelColor="#3e98c7"
                        />
                    </div>
                </div>
                pbcontent.push(z)
            }
            let percent = (totalOnes / total) * 100;
            c['percent'] = percent
        }
        return c
    }

    useEffect(() => {
        getProg = progressCheck(user[2].trainingData)
        console.log('sdafsdf')
    })

    let pbcontent = []
    let getProg = progressCheck(user[2].trainingData)

    return (<div className={`${s.progressCard} h-full rounded-2xl px-6 ml-3`}>
        <h1 className={`text-center font-bold pt-10 ${s.phead}`}>PROGRESS</h1>
        <div className={`flex ${s.progresscontainer}`}>
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={user[4]['percent']} text={`${Math.floor(getProg['percent'])}%`}
                    styles={buildStyles({
                        pathColor: `#2563eb`,
                        textColor: '#2563eb',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7'
                    })}
                />
            </div>
            <div>
                {pbcontent}
            </div>
        </div>
    </div>);
}

export default ProgressCard