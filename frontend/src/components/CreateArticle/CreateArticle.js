import React, { Fragment, useState } from 'react';
import './CreateArticle.css';
const port=6060;
const CreateArticle = () => {
    const [idea_title, setIdeaTitle] = useState("")
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { idea_title };
            const response = await fetch(`http://localhost:${port}/article`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };
    return ( <Fragment>
        <h1 className = "text-center mt-5" > Create Article </h1> 
        <form action = ""onSubmit = { onSubmitForm } >
        <textarea cols = "30" rows = "10"className = "form-control"value = { idea_title }
        onChange = { e => setIdeaTitle(e.target.value) }>
        </textarea> <button className="btn btn-primary">Post your article</button >
        </form> 
        </Fragment>
    )
};
export default CreateArticle;