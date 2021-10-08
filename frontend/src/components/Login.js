import React, { useState, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Profile from './Profile/Profile';

function Login() {
    const [formSubmitted, setFormSubmitted] = useState(true);
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [DataIsCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && DataIsCorrect) {
            formSubmitted(true);
        };
    }, [errors]);
    return ( <
            div className = "container" >
            <
            div className = "app-wrapper" >
            <
            div >
            <
            h2 className = "title" > Create acount < /h2> <
            /div> <
            form action = ""
            className = "form-wrapper" >
            <
            div className = "name" >
            <
            label className = "label" > Full name < /label> <
            input type = "text"
            name = "name"
            className = "type"
            value = { values.name }
            onChange = { handleChange }
            /> {
                errors.fullname && < p className = "error" > { errors.fullname } < /p>} <
                    /div> <
                    div className = "password" >
                    <
                    label className = "label" > Password < /label> <
                    input type = "password"
                name = "password"
                className = "type"
                value = { values.password }
                onChange = { handleChange }
                /> {
                    errors.password && < p className = "error" > { errors.password } < /p>} <
                        /div>

                    <
                    Router >
                        <
                        Link to = "/profile" > < button className = "submit" > Login < /button></Link >
                        <
                        Route path = "/profile"
                    component = { Profile }
                    /> 


                    <
                    /Router> <
                    /form> <
                    /div> { /* {!formSubmitted ? <RegistrationFailed formSubmitted={RegistrationFailed}/> :<RegistrationDone formSubmitted={RegistrationDone}/> } */ }

                    <
                    /div>
                )
            }

            export default Login