import { HOME_ROUTE, SIGN_IN_ROUTE } from "./const.js";

export function redirectToSignIn(){
      window.location.href = SIGN_IN_ROUTE;
};

export function redirectToHome(){
      window.location.href = HOME_ROUTE;
};