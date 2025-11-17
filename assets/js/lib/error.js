export class ValidateDataError extends Error {
    constructor(errors) {
        super("There are errors in validation");
        this.name = "ValidateDataError";
        this.errors = errors;
    }
}

export class CredentialsError extends Error {
    constructor(message){
        super(message);
        this.name = "CredentialError"
    }
}

export class TokenError extends Error{
    constructor(message){
        super(message)
        this.name = "TokenError"
    }
}

export function clearFormErrors(form) {
    form.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", () => clearInput(input.name));
    });
}

function clearInput(inputName){
    const span = document.getElementById(`${inputName}Error`);
    if (span) span.textContent = "";
}