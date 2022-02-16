const express = require('express'); //Line 1
const app = express(); //Line 2

const path = require('path');

const port = process.env.PORT || 5000; //Line 3

if(process.env.NODE_ENV === "production"){
  app.use(express.static())
}

// This displays message that the server running and listening to specified port
app.listen(port, (err) =>{
  if(err) return console.log(err);
  console.log(`Listening on port ${port}`)
} 
); //Line 6
app.use(express.static(path.join(__dirname, '')))
// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11