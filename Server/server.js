import express from 'express'
import mysql from 'mysql'
import cors from'cors'
import cookieParser from 'cookie-parser'
import bcrypt from'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "loginsystem"
})
con.connect(function(err){
    if(err){
        console.log("Error in connection");
    }else{
        console.log("Connected");
    }
})
app.post('/login', (req, res) => {
const sql = "SELECT * FROM users Where username = ? AND password = ?";
con.query(sql, [req.body.username, req.body.password], (err, result) => {
    if(err) return res.json({Status: "Error", Error: "Valami baj van!"});
 if(result.length > 0){
    return res.json({Status: "Success"})
 } else {
    return res.json({Status: "Error", Error: "Téves jelszó vagy felhasználónév"});
 }
})
})
app.listen(8081, ()=> {
    console.log("Running");
})