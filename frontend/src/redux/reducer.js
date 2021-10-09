import store from "./store";
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
    // return state;
    const unsubscribe = store.subscribe(() => {
        console.log("The store has been changed", store.getState());
    })
    store.dispatch({
        type: "Signup",
        payload: {
            description: ""
        }
    });
    unsubscribe();
    store.dispatch({
        type: "Login",
        payload: {
            description: ""
        }
    });
    store.dispatch({
        type: "Edit Profile",
        payload: {
            description: ""
        }
    });
    store.dispatch({
        type: "Create Article",
        payload: {
            description: ""
        }
    });
    store.dispatch({
        type: "Delete article ",
        payload: {
            description: ""
        }
    });
    store.dispatch({
        type: "Edit article",
        payload: {
            description: ""
        }
    });
    store.dispatch({
        type: "Share songs",
        payload: {
            description: ""
        }
    });
console.log(store.getState());
}
export default reducer;