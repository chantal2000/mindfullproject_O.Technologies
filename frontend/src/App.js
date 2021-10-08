import React from 'react'
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import Home from './Home/Home';
import store from './store';
import reducer from './reducer';
import img1 from './images/MindFlLogo.svg'

function App() {
    return ( < div className = "App" >
        <Router >
        <nav >
        <span > <Link to = "/Home" > < img src = { img1 }
        alt = "mindfullness"/> </Link></span >
        <span > <Link to = "/Home"
        className = "landing" > Home </Link></span >
        <span > <Link to = "/about"
        className = "white" > About </Link></span >
        <span > <Link to = "/signup"
        className = "white" > Signup </Link></span >
        <span > <Link to = "/profile"
        className = "white" > Profile </Link></span >
        </nav>
         <Route path = "/Home"exact component = { Home }/> <Route path = "/about"
        component = { About }
        />  <Route path = "/signup"component = { Signup }/> 
        <Route path = "/profile"component = { Profile }/>
         </Router>
          <store/>
        <reducer/>
        </div>
    );
}

export default App;