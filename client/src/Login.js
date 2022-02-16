import React, { useState } from 'react';
import {useSpring,animated} from 'react-spring'

function Login() {

  const [isPushed, setPush] = useState(false);
  const pushAnim = useSpring({
    boxShadow: isPushed ? 'none': '8px 4px  #116B31', delay: 100
  }
  ) 
  return <div style={{display:'flex', justifyContent:'center',alignItems:'center',backgroundColor:'black',height:'100vh',width:'100%'}}>
  <a href='' style={{textDecoration:'none'}}>
    <animated.div onClick={()=>{setPush(!isPushed)}} style={{backgroundColor:'#1DB954', borderRadius:'16px',alignItems:'center',width:'320px',height:'80px',
    display:'flex',justifyContent:'center',boxShadow: isPushed ? 'none': '8px 4px  #116B31',color:'white'}}>
      <p style={{textDecoration:'none',listStyle:'none',fontSize:'30px',fontWeight:'600'}}>LOGIN WITH SPOTIFY</p>
    </animated.div>
    </a>
  </div>;
}

export default Login;
