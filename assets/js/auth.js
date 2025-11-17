import { verifyTokenInAuthRoute, verifyTokenInPrivateRoute } from "./lib/tokenCookie.js";
const privateRoutes = ["index.html"];

const url = new URL(document.URL);


const path = url.pathname.split("/")[3]


if (privateRoutes.includes(path)) {
    verifyTokenInPrivateRoute()
} else {
    verifyTokenInAuthRoute()
}

