import React, { Fragment, useState } from "react";
const EditArticle = ({ article }) => {
  const [article_description, setArticleDescription] = useState(article.article_description);
  //edit A certain article
  const updateArticle = async e => {
    e.preventDefault();
    try {
      const body = { article_description };
      const response = await fetch(
        `http://localhost:6000/article/${article.user_id}`,
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

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${article.user_id}`}>
        Edit Article
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${article.article_id}`}
        onClick={() => setArticleDescription(article.article_description)}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Article</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setArticleDescription(article.article_description)}>
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={article_description}
                onChange={e => setArticleDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateArticle(e)}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setArticleDescription(article.article_description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditArticle;