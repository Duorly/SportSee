import { Activity } from '@/utils/types/Activity';

export class FormatSessionActivity {
    public readonly day: string;
    public readonly kilogram: number;
    public readonly calories: number;

    constructor(data: Activity) {
        this.day = data.day;
        this.kilogram = data.kilogram;
        this.calories = data.calories;
    }

    get formattedDay(): string {
        return this.day;
    }

    get formattedKilogram(): number {
        return this.kilogram;
    }

    get formattedCalories(): number {
        return this.calories;
    }
}
