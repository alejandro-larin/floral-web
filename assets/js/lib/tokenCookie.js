import { TokenError } from "./error.js";
import { redirectToHome, redirectToSignIn } from "./redirect.js";

const COOKIE_NAME = "token";

function getCookie(name) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
}

function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 86400 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}


function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

export function addToken() {
    setCookie(COOKIE_NAME, Date.now());
}

export function verifyTokenInPrivateRoute() {
    try {
        const token = getCookie(COOKIE_NAME);
        if (!token) throw new TokenError("Token not found");

        document.body.style.visibility = "visible";

    } catch (error) {
        if (error instanceof TokenError) {
            deleteCookie(COOKIE_NAME);
            redirectToSignIn();
        }
    }
}


export function verifyTokenInAuthRoute() {
    try {
        const token = getCookie(COOKIE_NAME);
        if (token) throw new TokenError("Token already exists");

        document.body.style.visibility = "visible";

    } catch (error) {
        if (error instanceof TokenError) {
            redirectToHome();
        }
    }
}
