export class ValidateDataError extends Error {
    constructor(errors) {
        super("There are errors in validation");
        this.name = "ValidateDataError";
        this.errors = errors;    
    }
}
