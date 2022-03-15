import React from 'react'
import { connect } from 'react-redux';
import { useState } from 'react'
import {changeToken} from './actions/index'

function Counter(props) {
    const[input,setInput] = useState("")
  return (
    <div>
        
        <input onChange={(e)=>{setInput(e.target.value)}}></input>

        <button onClick={()=>{props.changeToken(input)}}>ADD TOKEN</button>
        
    </div>
  )
}
const mapStateToProps = state =>{
    return {
      token: state.token
    }
  }


export default connect(
    mapStateToProps,
    {changeToken}
    )(Counter);