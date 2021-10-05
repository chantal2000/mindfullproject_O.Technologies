function articleCreated(description) {
    return {
        type: actions.articleCreated,
        payload: {
            description: ""
        }
    }
};
export default articleCreated;