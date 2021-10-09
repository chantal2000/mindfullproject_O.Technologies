import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from 'redux';
import reducer from './reducer';
import ArticleSlice from './ArticleSlice';
export default configureStore({
    reducer: {
        article: ArticleSlice,
        article: reducer,
    },
});