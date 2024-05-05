export class DatabaseConnectionError extends Error {
    statusCode = 500;
    reason = "Connetion database error !!";

    constructor() {
        super()
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }
}