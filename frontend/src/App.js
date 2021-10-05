import React,{Fragment} from 'react'
import './App.css';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import ListOfArticles from './components/ListOfArticles';
function App() {
    return (
      <Fragment>
        <div className="container">
        <CreateArticle />
        <EditArticle/>
        <ListOfArticles/>
        </div>
      </Fragment>
    );
}

export default App;