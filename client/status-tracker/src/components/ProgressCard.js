import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from "@ramonak/react-progress-bar";
import s from "../styles/usercard.module.css"

const ProgressCard = (propss) => {
    const progressCheck = (b) => {
        let c = {}
        if(b){
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
                z = <div className='self-start mt-4 pl-4'>
                    <div className='flex justify-between'>
                        <h1 className='mb-2'>{i.toUpperCase()}</h1>
                        <p className=''>{Math.floor((c[i]/Object.keys(b[i]).length)*100)}</p>
                    </div>
                    <div className={`${s.pbc}`}>
    
                    <ProgressBar
                        completed={(c[i]/Object.keys(b[i]).length)*100}
                        height="5px"
                        labelAlignment="outside"
                        isLabelVisible={false}
                        bgColor="#3e98c7"
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
    let pbcontent = []
    let getProg = progressCheck(propss.data.trainingData)
    return (<div className={`${s.progressCard} h-full rounded-2xl px-6 ml-3`}>
        <h1 className={`text-center font-bold pt-10 ${s.phead}`}>PROGRESS</h1>
        <div className={`flex ${s.progresscontainer}`}>
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={getProg['percent']} text={`${Math.floor(getProg['percent'])}%`} />
            </div>
            <div>
                {pbcontent}
            </div>
        </div>
    </div>);
}

export default ProgressCard