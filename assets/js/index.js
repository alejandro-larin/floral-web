import { showToast } from "./components/toast.js";
import { redirectToSignIn } from "./lib/redirect.js";
import { deleteCookie } from "./lib/tokenCookie.js";

const deleteStorage = document.getElementById("deleteStorage");
const signOut = document.getElementById("signOut")

deleteStorage.addEventListener("click", ()=>{
    localStorage.clear()
    showToast("Almacenamiento eliminado!", "succes")
})

signOut.addEventListener("click", ()=>{
    deleteCookie("token")
    redirectToSignIn()
})