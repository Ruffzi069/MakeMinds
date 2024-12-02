import React, { useState, useEffect } from 'react';
import "./Cybersecurity.css";
import plus from "./plus.png";
import axios from 'axios';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
    const [profile,addProfile] = useState([]);
    const [latestImagePath, setLatestImagePath] = useState('');

    useEffect(() => {
        const fetchProfile= async () => {
            try{
                const res = await axios.get("http://localhost:1313/cyber")
                addProfile(res.data);
            }catch(abcd){
                console.log(abcd)
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
        <>
        <div className='cyberinterbox'><h1 className='cyberinter'>CyberSecurity</h1></div>
            <div className='imagecontainer'>
                <div id='image1'>
                    <div id='boximg1'>
                    </div>
                    <div className='img1text'>
                    <h1 name="Name">
                        Andrew Brahnigham
                    </h1>
                    <p name="Intro">Hello I am Andrew Brahnigham, and I am an Ex-Cisco CISO Manager. I can Help you out with guiding on how to make a career in CyberSecurity</p>
                    <button className='btn1' name='Price'>$25/hr</button>
                    </div>
                </div>
                <div id='image2'>
                    <div id='boximg2'>
                    </div>
                    <div className='img2text'>
                    <h1>
                        Robert Williams
                    </h1>
                    <p>Hello I am Andrew Brahnigham, and I am an Ex-Cisco CISO Manager. I can Help you out with guiding on how to make a career in CyberSecurity</p>
                    <button className='btn2'>$50/hr</button>
                    </div>
                </div>
                <div id='image3'>
                   <div id='boximg3'>
                   </div>
                   <div className='img3text'>
                    <h1>
                    William Jones
                    </h1>
                    <p>Hello I am Andrew Brahnigham, and I am an Ex-Cisco CISO Manager. I can Help you out with guiding on how to make a career in CyberSecurity</p>
                    <button className='btn3'>$15/hr</button>
                    </div>
                </div>
                <div id='image4'>
                    <div id='boximg4'>
                    </div>
                    <div className='img4text'>
                    <h1>
                        Kelly Tetty
                    </h1>
                    <p>Hello I am Andrew Brahnigham, and I am an Ex-Cisco CISO Manager. I can Help you out with guiding on how to make a career in CyberSecurity</p>
                    <button className='btn4'>$30/hr</button>
                    </div>
                </div>
                <div id='image5'>
                    <div id='boximg5'>
                    </div>
                    <div className='img5text'>
                    <h1>
                        Joseph Martinez
                    </h1>
                    <p>Hello I am Andrew Brahnigham, and I am an Ex-Cisco CISO Manager. I can Help you out with guiding on how to make a career in CyberSecurity</p>
                    <button className='btn5'>$85/hr</button>
                    </div>
                </div>
                <div className="profile">
        {profile.map(profile=>(
            <div className="profile" key={profile.id} id='image7-'>
                <div className='boximg7-'>
                    {profile.Image && <img src={`http://localhost:1312/images/image_1713623319848.jpg`} alt="Profile Image" id='profile-image'/>}
                </div>
                <div className='img7-text'>
                <h1>{profile.Name}</h1>
                <p>{profile.Intro}</p>
                </div>
                <button className='btn7-'>${profile.Price}/hr</button>
            </div>
        ))}
            </div>
                </div>
            <button id='addbutton'>
        <Link to="http://localhost:1312/" className='addbutton'><img src={plus}></img></Link>
            </button>
        </>
    );
};

export default CyberSecurity;
