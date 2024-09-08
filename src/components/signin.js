import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import "../stylesheets/signin.css"
import { change } from "./user";

const serverUrl = "http://localhost:8000";

export default function SignIn(){
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.name);
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [message, setMessage] = useState("");
    

    useState(() => {
        if(user === "LogOut"){
            dispatch(change());
        }
    }, [])

    function handleData(key, value){
        setData((curr) => {
            curr[key] = value;
            return curr;
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        if(Object.keys(data).length !== 3)
            setMessage("Please fill all the fields!!");
        else{
            fetch(serverUrl+"/signup", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({ data : data})
            })
            .then((res) => res.json())
            .then((res) => {
                if(!res.response)
                    setMessage("Email already exists try loggin in");
                else
                    navigate("/login")
            });
        }
    }

    return (
        <div className="signin-container">
            
            <form className="form">
                <div className="heading-form"> Sign Up With Us</div>
                <div>{message}</div>
                <label className="lab-sign">Name</label>
                <input onChange = {(e) => handleData("name", e.target.value)} className = "inp-sign" type = "text" required></input>
                <label className="lab-sign">Email</label>
                <input onChange = {(e) => handleData("email", e.target.value)} className = "inp-sign" type = "text" required></input>
                <label className="lab-sign">Password</label>
                <input onChange = {(e) => handleData("password", e.target.value)} className = "inp-sign" type = "password" required></input>
                <input type= "submit" onClick={(e) => handleSubmit(e)} className="btn-sub btn-sign"/>
                <div>
                    Have an account <a href = "#" onClick={() => navigate("/login") }> login </a>
                </div>
            </form>
            
        </div>
    )
}