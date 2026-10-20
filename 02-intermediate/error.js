class ValidationError extends Error {
    constructor(message, field){
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateAge(age) {
    if (typeof age !== "number") throw new ValidationError("Age must be a number", "age");
    return age;
}

try {
    validateAge("abc");
} catch (err) {
    if (err instanceof ValidationError) console.log(err.field, err.message);
    else throw err;
} finally {
    console.log("always runs");
}