import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from '../components/About/About';
import './Home.css';
export default function Home() {
    return ( <div className = "home" >
        <h1> Welcome To Mindfull Open place </h1>  
        <p className = "message" > Despite of where you are from, your culture, etc..This is a an open place
        for everyone to share your thoughts </p> 
        <Router>
        <Link to = "/about" > <button> Get started </button></Link >
        <Route path = "/about"
        component = { About }/> 
         </Router> 
         </div>
    )
}