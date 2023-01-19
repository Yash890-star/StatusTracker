import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import s from "../styles/SignUp.module.css";

const SignUp = () => {
    
    const [name, setName] = useState('')
    const [regNo, setRegNo] = useState('')
    const [email, setEmail] = useState('')
    const [dept, setDept] = useState('cse')
    const [trainingType, setTrainType] = useState('fullstack')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [syllabusoptions, setSyllabusOptions] = useState({})


    useEffect(() => {
        fetch("http://localhost:8080/api/syllabusoptions", {
            credentials: 'include'
        })
        .then(res => {
            return res.json()
        }).then(data => {
            setSyllabusOptions(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    let m = []

    let a = []
    let b 
    if(syllabusoptions){
        for(let x in syllabusoptions){
            for(let y of syllabusoptions[x]){
                b = <div className={s.checkBoxes}>
                    <input type="checkbox" className="" onClick={(event) => {m.push(event.target.value)}} name={y} value={y}/>
                    <label className="ml-2" htmlFor={y}>{y}</label>
                </div>
                a.push(b)
            }
        }
    }

    async function formHandler(event){
        event.preventDefault()
        console.log(m)
        await fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                name: name,
                regNo: regNo,
                email: email,
                dept: dept,
                trainingType: m,
                password: password
            })
        })
        await router.push("/login")
    }

    return (<>
        <form className={s.form}>
        <p className={s.loginText}>Sign Up</p>
        <label className={s.enterYourCredentials}>Enter Your Credentials</label>
            <input className={s.inputBox} type="text" placeholder="Name"name="name" onChange={e => {setName(e.target.value)}}/><br/>
            <input className={s.inputBox} type="text" placeholder="Register No" name="rno" onChange={e => {setRegNo(e.target.value)}}/><br/>
            <input className={s.inputBox} type="email" placeholder="Email" name="email" onChange={e => {setEmail(e.target.value)}}/><br/>
            <select className={`${s.selectTags} ${s.department}`} name="dept" id="dept" onChange={e => {setDept(e.target.value)}}>
                <option  hidden value="" disabled selected>Department</option>
                <option value="cse">CSE</option>
                <option value="IT">IT</option>
            </select><br/>
            {a}
            <input className={`${s.inputBox} mt-2`} id="passwordBox" placeholder="Password"type="password" name="password" onChange={e => {setPassword(e.target.value)}}/><br/>
            <button className={s.submitButton} type="submit" onClick={formHandler}>Submit</button>
            <p>Aldready have an Account? <span className={s.login}>Login</span> </p>
        </form>
    </>);
}

export default SignUp;