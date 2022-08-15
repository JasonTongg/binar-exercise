let initialState = {};

let githubReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case "getGithubData":
            return payload;
        default:
            return state;
    }
}

export default githubReducer;