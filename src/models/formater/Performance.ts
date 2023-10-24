import { Performance } from "@/utils/types/Performance";

export class FormatPerformanceData {
    public readonly value: number;
    public readonly kind: string;

    constructor(data: Performance) {
        this.value = data.value;
        this.kind = data.kind;
    }

    getValue(): number {
        return this.value;
    }

    getKind(): string {
        return this.kind;
    }
}
