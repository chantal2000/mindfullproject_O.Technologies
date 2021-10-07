import React,{Fragment,useEffect,useState} from "react";
const ListOfArticles = () => {
    const [articles,setArticles]=useState([]);
      //delete a certain article

  const deleteArticle = async id => {
    try {
      const deleteArticle = await fetch(`http://localhost:6000/article/${id}`, {
        method: "DELETE"
      });

      setArticles(articles.filter(article => article.user_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
    const getArticle=async()=>{
        try {
            const response=await fetch("http://localhost:6000/article");
            const resultJson=await response.json();
        setArticles(resultJson)
        } catch (err) {
            console.log(err.message);      
        }
    };
    useEffect(()=>{
        getArticle();
    },[]);
    // console.log(article)
    {articles.map(article=>(
        <tr key={article.user_id}>
            <td>{article.article_description}</td>
            <td>Edit Article</td>
            <td><button className=""onClick={() => deleteArticle(article.user_id)}>Delete</button></td>
        </tr>
    ))}
    return (
    <Fragment>
        <table class="table">
    <thead>
      <tr>
        <th>Article description</th>
        <th>Edit article</th>
        <th>Delete Article</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
    </Fragment>
    )
}
export default ListOfArticles;