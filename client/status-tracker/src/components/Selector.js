import s from '../styles/usercard.module.css'
import { AiOutlineCaretRight } from "react-icons/ai";
import { UserContext } from '@/pages/student/dashboard';
import { useContext } from 'react';

const Selector = (propss) => {
    const user = useContext(UserContext)
    const getSelector = () => {
        let a = []
        if(propss.data.trainingType){
            for (const i of propss.data.trainingType) {
                a.push(<div className='flex items-center justify-between px-6 mb-4'>
                        <button className='text-xl' value={i} onClick={(event) => {user[1](event.target.value)}}>{i.toUpperCase()}</button>
                        <AiOutlineCaretRight />
                    </div>)
            }
        }
        return a
    }
    let a = getSelector()
    return (
        <div className={`${s.selector} basis-1/3 grow flex flex-col rounded-2xl ml-3 justify-center `}>
            <h1 className='text-center font-bold mb-12'>SCHEDULE</h1>
            {a}
            <button className='mx-auto bg-blue-600 px-4 py-2 rounded-lg'>Save</button>
            <p className='text-center mt-4 px-4'>(Progress will be saved only after clicking the save button)</p>
        </div>
    );
}

export default Selector
