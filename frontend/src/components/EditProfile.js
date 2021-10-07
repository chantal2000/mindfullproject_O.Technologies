import {useState} from "react";
import EditUser from "./EditUser";
import './EditProfile.css';
export default ({changeToFalse})=>{
    const [fullname,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
const onSubmit=(uid)=>{
    const data={
        uid,
        fullname,
        email,
        password
    }
    const result=EditUser(data);
    if(result===true){
        console.log("User's profile has been edited")
    }
    else{
        console.log("Error")
    }
}
return(
    <div>
        <div onClick={()=>changeToFalse()}>Go back</div>
        <input type="text"value={fullname}onChange={event=>setFullName(event.target.value)} />
        <input type="text"value={email}onChange={event=>setEmail(event.target.value)} />
        <input type="text"value={password}onChange={event=>setPassword(event.target.value)} />
        <button onClick={onSubmit}>Submit</button>

    </div>
)
}
