const express=require('express')
const mysql=require('mysql')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_ROOT,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

app.post('/signup',(req,res)=>{
    const sql=" INSERT INTO login('name','email','password') values(?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })

})

app.listen(8081,()=>{
    console.log("listening");
})