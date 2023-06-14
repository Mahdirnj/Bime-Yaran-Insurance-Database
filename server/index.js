const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "mone656454",
    database: "bime_yaran"
})



// ABOUT - Get count of users
app.post("/total-users", (req, res) => {
    con.query("SELECT COUNT(*) FROM users", (err, result) => {
        if (result) {
            res.send(result)
        }
        else {
            res.send({message: "QUERY ERROR OR DATABASE MISMATCH"})
        }
    })
})

// ABOUT - Get count of branches
app.post("/total-branches", (req, res) => {
    con.query("SELECT COUNT(*) FROM branches", (err, result) => {
        if (result) {
            res.send(result)
        }
        else {
            res.send({message: "QUERY ERROR OR DATABASE MISMATCH"})
        }
    })
})

// ABOUT - Get count of contracts
app.post("/total-contracts", (req, res) => {
    con.query("SELECT COUNT(*) FROM contracts", (err, result) => {
        if (result) {
            res.send(result)
        }
        else {
            res.send({message: "QUERY ERROR OR DATABASE MISMATCH"})
        }
    })
})

// BRANCHES - Get branches details
app.post("/branches", (req, res) => {
    con.query("SELECT * FROM branches", (err, result) => {
        if (result) {
            res.send(result)
        }
        else {
            res.send({message: "QUERY ERROR OR DATABASE MISMATCH"})
        }
    })
})

// SIGNUP, SIGNIN - Check Email availability for registering and login
app.post("/check-email", (req, res) => {
    const email = req.body.email;
    con.query("SELECT * FROM users WHERE email = ?",[email], (err, result) => {
        if(result.length > 0) {
            res.send("true")
        }
        else {
            res.send("false")
        }
    })
})

// SIGNIN - check password for login
app.post("/check-password", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE email = ? AND password = ?",[email, password], (err, result) => {
        if(result.length > 0) {
            res.send("true")
        }
        else {
            res.send("false")
        }
    })
})

// SIGNUP - Register User
app.post("/register-user", (req, res) => {
    const user_id = req.body.user_id;
    const email = req.body.email;
    const password = req.body.password;
    con.query("INSERT INTO users (user_id, email, password) VALUES (?, ?, ?)", [user_id, email, password], (err, result) => {
        if(result){
            res.send(result);
        }else{
            res.send({message: "QUERY ERROR OR DATABASE MISMATCH"})
        }
    })
})


app.listen(3001, () => {
    console.log("MySQL Database server running...");
})