import React from 'react'

function LoadingScreen() {
  return (
    <div style={{width:'100%',height:'100vh',backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <p style={{color:'white',fontSize:'64px'}}>LOADING...</p>
    </div>
  )
}

export default LoadingScreen