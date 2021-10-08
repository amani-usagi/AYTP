    const ACCESS_TOKEN_KEY= "access"
    const REFERESH_TOKEN_KEY = "refresh"


    export function getUserToken(){
    return localStorage.getItem(ACCESS_TOKEN_KEY) ?? ""
    }

    export function isLoggedIn(){
        return localStorage.getItem(ACCESS_TOKEN_KEY) !== ""
    }

    export function storeTokens(accessToken,refreshToken){
        localStorage.setItem(ACCESS_TOKEN_KEY,accessToken)
        localStorage.setItem(REFERESH_TOKEN_KEY,refreshToken)
    }