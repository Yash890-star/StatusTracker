import { useRouter } from "next/router";
import { useState } from "react";

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
        <form>
            <label htmlFor="email">Enter Email</label>
            <input type="text" className="flex align-center" name="email" onChange={e => {setEmail(e.target.value)}}/><br />
            <label htmlFor="password">Enter Password</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/><br/>
            <button type="submit" onClick={formHandler}>Submit</button>
        </form>
    </>);
}

export default Login;