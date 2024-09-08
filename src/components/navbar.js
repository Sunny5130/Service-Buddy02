import "../stylesheets/navbar.css";
import {s_a} from "../data/states.js"
import { useEffect, useState } from "react";
import pin from "../resources/pin.svg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");


function print_state(state_id){
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}


function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}


export default function Navbar(){
    const [currPage, setCurrPage] = useState("Post");
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.name)
    useEffect(()=>{
        print_state("sts");
        navigate("/find");
    },[])
    function handleClick(){
        if(currPage == "Find"){
            setCurrPage("Post");
            navigate("/find");
        }
        else{
            setCurrPage("Find");
            navigate("/post");
        }
    }
    return (
        <div className="navbar-container">
            <div className="logo">
                <span>Service</span>
                <span>Buddy</span>
            </div>
            <div className="search-area">
                <img className = "pin" src = {pin}/>
                <select className="location-menu" onChange={(e) => print_city('state', e.target.selectedIndex)} id="sts" name ="stt" required></select>
                <select className="location-menu" id ="state"  required></select>
            </div>
            <div className = "nav-right">
                <div onClick = {() => {handleClick()}} className="signin">
                    {currPage}
                </div>
                <div onClick = {() => navigate("/signin")} className="signin">
                    {user}
                </div>
            </div>
            
        </div>
    )
}