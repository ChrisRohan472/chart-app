import { useEffect, useState } from "react"

import { io } from "socket.io-client"
export default function Reciever()
{
    const [data,setdata]=useState([]);
    useEffect(()=>
    {
    const socket=io('http://localhost:3000/');
    socket.on('chat',(datas)=>
    {
        var dd=[];
        dd=dd.concat(data);
        console.log(datas);
        console.log(dd);
        dd.push(datas)
        setdata(dd);
    })
   
    });

    return (
        <>
        
       <ul>{data.map(d=><li>{d}</li>)}</ul> 
        </>
    )
}