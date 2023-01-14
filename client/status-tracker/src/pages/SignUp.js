import { useRouter } from "next/router";
import { useState } from "react";

const SignUp = () => {
    
    const [name, setName] = useState('')
    const [regNo, setRegNo] = useState('')
    const [email, setEmail] = useState('')
    const [dept, setDept] = useState('cse')
    const [trainingType, setTrainType] = useState('fullstack')
    const [password, setPassword] = useState('')
    const router = useRouter()

    async function formHandler(event){
        event.preventDefault()
        await fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                name: name,
                regNo: regNo,
                email: email,
                dept: dept,
                trainingType: trainingType,
                password: password
            })
        })
        await router.push("/login")
    }

    return (<>
        <form>
            <label htmlFor="name">Enter Name</label>
            <input type="text" name="name" onChange={e => {setName(e.target.value)}}/><br/>
            <label htmlFor="rno">Enter Register No.</label>
            <input type="text" name="rno" onChange={e => {setRegNo(e.target.value)}}/><br/>
            <label htmlFor="email">Enter Email</label>
            <input type="email" name="email" onChange={e => {setEmail(e.target.value)}}/><br/>
            <label htmlFor="dept">Enter Department</label>
            <select name="dept" id="dept" onChange={e => {setDept(e.target.value)}}>
                <option value="cse">CSE</option>
                <option value="IT">IT</option>
            </select><br/>
            <label htmlFor="tt">Training Type</label>
            <select name="tt" id="tt" onChange={e => {setTrainType(e.target.value)}}>
                <option value="fullstack">Fullstack</option>
                <option value="competitveprogramming">Competitive Programming</option>
            </select><br/>
            <label htmlFor="password">Enter Password</label>
            <input type="password" name="password" onChange={e => {setPassword(e.target.value)}}/><br/>
            <button type="submit" onClick={formHandler}>Submit</button>
        </form>
    </>);
}

export default SignUp;