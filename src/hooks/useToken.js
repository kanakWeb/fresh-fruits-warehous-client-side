import { useEffect, useState } from "react"
import axios from "axios"

const useToken=(user)=>{
const [token,setToken]=useState('')
useEffect(()=>{
const getToken=async()=>{
    const email = user?.user?.email;
    if(email){const { data } = await axios.post(
        "https://whispering-scrubland-68201.herokuapp.com/login",
        { email }
      );
      setToken(data.accessToken)
      localStorage.setItem("accessToken", data.accessToken);}
}
getToken()
},[user]);
return [token]
}
export default useToken;