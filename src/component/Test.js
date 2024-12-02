import React, { useState, useEffect } from 'react';
import "./Cybersecurity.css";
import plus from "./plus.png";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Test.css"

const Test = () => {
    const [profile,addProfile] = useState([])

    useEffect(() => {
        const fetchProfile= async () => {
            try{
                const res = await axios.get("http://localhost:1313/login")
                addProfile(res.data);
            }catch(err){
                console.log(err)
            }
        };
        fetchProfile()
    },[]);


    const handleDelete =async (id)=>{
        try{
          await axios.delete("http://localhost:1313/cyber"+id)
          window.location.reload()
        }catch(err){
          console.log(err)
        }
      }
    return (
    <div>
      <h1>profiles</h1>
      <div className="profile">
        {profile.map(profile=>(
            <div className="profile" key={profile.id}>
                <h2>{profile.Name}</h2>
                <p>{profile.Intro}</p>
                <span>{profile.Price}</span>
            </div>
        ))}
      </div>
      <button>
        <Link to="http://localhost:1313/login">Add new book</Link>
      </button>
    </div>
    )
};

export default Test;
