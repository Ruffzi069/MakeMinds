import React, { useState } from 'react';
import "./Home.css";
import {useNavigate} from 'react-router-dom';
import Header from './Header';


const Home = () => {
    const [selectedvalue, setselectedvalue] = useState("");
    const Navigate = useNavigate();

    const handleinput = (e) => {
    setselectedvalue(e.target.value);
    }

    const handlechange = (e) => {
    e.preventDefault();
    if(selectedvalue === "Cyber Security"){
        console.log("Dhan Guru Nanak Ji");
        }
    else if(selectedvalue === "Artificial Intelligence"){
        console.log("Dhan Guru Nanak Ji");
    }
    else if(selectedvalue === "Machine Learning"){
        console.log("Dhan Guru Nanak Ji");
    }
    else if(selectedvalue === "Data Science"){
        console.log("Dhan Guru Nanak Ji");
    }
    }

    const onclick = () => {
        if(selectedvalue === "Cyber Security"){
            Navigate('/cybersecurity')
        }
        else if(selectedvalue === "Artificial Intelligence"){
            Navigate("/artificial");
        }
        else if(selectedvalue === "Machine Learning"){
            Navigate("/machinelearning");
        }
        else if(selectedvalue === "Data Science"){
            Navigate("/datascience");
        }

    }

    return (
        <>
        <Header/>
        <div id='cont'>
            <form id='domain_enter' onSubmit={handlechange}>
                <label >
                    <input list='dom'
                     placeholder='Enter your domain'
                      className='domain_enter'
                       name="dom"
                       value={selectedvalue}
                       onChange={handleinput}></input>
                </label>
                <datalist id='dom'className='list'>
                    <option value="Cyber Security"></option>
                    <option value="Artificial Intelligence"></option>
                    <option value="Machine Learning"></option>
                    <option value="Data Science"></option>
                </datalist>
                <button type='submit' onClick={onclick} disabled={selectedvalue !== "Cyber Security" && selectedvalue !== "Artificial Intelligence" && selectedvalue !== "Machine Learning" && selectedvalue !== "Data Science"}>SUBMIT</button>
            </form>
        </div>
        <div className='empty'>
        </div>
        <div id='container1'>
            <div className='bx1'>Practice mock interviews with expert guidance to improve your skills.</div>
            <div className='bx2'>Personalized assistance for interview preparation tailored to your needs.</div>
        </div>
        <div id='container2'>
            <div className='bx3'>Interactive platform for honing interview skills through mock sessions.</div>
            <div className='bx4'>Elevate your confidence and performance with Make Mind's interview practice sessions.</div>
        </div>
        <div className='empty'> 
        </div>
        </>
    );
};

export default Home;
