export const url = new URL(document.URL)
export const domain = url.origin


export const AUTH_ROUTE = `${domain}/pages/auth`
export const PRIVATE_ROUTE = `${domain}/pages/private`

export const SIGN_IN_ROUTE = `${AUTH_ROUTE}/sign-in.html`
export const HOME_ROUTE = `${PRIVATE_ROUTE}/index.html`


