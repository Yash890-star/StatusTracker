import { useRouter } from "next/router";
import { useState } from "react";
import s from "../styles/login.module.css";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const formHandler = async (event) => {
        event.preventDefault()
        await fetch("http://localhost:8080/api/login",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            credentials: 'include',
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        router.push('/student/dashboard')
    }

    return (<>
        <form className={s.form}>
            <p className={s.loginText}>Login</p>
            <label className={s.enterYourCredentials}>Enter Your Credentials</label>
            <input type="text" placeholder="College Email" className={s.inputBox} name="email" onChange={e => {setEmail(e.target.value)}}/><br />
            {/* <label htmlFor="password">Enter Password</label> */}
            <input type="password" placeholder="Enter Password" className={s.inputBox} name="password" onChange={e => setPassword(e.target.value)}/><br/>
            <div className={s.rememberMe}>
            <label className={s.rMe}>Remember Me</label>
            <input type="checkbox" className={s.checkBox}></input>
            </div>
            <button type="submit" className={s.submitButton} onClick={formHandler}>Submit</button>
            
            <p>Don't have an Account? Create one</p>
        
        </form>
    </>);
}

export default Login;