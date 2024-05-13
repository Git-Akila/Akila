backendnodeExpress  => Foldername
______________________
backend->index.js                package.json{"main": "index.js", "type":"module",}
--------

  import express from 'express';
import users from './user.js'
const app=express()
app.get("/",(req,res)=>{
    res.send("Server is ready")
})
app.get("/api/user",(req,res)=>{
    res.send(users)
})
const port= process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
})


Frontend          => package.json {"proxy":"http://localhost:3000",}
--------
  import React, {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [user,setUser]=useState([])
  const getUser=()=>{
    fetch("/api/user")
    .then(res=>res.json())
    .then(json=>setUser(json))
  }
  useEffect(()=>{
    getUser();
  },[])
  return (
    <div className="App">
      {user.map((data)=>{
       return <>
       <div style={{border:"1px solid gray",width:"500px"}}>
        <h1>Name:{data.name}</h1>
        <h1>Username:{data.username}</h1>
        </div>
        </>
      })}
     
    </div>
  );
}

export default App;
