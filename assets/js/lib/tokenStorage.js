import { TokenError } from "./error.js"
import { redirectToHome, redirectToSignIn } from "./redirect.js"

const STORAGE_KEY = "token"

function getToken() {
    return localStorage.getItem(STORAGE_KEY)
}

export function addToken() {
    localStorage.setItem(STORAGE_KEY, Date.now())
}

export function verifyTokenInPrivateRoute() {
    try {
        const token = getToken()
        if (!token) throw new TokenError("Token not found")
        document.body.style.visibility = "visible";
    } catch (error) {
        if(error instanceof TokenError) redirectToSignIn();
    }
}

export function verifyTokenInAuthRoute() {
    try {
        const token = getToken()
        if (token) throw new TokenError("Token already exists")
        document.body.style.visibility = "visible";
    } catch (error) {
        if(error instanceof TokenError) redirectToHome();
    }
}



