import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()

  const fetchData = () => {
    fetch("http://localhost:8080/api/user",{
      credentials: 'include'
    }).then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
    })
  }

  useEffect(() => fetchData())

  const logoutHandler = async (event) => {
    event.preventDefault()
    const response = await fetch("http://localhost:8080/api/logout",{
      method: "POST",
      headers: {"content-type":"application/json"},
      credentials: "include"
    })
    console.log(response)
    await router.push('/login')
  } 

  return (
    <>
      <p>hi</p>
      <button onClick={logoutHandler}>logout</button>
    </>
  )
}
