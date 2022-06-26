import React from 'react'
import { useSelector } from 'react-redux'
import {SelectCode} from './reduxStore/CodeState'

function ReduxTest() {
    const count = useSelector(SelectCode)
    return (
     
    <div>
        {count}
    </div>
  )
}

export default ReduxTest