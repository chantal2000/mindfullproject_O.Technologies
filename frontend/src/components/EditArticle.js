import React, { Fragment, useState } from "react";
const EditArticle = ({ article }) => {
    const [article_description, setArticleDescription] = useState(article.article_description);
    //edit A certain article
    const updateArticle = async e => {
        e.preventDefault();
        try {
            const body = { article_description };
            const response = await fetch(
                `http://localhost:${port}/article/${article.user_id}` ,
                {
                  method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body)
                }
            );
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return ( <Fragment>
        <button type = "button"data-target = { `#id${article.user_id}` }>Edit Article </button>
        <div class = "modal"id = { `id${article.article_id}` }onClick = {() => setArticleDescription(article.article_description)
        }>
        <h4 class = "modal-title" > Edit Article </h4> 
        <button type = "button"onClick = {() => setArticleDescription(article.article_description)
        }>
        </button> 
        </div>
         <div>
        <input type = "text"className = "form-control"value = { article_description }
        onChange = { e => setArticleDescription(e.target.value) }/> 
        </div>
         <div>
        <button type = "button"class = "btn btn-warning"data-dismiss = "modal"onClick = { e => updateArticle(e) } >
        Edit </button> 
        <button type = "button"class = "btn btn-danger"onClick = {() => setArticleDescription(article.article_description)}>
        </button> </div> 
        </Fragment>
    );
};

export default EditArticle;