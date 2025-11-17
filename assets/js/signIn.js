import { clearFormErrors, CredentialsError, ValidateDataError } from "./lib/error.js";
import { showErrorToast } from "./components/toast.js";
import { addToken } from "./lib/tokenCookie.js";
import { redirectToHome } from "./lib/redirect.js";
import { verifyCredentials } from "./lib/userStorage.js";


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    try {
        validateData(data);
        verifyCredentials(data);
        addToken();
        redirectToHome();
    } catch (error) {
        if (error instanceof ValidateDataError) {
            const { errors } = error;
            errors.forEach(err => {
                const spanError = document.getElementById(`${err.field}Error`);
                if (spanError) spanError.textContent = err.message;
            });
        }
        if (error instanceof CredentialsError) {    
            showErrorToast(error.message);
        }
    }
});

clearFormErrors(form)

function validateData(data) {
    const { email, password } = data;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errors = [];

    if (!emailRegex.test(email) && !email) errors.push({ field: "email", message: "ingresa un correo electrónico válido" });
    if (!password) errors.push({ field: "password", message: "La contraseña obligatoria" });

    if (errors.length > 0) throw new ValidateDataError(errors)
}


