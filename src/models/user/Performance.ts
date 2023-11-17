import { UserPerformance as PerfType } from '@/utils/models/UserPerformance';
import { Performance } from '@/utils/types/Performance';
import { FormatPerformanceData } from '../formater/Performance';
import { FormatKindPerformance } from '@/utils/FormatKindPerformance';

export class UserPerformance {
    private readonly id: string;
    private readonly kind: string;
    private readonly perf_data: Performance[];

    private static readonly kindMappings: Record<number, string> = {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
    };

    constructor(user: PerfType) {
        this.id = user.data.userId;
        this.kind = user.data.kind;
        this.perf_data = user.data.data;
    }

    getId(): string {
        return this.id;
    }

    getKind(): string {
        return this.kind;
    }

    get data(): Performance[] {
        return this.perf_data.map((element) => {
            const formattedData = new FormatPerformanceData(element);
            const mappedKind = UserPerformance.kindMappings[formattedData.kind as any] || formattedData.kind;

            return {
                value: formattedData.value,
                kind: FormatKindPerformance(mappedKind),
            };
        });
    }
}