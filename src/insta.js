import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import { renderEditInputCell } from "@mui/x-data-grid";
// import fs from 'fs';
export default function Insta()
{
    const [message,setmessage] =useState({});
    const [weat,setweat] =useState({});
    const [status,setstatus]=useState(false);
    // useEffect(()=>{
        
        
    //     console.log(message.location.name);
    //     console.log(weat.temp_c);
        
    // },[message,weat])
    function getWeather()
    {
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
            params: {q: 'chennai', lon: '13', lang: '80'},
            headers: {
              'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
              'X-RapidAPI-Key': 'f0aec3dfdcmsh08604cf6b132fd2p18f93cjsn88d9c998e202'
            }
          };
          var data;
          axios.request(options).then(function (response) {
              data=response.data;
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
          // file system module to perform file operations
   console.log(data);
   //save(data);
// Read users.json file
 // json data
          
         
    }
//     function save(data)
//     {
        
//   fs.writeFile("data.json",JSON.stringify(data), function(err) {
  
//     // Check for errors
//     if (err) throw err;
   
//     // Converting to JSON
//      // Print users 
// });
//     }
    function getfollow()
    {
       
        

        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: 'CHENNAI'},
            headers: {
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
              'X-RapidAPI-Key': 'f0aec3dfdcmsh08604cf6b132fd2p18f93cjsn88d9c998e202'
            }
          };

axios.request(options).then(function (response) {
	
    setmessage(response.data);
    setweat(response.data.current);
    setstatus(true);
    console.log(message);
    console.log(weat);
}).catch(function (error) {
	console.error(error);
});
      
    }
    
    function print()
    {
        if(status)
        return (<><h4> {message.location.name}</h4> 
        {JSON.stringify(weat)}
        </>)
        else
         return "";

    }
    return (<>
    <Grid container >
        <Grid item xs={5} padding={19}>
        <Button variant="contained" onClick={getfollow} >Update Weather Report </Button>
        </Grid>
        <Grid item xs={7} padding={10} paddingTop={5}>
        {print()}
     </Grid>
     </Grid>
        </>

    );
}