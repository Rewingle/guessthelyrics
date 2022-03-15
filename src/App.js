
import './App.css';
import { connect } from 'react-redux';
import Counter from './Counter';
import {changeToken} from './actions/index'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import Login from './Login';

function App(props) {
  
  const Home = ()=>{
    return (
      <div className='App'>
          <h2>HOME PAGE</h2>
          <Counter/>
          <a href='/login'>GO TO LOGIN PAGE</a><span></span>
          
          </div>
    )
    
  }

  

  return (

    <Router>
       TOKEN:  {props.token}
      <Routes>
        <Route exact
          path="/"
          element={<Home/>}/>
      </Routes>
      <Routes>
        <Route 
          path="/login"
          element={<Login/>}/>
      </Routes>

      

    </Router>
  );
}
const mapStateToProps = state =>{
  return {
    token: state.token
  }
}


export default connect(mapStateToProps,{changeToken})(App);
