export class ErrorData extends Error {
    private constructor_message: string;
    private constructor_name: string;

    constructor(name: string, message: string) {
        super(message);
        this.constructor_message = message;
        this.constructor_name = name;

        Object.setPrototypeOf(this, ErrorData.prototype);
    }

    get message(): string {
        return this.constructor_message;
    }

    get name(): string {
        return this.constructor_name;
    }
}