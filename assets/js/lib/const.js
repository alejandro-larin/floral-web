export const url = new URL(document.URL)
export const domain = url.origin

export const AUTH_ROUTE = `${domain}/auth`

export const SIGN_IN_ROUTE = `${AUTH_ROUTE}/sign-in/`
export const SIGN_UP_ROUTE = `${AUTH_ROUTE}/sign-up/`
export const HOME_ROUTE = `${domain}`


