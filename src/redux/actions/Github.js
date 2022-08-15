let url = "https://api.github.com/users/jasontongg"

export const getApi = (payload) => {
    return{
        type: "getGithubData",
        payload,
    }
}

export let getData = async (dispatch) => {
    let rawData = await window.fetch(url);
    let data  = await rawData.json();
    return dispatch(getApi(data))
}
