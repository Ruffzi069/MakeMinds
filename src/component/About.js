import React from 'react';
import "./About.css";
import on1 from "./online_inter1.avif";
import on2 from "./online_inter2.avif";
import on3 from "./online_inter4.png";
import on4 from "./online_inter4.avif"

const About = () => {
    return (
        <>
            <div>
                <div id='container_inter1'>
                <div className='text1'>
                    <div className='texth1'>
                        <h1>Access to experienced interviewers who provide valuable feedback and guidance to enhance interview skills</h1>
                    </div>
                    <img src={on1}></img>
                </div>
                <div className='text2'>
                    <img src={on2}></img>
                    <div className='text2h1'>
                        <h1>User-friendly interface and flexible scheduling options make it easy for users to access interview practice sessions anytime, anywhere.</h1>
                    </div>
                </div>
                </div>
                <div className='inter_photo'>
                    <h1 className='inter_photoh1'>Empower individuals to take control of their career development journey and achieve their professional aspirations with confidence.</h1>
                </div>
                <div id='container_inter2'>
                <div className='text3'>
                    <div className='text3h1'>
                        <h1>Benefit from a track record of success stories where users have leveraged mock interviews to secure job offers and advance their careers.</h1>
                    </div>
                    <img src={on3}></img>
                </div>
                <div className='text4'>
                    <img src={on4}></img>
                    <div className='text4h1'>
                        <h1>Receive tips and suggestions for improving resume content and presentation based on feedback received during mock interviews.</h1>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default About;
