import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../stylesheets/signin.css"

const serverUrl = "http://localhost:8000";

export default function LogIn(){
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [message, setMessage] = useState("");

    function handleData(key, value){
        setData((curr) => {
            curr[key] = value;
            return curr;
        })
    }

    function handleLogin(e){
        e.preventDefault();
        if(Object.keys(data).length !== 2)
            setMessage("Please fill all the fields!!");
        else{
            fetch(serverUrl+"/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({ data : data})
            })
            .then((res) => res.json())
            .then((res) => {
                if(!res.response)
                    setMessage("Incorrect Username or Password");
                else
                    navigate("/find", { state : { "email" : data.email }})
            });
        }
    }

    return (
        <div className="signin-container">
            <form className="form">
                <div className="heading-form"> Log In </div>
                <div>{message}</div>
                <label  className="lab-sign">Email</label>
                <input onChange = {(e) => handleData("email", e.target.value)} className = "inp-sign" type = "text" required></input>
                <label className="lab-sign">Password</label>
                <input onChange = {(e) => handleData("password", e.target.value)} className = "inp-sign" type = "password" required></input>
                <input type= "submit" onClick = {(e) => handleLogin(e)} className="btn-sub btn-sign"/>
                <div>
                    Dont Have an account <a href = "#" onClick={() => navigate("/signin") }> SignIN </a>
                </div>
            </form>
            
        </div>
    )
}