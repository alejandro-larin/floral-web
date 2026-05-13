import { url } from "./lib/const.js";
import { verifyTokenInAuthRoute, verifyTokenInPrivateRoute } from "./lib/tokenCookie.js";
const privateRoutes = ["/"];

const path = url.pathname

if (privateRoutes.includes(path)) {
    verifyTokenInPrivateRoute()
} else {
    verifyTokenInAuthRoute()
}

