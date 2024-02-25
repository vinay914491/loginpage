const express=require('express');
const mysql=require('mysql2');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"vinay18",
    database:"register"
})

app.post('/Register',(req,res)=>
{
    const sql = "INSERT INTO login (`firstname`,`lastname`,`username`, `password`) VALUES (?)";
    const values=[
        req.body.firstname,
        req.body.lastname,
        req.body.username,
        req.body.password
    ]
    db.query(sql,[values], (err,data) =>{
        if(err)
        {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/',(req,res)=>
{
    const sql = "SELECT * FROM login where `username`=? AND `password` =?";
    db.query(sql,[req.body.username,req.body.password], (err,data) =>{
        if(err)
        {
            return res.json("Error");
        }
        if(data.length>0)
        {
            return res.json("SUCCESS");
        }
        else{
            return res.json("FAILED");
        }
    })
})
app.listen(3000,()=>{
   console.log("listening");
})
db.connect(function(err) {
    if (err) throw err;
  console.log("Connected!");
  });
