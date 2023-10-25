export class ErrorData extends Error {
    constructor(public name: string, public message: string) {
        super(message);
        Object.setPrototypeOf(this, ErrorData.prototype);
    }
}
