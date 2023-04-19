const TokenHeaderKey = process.env.REACT_APP_TOKEN_HEADER_KEY;

const setUserToken = (token)=>{
    localStorage.setItem(TokenHeaderKey, JSON.stringify(token));
};
const getUserToken = ()=>{
    return JSON.parse(localStorage.getItem(TokenHeaderKey));
};
const removeUserToken = ()=>{
    localStorage.removeItem(TokenHeaderKey)
    return true;
}

export {
    setUserToken, 
    getUserToken, 
    removeUserToken
}