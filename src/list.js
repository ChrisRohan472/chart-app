import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { useState } from 'react';
import {store} from './reducers';
export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = useState(1);
 
  
  const handleListItemClick = (event, index) => {

    setSelectedIndex(index);
    store.dispatch({type:"INCREMENT",payload:index});
    console.log(index);
    if(index===3)
    store.dispatch({type:"LOGOUT"});
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
         
          </ListItemIcon>
          <ListItemText primary="Data Grid" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="Weather API" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="List Charts" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="Chat Sender" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Chat Reciever"/>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)} 
        >
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
}
