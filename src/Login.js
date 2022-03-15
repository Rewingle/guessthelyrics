import React from 'react'
import { connect } from 'react-redux';
import { useState } from 'react'
import {changeToken} from './actions/index'
import { useEffect } from 'react';

const Login = (props)=>{
    const client_id= 'b5c6449b6bb64903a8d8ddce10c09688'
    const redirect_uri = 'http://localhost:3000/login'

    const URL ="https://accounts.spotify.com/authorize?client_id="+client_id+"&response_type=code&redirect_uri="+redirect_uri+"&scope=user-read-private%20user-top-read%20playlist-read-private%20user-read-currently-playing%20ugc-image-upload&20user-read-recently-played&state=34fFs29kd09"
   
    useEffect(()=>{
        const code = new URLSearchParams(window.location.search).get('code')
        console.log(code)
        props.changeToken(code)
    })
    
    return <div>
    <h1>LOGIN PAGE</h1>
    <a href={URL}>CLICK FOR LOGIN</a>
    </div>
  }
  const mapStateToProps = state =>{
    return {
      token: state.token
    }
  }

  export default connect(
    mapStateToProps,
    {changeToken}
    )(Login)