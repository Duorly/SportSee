import { ErrorData } from '@/models/ErrorData';
import { UserPerformance } from '@/models/user/Performance';
import { UserPerformance as PerfType } from '@/utils/models/UserPerformance';

export class UserPerformanceFactory {
    data: UserPerformance | ErrorData = new ErrorData('Erreur 400', 'Données non disponibles');

    constructor(data: PerfType, type: string) {
        if (type === 'api') {
            this.createApiUserPerformance(data);
        }
    }

    private createApiUserPerformance(data: PerfType): void {
        try {
            this.data = new UserPerformance(data);
        } catch (err : any) {
            this.createErrorData('Erreur lors de la création des performances utilisateur', err.message);
        }
    }

    private createErrorData(title: string, message: string): void {
        this.data = new ErrorData(title, message);
    }
}
