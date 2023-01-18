import s from '../styles/usercard.module.css'
import { useContext } from 'react'
import { UserContext } from '../pages/student/dashboard'

const CheckList = () => {
    const user = useContext(UserContext)
    let c = user[2].trainingData
    let holder = []
    let d
    let m

    function valUpdater(event) {
        let val = event.target.value
        m = user[2]
        m['trainingData'][user[0]][val][0] = 1
        user[3](m)
        event.target.disabled = true
    }

    if(c){
        for (let x in c[user[0]]) {
            console.log(c[user[0]][x][0])
            if(c[user[0]][x][0] == 1){
                d = <div key={x}>
                <div className="flex mx-auto justify-between my-2">
                    <p className='text-lg pl-4'>{x}</p>
                    <input type="checkbox" value={x} onClick={valUpdater} className={`mr-4 ${s.checkbox}`} checked disabled/>
                </div>
                <div className='mx-auto'>
                    <div className={s.line}>
                    </div>
                </div>
            </div>
            }else{
                d = <div key={x}>
                <div className="flex mx-auto justify-between my-2">
                    <p className='text-lg pl-4'>{x}</p>
                    <input type="checkbox" value={x} onClick={valUpdater} className={`mr-4 ${s.checkbox}`}/>
                </div>
                <div className='mx-auto'>
                    <div className={s.line}>
                    </div>
                </div>
            </div>
            }
            holder.push(d)
        }
    }

    return (
        <div className={`w-1/2 mx-auto ${s.bg}`}>
            <div className="flex mx-auto  my-4">
                <p className="text-center basis-5/6 font-semibold text-2xl">Heading</p>
                <p className="text-center font-semibold text-2xl">Status</p>
            </div>
            <div className=' mx-auto'>
            <div className={s.linehead}>
                </div>
            </div>
            <div className="flex w-4/5 flex-col mx-auto">
                {holder}
            </div>
        </div>
    );
}

export default CheckList;