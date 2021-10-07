let lastId = 0;

function reducer(state = [], action) {
    if (action.type === 'ArticleAdded')
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    else if (action.type === 'ArticleRemoved')
        return state.filter(article => article.id !== action.payload.id)
    return state;
}
export default reducer;