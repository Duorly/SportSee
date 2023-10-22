import { Duration } from "@/utils/types/Duration";

export class FormatSessionDuration {
    public day: string;
    public sessionLength: number;

    constructor(data: Duration) {
        this.day = data.day;
        this.sessionLength = data.sessionLength;
    }

    getDay(): string {
        return this.day;
    }

    getSessionLength(): number {
        return this.sessionLength;
    }
}
