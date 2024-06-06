import mysql from 'mysql2/promise';
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import methodoverride from "method-override";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
const port=8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
app.listen(port,()=>{
    console.log("listening to port")
})
app.get("/",(req,res)=>{
  let q='SELECT COUNT(*) FROM user'
    async function main() {
      // Create MySQL connection
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'delta',
        password: 'SHIvam@141004'
      });
    
      try {
        const [results, fields] = await connection.query(q);
        var count=results[0]["COUNT(*)"];
        console.log(count);
        res.render("home.ejs",{count});
      } catch (err) {
        console.error(err);
        res.send("error")
      } finally {
        connection.end();
      }
    }
    main();
});
app.get("/user",(req,res)=>{
  let q=`select  * from user`;
  async function main() {
    // Create MySQL connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'delta',
      password: 'SHIvam@141004'
    });
  
    try {
      const [results, fields] = await connection.query(q);
      res.render("showuser.ejs",{results});
    } catch (err) {
      console.error(err);
      res.send("error")
    } finally {
      connection.end();
    }
  }
  main();
});
app.get("/user/:id/edit",(req,res)=>{
  
  let id=req.params;
  console.log(id["id"]);
  let q=`select  * from user WHERE id='${id["id"]}'`;
  async function main() {
    // Create MySQL connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'delta',
      password: 'SHIvam@141004'
    });
  
    try {
      const [results, fields] = await connection.query(q);
      let user=results[0];
      res.render("edit.ejs",{user})
      console.log(user);
    } catch (err) {
      console.error(err);
      res.send("error")
    } finally {
      connection.end();
    }
  }
  main();
});
app.patch("/user/:id",(req,res)=>{
  let id=req.params;
  let {password,username}=req.body;
  console.log(username,password);
  let q=`select  * from user WHERE id='${id["id"]}'`;
  async function main() {
    // Create MySQL connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'delta',
      password: 'SHIvam@141004'
    });
  
    try {
      const [results, fields] = await connection.query(q);
      let user=results[0];
      if(password!=user.password)
      {
        res.send("wrong password")
      }
      else
      {
          let q2=` UPDATE user SET username='${username}' WHERE id='${id["id"]}' `
          console.log(q2);
          const [results, fields] = await connection.query(q2);
          res.redirect("/user");
      }
    } catch (err) {
      console.error(err);
      res.send("error")
    } finally {
      connection.end();
    }
  }
  main();
});
// Function to create a random user
// Async function to handle database connection and query
