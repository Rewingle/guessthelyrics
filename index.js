const express = require('express'); //Line 1
const app = express(); //Line 2
const cors = require('cors')
const spotifyWebApi = require('spotify-web-api-node')

const path = require('path');

const port = process.env.PORT || 5000; //Line 3

app.use(cors())
/*app.use(express.static(path.join(__dirname, 'client/build')));

 app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'), function(err) {
    if (err) {
      
      res.send("zaa "+port)
    }
  })
})                ACTIVATE THIS FOR DEPLOY*/


// This displays message that the server running and listening to specified port
app.listen(port, (err) =>{
  if(err) return console.log(err);
  console.log(`Listening on port ${port}`)
}
); //Line 6

app.post('/login', (req,res) => {
  //  setup 
      let spotifyApi = new spotifyWebApi(credentials)
  
  //  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api     
      const code = req.body.code
      console.log(code)
      // Retrieve an access token
      spotifyApi.authorizationCodeGrant(code).then((data) => {
  
          // Returning the User's AccessToken in the json formate  
          res.json({
              accessToken : data.body.access_token,
          }) 
      })
      .catch((err) => {
          console.log(err);
          res.sendStatus(400)
      })
  
  })

  

