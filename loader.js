const axios = require("axios");
const fs=require('fs');
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
    fs.writeFileSync('data.json',response.data,function(err)
    {
    
    });
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});