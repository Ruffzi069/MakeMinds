import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Newpr = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {
        axios.get('http://localhost:1312/')
        .then(res => {
            setData(res.data[0]);
        })
        .catch(err => console.log(err));
    }, []); // Empty array to avoid infinite loop

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const formdata = new FormData();
        formdata.append("image", file);
        axios.post('http://localhost:1312/', formdata)
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log("Succeeded");
                } else {
                    console.log("Failed");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label> Upload Your Photo: <input type="file" name="image" onChange={handleFile}></input></label><br></br>
            <label>Name: <input type='text' placeholder='Enter your name' name='name'></input></label><br></br>
            <label>About yourself: <input type='text' placeholder='Enter something about you' name='intro'></input></label><br></br>
            <label>Price: <input type='number' placeholder='Enter your hourly charges' name='price'></input></label><br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </div>
    );
};

export default Newpr;
