import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Button from '@mui/material/Button';
import { Grid, Paper, TextField } from '@mui/material';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
// import GoogleLogin from 'react-google-login';

import Table from './grid';
import ValueGetterGrid from './grid';
import image from '../src/OIP.jpg';
function Log() {

  const handleSubmit=async (event)=>
  {
   event.preventDefault();
   var res= await axios.post('http://localhost:8080/signin',{username:event.target.username.value,password:event.target.password.value});
   localStorage.setItem('token',res.data.token); 
  }
  const responseGoogle=async (res)=>{
     var response= await axios.post('http://localhost:8080/send',res);
  console.log(response.data);
  }
  return (
    <div className="Log">
     
      <>
      <br/>
 
       <form onSubmit={handleSubmit}>
         <Grid container>
           <Grid item={6}>   <img src={image}></img></Grid>
    <Grid item xs={6}>
      <Grid container spacing={2}   padding={10}>

   
    
      <Grid item  xs={12}>
      <TextField name='username'  label='Email' type='email' />
      </Grid>
      <Grid item xs={12}>
      <TextField name='password'  label='Password' type='password'/>
      </Grid>
      <Grid item xs={12}>
     
      <Button size='large' variant="contained" type='submit'>Sign In</Button>
      </Grid>
      <Grid item xs={12}>
      
     {/* <GoogleLogin 
    clientId="226694990146-7h7ifsoldfk4tfjjhrdnclj8hvfsb81k.Logs.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} /> */}

      
</Grid>
</Grid>
      </Grid>
      </Grid>
    
      </form>
    
      </>
      <BrowserRouter>
      <Routes>
        <Route path="/table" element={<ValueGetterGrid/>}>
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Log;
