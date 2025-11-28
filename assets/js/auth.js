import { url } from "./lib/const.js";
import { verifyTokenInAuthRoute, verifyTokenInPrivateRoute } from "./lib/tokenCookie.js";
const privateRoutes = ["index.html"];


const path = url.pathname.split("/")[3]


if (privateRoutes.includes(path)) {
    verifyTokenInPrivateRoute()
} else {
    verifyTokenInAuthRoute()
}

