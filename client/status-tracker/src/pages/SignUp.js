import { useRouter } from "next/router";
import { useState } from "react";
import s from "../styles/SignUp.module.css";

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
        <form className={s.form}>
        <p className={s.loginText}>Sign Up</p>
        <label className={s.enterYourCredentials}>Enter Your Credentials</label>
            {/* <label htmlFor="name">Enter Name</label> */}
            <input className={s.inputBox} type="text" placeholder="Name"name="name" onChange={e => {setName(e.target.value)}}/><br/>
            {/* <label htmlFor="rno">Enter Register No.</label> */}
            <input className={s.inputBox} type="text" placeholder="Register No" name="rno" onChange={e => {setRegNo(e.target.value)}}/><br/>
            {/* <label htmlFor="email">Enter Email</label> */}
            <input className={s.inputBox} type="email" placeholder="Email" name="email" onChange={e => {setEmail(e.target.value)}}/><br/>
            {/* <label htmlFor="dept">Enter Department</label> */}
            <select className={s.selectTags} name="dept" id="dept" onChange={e => {setDept(e.target.value)}}>
                <option   value="" disabled selected>Department</option>
                <option value="cse">CSE</option>
                <option value="IT">IT</option>
            </select><br/>
            {/* <label htmlFor="tt">Training Type</label> */}
            <select className={s.selectTags} name="tt" id="tt" onChange={e => {setTrainType(e.target.value)}}>
            <option color="black" value="" disabled selected>Training Type</option>
                <option value="fullstack">Fullstack</option>
                <option value="competitveprogramming">Competitive Programming</option>
            </select><br/>
            {/* <label htmlFor="password">Enter Password</label> */}
            <input className={s.inputBox} placeholder="Password"type="password" name="password" onChange={e => {setPassword(e.target.value)}}/><br/>
            <button className={s.submitButton} type="submit" onClick={formHandler}>Submit</button>
            <p>Aldready have an Account? Login</p>
        </form>
    </>);
}

export default SignUp;