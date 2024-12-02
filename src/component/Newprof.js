const exp = require("express");
const mysql2 = require("mysql2");
const path = require("path");
const bp = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");

const app=exp();
app.use(cors());
app.use(exp.json());
app.use(exp.static("public"));
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, '../../public/images')
    },
    filename: (req,file,cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

const connection  = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Ftwdb@123",
    database:"profile"
})


connection.query("SELECT * FROM profinfo", (err,data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/Newprof.html"))
 });

app.post("/", upload.single('image'),(req,res)=>{
    console.log(req.file);
    const q = "INSERT into profinfo (`Name`, `Intro`, `Price`, `Image`) values(?)";
    const values = [
        req.body.name,
        req.body.intro,
        req.body.price,
        req.file.filename
    ]
    connection.query(q,[values],(err,result)=>{
        if(err){
            console.log("Error")
        }
        else{
        return res.json({Status : "Success"});
        
        }
    })
});

app.use('/images', exp.static(path.join(__dirname, '..', '..', 'public', 'images')));


app.listen(1312, (err) => {
    if(err){
        console.log(err);
    }
    else{
    console.log("Server is live");
    }
})