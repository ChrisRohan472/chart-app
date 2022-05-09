import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from "@mui/material/Avatar";
import Skeleton from '@mui/material/Skeleton';
import AppsIcon from '@mui/icons-material/Apps';
import { Box, Button } from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { SelectUnstyled } from "@mui/base";
import SelectedListItem from "./list";
import {store} from './reducers';
import Login from "./login";
import ValueGetterGrid from "./grid";
import Insta from "./insta";
import Charts from "./charts";
import ButtonAppBar from "./nav";
import Chater from "./chater";
import Reciever from "./reciever";
export default function Dashboard()
{   const [vis,setvis] =useState(true);
    const [index,setindex]=useState(1); 
    store.subscribe(() => {
    console.log('current state', store.getState());
    setindex(store.getState().reducer);
  });
  const [log,setlog]=useState("false");     
  store.subscribe(() => {
  console.log('current state', store.getState());
  setlog(store.getState().auth.status);
   });
 function print(index)
 {
    switch(index)
     {
     case 1:
     return <Insta/> ;
     case 2:
     return <Reciever/>;
     
     case 0:
     return <ValueGetterGrid/>;
     
     case 3:
      return "logout";
      case 4:
          return <Charts/>
     case 5:
       return <Chater/>;
     }
    //  return <Log/>;
 }
return(<>
<ButtonAppBar/>
<Grid container spacing={4}>
<Grid item md={3}  sm={4} xs={4}>  <Collapse in={vis}>
<SelectedListItem />
        </Collapse></Grid>
<Grid item xs={8} sm={8} md={9}  container padding={5}>{print(store.getState().reducer)}</Grid>
</Grid></>);
}