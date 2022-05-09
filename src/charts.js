import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar, Chart, Doughnut, Line, Pie, Scatter} from 'react-chartjs-2';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

ChartJS.register(...registerables);
export default function Charts()
{
    const [age, setAge] =useState('');

  const handleChange = (event) => {
    setAge(event.target.value );
    console.log(event.target.value);
    var data={}
  };
    useEffect(()=>
    {
       

        const options = {
          method: 'GET',
          url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
          params: {q: 'chennai'},
          headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': 'f0aec3dfdcmsh08604cf6b132fd2p18f93cjsn88d9c998e202'
          }
        };
        
        axios.request(options).then(function (response) {
            localStorage.setItem("data",JSON.stringify(response.data));
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
      
    }
    );
    function data1()
    {
     var data= JSON.parse(localStorage.getItem('data'));
     return "Polulation "+(data.city.population);
    }
    function lab()
      {
       var data= JSON.parse(localStorage.getItem('data'));
       var arr=data.list;
       var dataset=[];
       arr.map(data=>{
          dataset.push(data.dt_txt);

       });
    //    console.log(dataset);
       return dataset;
      }
      function data()
      {
       var data= JSON.parse(localStorage.getItem('data'));
       var arr=data.list;
       var dataset=[];
       arr.map(data=>{
          dataset.push(data.main.feels_like);

       });
       return dataset;
      }
      
    return (<><h2>{JSON.parse(localStorage.getItem('data')).city.name+" City Weather Report"}</h2>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Type"
    onChange={handleChange}
  >
    <MenuItem value={10}>Line</MenuItem>
    <MenuItem value={20}>Bar</MenuItem>
    <MenuItem value={30}>Doughnut</MenuItem>
    <MenuItem value={40}>Pie</MenuItem>
  </Select>
</FormControl>
    
    {(age===10)?
<Line
 
  data={{
    labels:lab(),
    datasets: [
      {
        label: "Level of Temperature",
        data: data(),
        backgroundColor: [`rgb(190, 100, 100, 0.6)`],
        borderWidth: 4,
      },
    ],
  }}
/>:""}
{(age===20)?
<Bar
 data={{
    labels:lab(),
    datasets: [
      {
        label: "Level of Temperature",
        data: data(),
        backgroundColor: [`rgb(190, 100, 192, 0.6)`],
        borderWidth: 4,
      },
    ],
  }}
/>:""}
{(age===30)?
<Doughnut  data={{
    labels: lab(),
    datasets: [
      {
        label: "Level of Temperature",
        data: data(),
        backgroundColor: [`rgb(100, 100, 199, 0.6)`],
        borderWidth: 4,
      },
    ],
  }} />:""}
  {(age===40)?
  <Pie
   data={{
    labels: lab(),
    datasets: [
      {
        label: "Level of Temperature",
        data: data(),
        backgroundColor: [`rgb(190, 100, 100, 0.6)`],
        borderWidth: 4,
      },
    ],
  }}/>:""}
{/* <p>{data1()}</p> */}
</>);
}