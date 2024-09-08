import "../stylesheets/post.css";
import { s_a } from "../data/states.js";
import { useEffect, useState } from "react";
import { uploadUserImage, updateData } from "../backend/firebase";
import { useNavigate } from "react-router-dom";

var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");
const serverUrl = "http://localhost:8000";

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


export default function Post(){
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        print_state("stst");
    },[])

    function handleData (key, value){
        setData((curr) => {
            curr[key] = value;
            return curr;
        })
    }

    function handleUpload(e){
        e.preventDefault();
        uploadUserImage(e.target.files[0]).then((res) => {
            handleData("imageUrl", res);
        })  
    }
    return(
        <div className="post-container">
            <div className="post-form">
                <div className="post-head">
                    Post a Service
                </div>
                <div className="post-container post-container-inside">
                    <label className="lab">
                        Name<br/>
                    </label>
                    <input onChange = {(e) => handleData("name", e.target.value)} className="inp"></input>
                    <label className="lab">
                        Service Type<br/>
                    </label>
                    <input onChange = {(e) => handleData("type", e.target.value)} className="inp"></input>
                    <label className="lab">
                        Contact<br/>
                    </label>
                    <input type="number" onChange = {(e) => handleData("email", e.target.value)} className="inp"></input>
                    <label className="lab">
                        Cost<br/>
                    </label>
                    <input type="number" onChange = {(e) => handleData("cost", e.target.value)} className="inp"></input>
                    <div className="form-loc">
                        <select className="form-loc-menu" onChange={(e)=> {
                            print_city('statepost', e.target.selectedIndex);
                            handleData("state", e.target.value);
                        }} id="stst" name ="stt"  required></select>
                        <select onChange = {(e) => handleData("city", e.target.value)} id ="statepost" className="form-loc-menu" required></select>
                    </div>   
                    <input onChange = {(e) => handleUpload(e)} type = "file" className="inp"></input>
                </div>
                <div className="btn-sub" onClick = {() => {
                        if(Object.keys(data).length != 7){
                            window.alert("Please fill all the fields");
                            return;
                        }
                        fetch(serverUrl+"/upload", {
                            method : "POST",
                            headers : {
                                "Content-Type" : "application/json"
                            },
                            body : JSON.stringify({ data : data})
                        }).then((res)=> {
                                console.log(res)
                                window.alert("Post Uploaded");
                                navigate("/find")
                            }
                        );
                        //updateData(data);
                        
                    }}>
                    Submit
                </div>
            </div>
        </div>
    )
}