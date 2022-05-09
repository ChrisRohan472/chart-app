import {TextField,Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { io } from 'socket.io-client';
export default function Chater()
{   const [data,setdata] =useState('');
   
    function send(event)
    {   
       const socket=io('http://localhost:3000/');
        event.preventDefault();
      console.log(event.target.mes.value);
      socket.emit('chat',event.target.mes.value);
      event.target.mes.value=''
    socket.on('chat',function(data)
    {
        setdata(data);
    })
      
    }
    return(<>


    
<form onSubmit={send}>
    <Grid item container padding={5} direction="row"
  justifyContent="center"
  alignItems="center" spacing={4}>
<Grid item  md={8} sm={12} xs={12}>
    {/* <TextField  id="outlined-basic" label="Message" name="mes" variant="outlined"  size='large' /> */}
   
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          fullWidth
          name="mes"
        />
    </Grid>
  
    <Grid item md={4} sm={12} xs={12}>
    <Button type='submit' size='large'>Send</Button>
    </Grid>
    </Grid>
    </form>
    

    </>);
}