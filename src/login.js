import React from "react"
import Button from '@mui/material/Button';
import { Grid, Paper, TextField } from '@mui/material';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {store} from "./reducers"
import ButtonAppBar from "./nav";
export default function Login()
{   const navigate=useNavigate();
    const handleSubmit=async (event)=>
    {
     event.preventDefault();
    //  var res= await axios.post('http://localhost:8080/signin',{username:event.target.username.value,password:event.target.password.value});
    //  localStorage.setItem('token',res.data.token);
     store.dispatch({type:"LOGIN"});
    //  navigate('/');
    }
 return (<>
 <ButtonAppBar/>
 <form onSubmit={handleSubmit}>
 <Grid container spacing={3} paddingTop={5} direction="column" alignItems='center' >
 <Grid item xs sm md={12}>
 <TextField name='username'  label='Email' type='email' />
 </Grid>
 <Grid item  xs sm  md={12}>
 <TextField name='password' label='Password' type='password'/>
 </Grid>
 <Grid item xs sm md={12}>

 <Button size='large' variant="contained" type='submit'>Sign In</Button>
 </Grid>
{/* <GoogleLogin 
clientId="226694990146-7h7ifsoldfk4tfjjhrdnclj8hvfsb81k.Logs.googleusercontent.com"
buttonText="Login"
onSuccess={responseGoogle}
onFailure={responseGoogle}
cookiePolicy={'single_host_origin'} /> */}
 </Grid>

 </form></>);
}