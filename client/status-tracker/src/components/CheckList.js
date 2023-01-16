import s from '../styles/usercard.module.css'
import { useContext } from 'react'
import { UserContext } from '../pages/student/dashboard'

const CheckList = (props) => {
    const user = useContext(UserContext)
    let c = props.data.trainingData
    let holder = []
    let d
    if(c){
        for (let x in c[user[0]]) {
            d = <>
                <div className="flex w-2/5 mx-auto justify-between my-2">
                    <p className='text-lg'>{x}</p>
                    <input type="checkbox" className="mr-4" />
                </div>
                <div className='w-1/2 mx-auto'>
                    <div className={s.line}>
                    </div>
                </div>
            </>
            holder.push(d)
        }
    }
    return (
        <>
            <div className="flex w-2/5 mx-auto justify-between my-4">
                <p className="text-center font-semibold text-2xl">Heading</p>
                <p className="text-center font-semibold text-2xl">Status</p>
            </div>
            <div className='w-1/2 mx-auto'>
            <div className={s.linehead}>
                </div>
            </div>
            <div className="flex flex-col">
                {holder}
            </div>
        </>
    );
}

export default CheckList;