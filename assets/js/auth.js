import { verifyTokenInAuthRoute, verifyTokenInPrivateRoute } from "./lib/tokenStorage.js";
const privateRoutes = ["index.html"];

const url = new URL(document.URL);


const path = url.pathname.split("/")[3]


if (privateRoutes.includes(path)) {
    verifyTokenInPrivateRoute()
} else {
    verifyTokenInAuthRoute()
}

