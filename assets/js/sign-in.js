import { ValidateDataError } from "./error.js"; 

const form = document.querySelector("form");


form.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => clearError(input.name));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    try {
        validateData(data);
        console.log("Formulario válido", data);
    } catch (error) {
        if(error instanceof ValidateDataError){
            const { errors } = error;

            errors.forEach(error => {
                const spanError = document.getElementById(`${error.field}Error`);
                spanError.textContent = ""
                if (spanError) spanError.textContent = error.message;
            });
        }
      
    }
}); 

function validateData(data) {
    const { email, password } = data;
    const errors = [];

    if (!email) errors.push({field:"email", message:"El email es obligatorio"});
    if (!password) errors.push({field:"password", message:"La contraseña obligatoria" });

    if (errors.length > 0) throw new ValidateDataError(errors)
}


function clearError(inputName) {
    const span = document.getElementById(`${inputName}Error`);
    if (span) span.textContent = "";
}
