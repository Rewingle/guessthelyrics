import React, { useEffect, useState } from 'react'
import './Login.css'
import SpotifyWebApi from 'spotify-web-api-js'
import axios from 'axios'
import {isMobile} from 'react-device-detect'
import useAuth from './hooks/useAuth'


function Login() {

  const client_id= 'b5c6449b6bb64903a8d8ddce10c09688'
  const clientSecret = '' //HIDE THESE ONES
  //const redirect_uri= "http://localhost:3000/" //CHANGE B4 DEPLOY
  const [redirect_uri,setRedirect_uri] = useState("http://localhost:3000/")
  const [topTracks,setTopTracks] = useState([])
  const Spotify = new SpotifyWebApi()
  const URL ="https://accounts.spotify.com/authorize?client_id="+client_id+"&response_type=code&redirect_uri="+redirect_uri+"&scope=user-read-private%20user-top-read%20playlist-read-private%20user-read-currently-playing%20ugc-image-upload&20user-read-recently-played&state=34fFs29kd09"
  
 /*  const [isLogged,setLogged] = useState(false)
  const [profilePic,setProfilePic] = useState("")
  
  async function verifyToken(isToken){
    await axios(`https://api.spotify.com/v1/me`,{
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + isToken
        }
    }).then(trackresponse=> {
        setLogged(true)
        Spotify.setAccessToken(isToken)
        
        
    }).catch(error=> {console.log("ERROR: ",error); 
                    alert("expired")
                  setLogged(false)})




  const getUserProfilePic = ()=>{
    Spotify.getMe().then((res)=>{setProfilePic(res.images[0].url)})
  }
  const favSongs = ()=>{
    Spotify.getMyTopTracks().then((res)=>{setTopTracks(res.items)})
  } */

  return (
   <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100%',backgroundColor:'black'}}>
        <a className='login-button' href={URL} style={{textDecoration:'none'}}>
        <p>LOGIN WITH SPOTIFY</p>
        </a>
    </div>
  )

}

export default Login
