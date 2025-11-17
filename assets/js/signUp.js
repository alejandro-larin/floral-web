import { clearFormErrors, ValidateDataError } from "./lib/error.js"; 
import { redirectToSignIn } from "./lib/redirect.js";
import { addUser } from "./lib/userStorage.js";


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const data = Object.fromEntries(new FormData(form).entries());
    try {
        validateData(data);
        addUser(data);
        redirectToSignIn();
    } catch (error) {
        if(error instanceof ValidateDataError){
            const { errors } = error;
            errors.forEach(error => {
                const spanError = document.getElementById(`${error.field}Error`);
                if (spanError) spanError.textContent = error.message;
            });
        };
    };
}); 

clearFormErrors(form);

function validateData(data) {
    const { email, password, confirmPassword, username } = data;
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    const isPasswordConfirm = password === confirmPassword;
   
    const errors = [];

    if (!username) errors.push({field:"username", message:"El nombre es obligatorio"});
    
    if (!email || !emailRegex.test(email)) errors.push({ field: "email", message: "Ingresa un correo electrónico válido" });
    
    if (!password || !passwordRegex.test(password)) errors.push({ field: "password", message: "La contraseña debe tener al menos 8 caracteres, con letras y números" });
    
    if (!confirmPassword) errors.push({field:"confirmPassword", message:"La contraseña obligatoria" });
    
    if(!isPasswordConfirm) errors.push({field:"confirmPassword", message:"Las contraseñas no coinciden" });
    
    if (errors.length > 0) throw new ValidateDataError(errors)
};

