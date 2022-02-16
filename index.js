const express = require('express'); //Line 1
const app = express(); //Line 2
//const cors = require('cors')

const path = require('path');

const port = process.env.PORT || 5000; //Line 3

/* if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"))
}  */
//app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// This displays message that the server running and listening to specified port
app.listen(port, (err) =>{
  if(err) return console.log(err);
  console.log(`Listening on port ${port}`)
}
); //Line 6

// create a GET route
