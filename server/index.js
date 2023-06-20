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
            res.send(err)
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
            res.send(err)
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
            res.send(err)
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
            res.send(err)
        }
    })
})

// SIGNUP, SIGNIN - Check Email availability for registering and login
app.post("/check-email", (req, res) => {
    const email = req.body.email;
    con.query("SELECT * FROM users WHERE email = ? ",[email], (err, result) => {
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
    const user_type = "user";
    con.query("INSERT INTO users (user_id, email, password, user_type) VALUES (?, ?, ?, ?)", [user_id, email, password, user_type], (err, result) => {
        if(result){
            res.send(result);
        }else{
            res.send(err)
        }
    })
})


// SIGNIN - Check User Type For Dashboard
app.post("/check-user-type", (req, res) => {
    const email = req.body.email;
    con.query("SELECT user_type from users WHERE email = ?", [email], (err, result) => {
        if(result){
            res.send(result);
        }else{
            res.send(err)
        }
    })
})


// DASHBOARD - Add Branch
app.post("/register-branch", (req, res) => {
    const branch_id = req.body.branch_id;
    console.log(branch_id)
    const branch_name = req.body.branch_name;
    const branch_address = req.body.branch_address;
    const branch_phone = req.body.branch_phone;
    const branch_type = req.body.branch_type;
    con.query("INSERT INTO branches (branch_id, branch_name, branch_address, branch_phone, branch_type) VALUES (?, ?, ?, ?, ?)",
        [branch_id, branch_name, branch_address, branch_phone, branch_type], (err, result) => {
        if(result){
            res.send(result);
        }else{
            res.send(err)
        }
    })
})

app.listen(3001, () => {
    console.log("MySQL Database server running...");
})