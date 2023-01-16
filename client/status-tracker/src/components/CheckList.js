import s from '../styles/usercard.module.css'
import { useContext } from 'react'
import { UserContext } from '../pages/student/dashboard'

const CheckList = (props) => {
    const user = useContext(UserContext)
    const propsdum = {
        "_id": "63c5495039175ccc1b7d8387",
        "name": "user",
        "email": "user@user.com",
        "dept": "CSE",
        "regNo": "210420104191",
        "trainingType": [
            "fullstack",
            "dsa"
        ],
        "trainingData": {
            "fullstack": {
                "HTML Revision": [
                    0,
                    null
                ],
                "CSS Revision": [
                    0,
                    null
                ],
                "Introduction to JavaScript": [
                    0,
                    null
                ],
                "Applying JavaScript (internal and external)": [
                    0,
                    null
                ],
                "Understanding JS Syntax": [
                    0,
                    null
                ],
                "Introduction to Document and Window Object": [
                    0,
                    null
                ],
                "Variables and Operators": [
                    0,
                    null
                ],
                "Data Types and Num Type Conversion": [
                    0,
                    null
                ],
                "Math and String Manipulation": [
                    0,
                    null
                ],
                "Objects and Arrays": [
                    0,
                    null
                ],
                "Date and Time": [
                    0,
                    null
                ],
                "Conditional Statements": [
                    0,
                    null
                ],
                "Switch Case": [
                    0,
                    null
                ],
                "Looping in JS": [
                    0,
                    null
                ],
                "Functions": [
                    0,
                    null
                ],
                "Introduction React JS": [
                    0,
                    null
                ],
                "Templating using JSX": [
                    0,
                    null
                ],
                "Components, State and Props": [
                    0,
                    null
                ],
                "Lifecycle of Components": [
                    0,
                    null
                ],
                "Rendering List and Portals": [
                    0,
                    null
                ],
                "Error Handling": [
                    0,
                    null
                ],
                "Routers": [
                    0,
                    null
                ],
                "Redux and Redux Saga": [
                    0,
                    null
                ],
                "Immutable.js": [
                    0,
                    null
                ],
                "Service Side Rendering": [
                    0,
                    null
                ],
                "Unit Testing": [
                    0,
                    null
                ],
                "Webpack": [
                    0,
                    null
                ],
                "Node js Overview": [
                    0,
                    null
                ],
                "Node js - Basics and Setup": [
                    0,
                    null
                ],
                "Node js Console": [
                    0,
                    null
                ],
                "Node js Command Utilities": [
                    0,
                    null
                ],
                "Node js Modules": [
                    0,
                    null
                ],
                "Node js Concepts": [
                    0,
                    null
                ],
                "Node js Events": [
                    0,
                    null
                ],
                "Node js with Express js": [
                    0,
                    null
                ],
                "Node js Database Access": [
                    0,
                    null
                ],
                "SQL and NoSql Concepts": [
                    0,
                    null
                ],
                "Create and Manage MongoDB": [
                    0,
                    null
                ],
                "Migration of Data into MongoDB": [
                    0,
                    null
                ],
                "MongoDB with PHP": [
                    0,
                    null
                ],
                "MongoDB with NodeJS": [
                    0,
                    null
                ],
                "Services Offered by MongoDB": [
                    0,
                    null
                ],
                "Python Installation & Configuration": [
                    0,
                    null
                ],
                "Developing a Python Application": [
                    0,
                    null
                ],
                "Connect MongoDB with Python": [
                    0,
                    null
                ],
                "Version Control with Git": [
                    0,
                    null
                ]
            },
            "dsa": {
                "Arrays": [
                    0,
                    null
                ],
                "Arrays 2": [
                    0,
                    null
                ],
                "Arrays 3": [
                    0,
                    null
                ],
                "Array 4": [
                    0,
                    null
                ],
                "Linked List": [
                    0,
                    null
                ],
                "Linked List 2": [
                    0,
                    null
                ],
                "Linked List and array": [
                    0,
                    null
                ],
                "Greedy": [
                    0,
                    null
                ],
                "Recursion": [
                    0,
                    null
                ],
                "Recursion and Backtracking": [
                    0,
                    null
                ],
                "Binary search": [
                    0,
                    null
                ],
                "Heaps": [
                    0,
                    null
                ],
                "Stacks and Queues": [
                    0,
                    null
                ],
                "Stacks and Queues 2": [
                    0,
                    null
                ],
                "String": [
                    0,
                    null
                ],
                "String 2": [
                    0,
                    null
                ],
                "Binary tree": [
                    0,
                    null
                ],
                "Binary tree 2": [
                    0,
                    null
                ],
                "Binary Search Tree": [
                    0,
                    null
                ],
                "Binary Search Tree 2": [
                    0,
                    null
                ],
                "Binary Search Tree3": [
                    0,
                    null
                ],
                "Binary tree (Miscellaneous)": [
                    0,
                    null
                ],
                "Graph": [
                    0,
                    null
                ],
                "Graph 2": [
                    0,
                    null
                ],
                "Dynamic Programming": [
                    0,
                    null
                ],
                "Dynamic Programming 2": [
                    0,
                    null
                ],
                "Trie": [
                    0,
                    null
                ]
            }
        },
        "__v": 0
    }
    let c = propsdum.trainingData
    let holder = []
    let d
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