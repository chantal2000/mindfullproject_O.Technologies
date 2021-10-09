import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from 'redux';
import ArticleSlice from './ArticleSlice';
import reducer from './reducer';
export default configureStore({
    reducer: {
        article: ArticleSlice,
        article: reducer,
    },
});