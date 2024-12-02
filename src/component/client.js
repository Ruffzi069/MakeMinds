const exp = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");
const { Navigate } = require("react-router-dom");

const app = exp();

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Ftwdb@123",
    database: "profile"
});

app.use(exp.json());
app.use(cors());

app.listen(1313, () => {
    console.log("Connection with the backend initiated");
});

app.get("/", (req, res) => {
    console.log("Backend Data Connected");
});

app.get("/cyber", (req, res) => {
    const que = "SELECT * FROM profinfo";
    db.query(que, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    });
});



app.post("/login", (req, res) => {
    const qur = "INSERT INTO profinfo (`Name`, `Intro`, `Price`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.intro,
        req.body.price
    ];
    db.query(qur, values, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json("DATA INSERTED SUCCESSFULLY !! ");
        }
    });
});

app.delete("/cyber/:id", (req, res) => {
    const profileId = req.params.id;
    const q = "DELETE FROM profinfo WHERE id = ?";

    db.query(q, [profileId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Profile has been deleted successfully.");
    });
});

app.put("/cyber/:id", (req, res) => {
    const profileId = req.params.id;
    const q = "UPDATE profinfo SET Name = ?, Intro = ?, Price = ? WHERE id = ?";
    const values = [
        req.body.Name,
        req.body.Intro,
        req.body.Price,
        profileId
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.redirect("http://localhost:3001/cybersecurity");
    }
    );
});
