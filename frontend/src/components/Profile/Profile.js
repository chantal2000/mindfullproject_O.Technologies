import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react'
import Select from 'react-select';
import './Profile.css';
import EditProfile from '../EditProfile/EditProfile';
import ListOfArticles from '../ListOfArticles';
import CreateArticle from '../CreateArticle/CreateArticle';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const actions = [
//   { label: "Edit Profile", value: 1 },
//   { label: "Create article", value: 2 },
//   { label: "All articles", value: 3 }
// ];
export default function Profile({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ["Edit profile", "create article", "All articles"]
    return ( <div className = "container">
        <div className = "dropdown">
        <div className = "dropdown-btn"onClick = {
            (e) =>
            setIsActive(!isActive)
        } > Profile <span className = "fas fa-caret-down" > </span></div > {
            isActive && ( <div className = "dropdown-content" > {
                    options.map(option => { <div onClick = {
                                (e) => {
                                    setSelected(option);
                                    setIsActive(false);
                                }
                            } >
                            </div>
                    })
                } <div onClick = {
                    e => setSelected(e.target.textContent)
                } > </div> 
                <Router >

                <Link to = "/editprofile" > < div className = "dropdown-item" > Edit profile </div> </Link >
                <Link to = "/createarticle" > < div className = "dropdown-item" > Create Article </div> </Link >
                <Link to = "/allarticle" > < div className = "dropdown-item" > All articles </div> </Link >
                <Route path = "/editprofile"
                component = { EditProfile }
                />  <Route path = "/createarticle"
                component = { CreateArticle }
                /> <Route path = "/allarticle"component = { ListOfArticles }
                /> </Router > 
                </div>
            )
        }; </div> </div>
    )
}