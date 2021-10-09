import '../components/CreateArticle/CreateArticle.css';
import { createSlice } from "@reduxjs/toolkit";
// import reducer from './reducer';
const ArticleSlice = createSlice({
    name: "article",
    initialState: [
        { user_id: 1, article_title: 'article1', completed: false },
        { user_id: 2, article_title: 'article2', completed: false },
        { user_id: 3, article_title: 'article3', completed: false },

    ],
    reducers: {
        CreateArticle: (state, action) => {
            const newarticle = {
                user_id: Date.now(),
                article_title: action.payload.title(),
                completed: false
            };
            state.push(newarticle)
        }
    }

});



export const { CreateArticle } = ArticleSlice.actions;
export default ArticleSlice.reducer;