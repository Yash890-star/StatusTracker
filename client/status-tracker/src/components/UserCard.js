import us from '../../src/styles/usercard.module.css'
import { UserContext } from '@/pages/student/dashboard';
import { useContext } from 'react';

const UserCard = () => {

    //Variables
    const user = useContext(UserContext)
    let string = getString(user[2].trainingType)

    //Function to get Training Types
    function getString(arr) {
        let s = ''
        if (arr) {
            for (const iterator of arr) {
                s += iterator.toUpperCase() + ", "
            }
        }
        return s.slice(0, s.length - 2)
    }

    
    return (
        <>
            <div className={`${us.card} rounded-2xl py-10 flex flex-col basis-1/3 ml-3 flex-none`}>
                <h5 className='text-center font-bold'>PROFILE</h5><br />
                <h1 className="text-2xl text-center">{user[2].name}</h1>
                <h4 className='text-center mt-2'>{string}</h4>
                <h4 className='text-center mt-2'>{user[2].regNo}</h4><br />
                <button className='mx-auto bg-blue-600 px-4 py-2 rounded-lg'>View Details</button>
                <button className='mx-auto bg-blue-600 px-4 py-2 rounded-lg mt-4'>Logout</button>
            </div>
        </>
    );
}

export default UserCard;