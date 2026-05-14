import { url } from "./lib/const.js";
import { verifyTokenInAuthRoute, verifyTokenInPrivateRoute } from "./lib/tokenCookie.js";
const privateRoutes = ["floral-web","floral-web/index.html"];

const path = url.pathname.split("/").filter(Boolean).join("/");

const isPrivateRoute = privateRoutes.includes(path);

if (isPrivateRoute) {
    verifyTokenInPrivateRoute()
} else {
    verifyTokenInAuthRoute()
}

