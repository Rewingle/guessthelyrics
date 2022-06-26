import React from 'react'
import code from './App'
import useAuth from './hooks/useAuth'

function Game(code) {
    const access_token = useAuth(code)

  return (
    <div>Game+{access_token}</div>
  )
}

export default Game