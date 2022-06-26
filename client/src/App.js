import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import Game from './Game';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {setCode} from './reduxStore/CodeState'
function App() {


  axios.post("http://localhost:5000/login", { code })
  .then((response) => {

    // If success then cut the code string from the URL and execute the other thing
    window.history.pushState({}, null, "/");

    console.log("RESPONSE  "+response.data);
    //setAccessToken(response.data.accessToken);

  })
  .catch((err) => {
    //   If fail redirect to home page - Login page
    console.log(err)
    //window.location = "/";
  }); 
  //const[code,setCode] = useState(null)

  const [Loading,setLoading] = useState(true)
  //const [code,setCode] = useState(null)
  const code = useSelector(state=>state.Code.value)
  const dispatch = useDispatch()
  useEffect(()=>{
   if(localStorage.getItem('AccessCode')){
     dispatch(setCode(localStorage.getItem('AccessCode')))
   }
   else{
    const code = new URLSearchParams(window.location.search).get('code')
    dispatch(setCode(code))

   }
  
  })
  console.log(code)
  return (
    <div className="App">
          {code? <Game code={code} />  : <Login/>}
    </div>
  ); 
}

export default App;
