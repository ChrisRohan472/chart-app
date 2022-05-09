const fs = require("fs");


  data={
    name: 'John Doe',
    emai: 'john.doe@example.com',
    age: 27,
    gender: 'Male',
    profession: 'Software Developer'
};
  fs.writeFile("data.json",JSON.stringify(data), function(err) {
  
    // Check for errors
    if (err) throw err;
   
    // Converting to JSON
     // Print users 
});
// Read users.json file


 
