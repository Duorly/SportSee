import { ErrorData } from '@/models/ErrorData';
import { UserActivities } from '@/models/user/Activities';

export class UserActivitiesFactory {
    data: UserActivities | ErrorData = new ErrorData('Erreur 400', 'Données non disponibles');

    constructor(data: any, type: string) {
        if (type === 'api') {
            this.createApiUserActivities(data);
        }
    }

    private createApiUserActivities(data: any): void {
        try {
            this.data = new UserActivities(data);
        } catch (err: any) {
            this.createErrorData('Erreur lors de la création des activités utilisateur', err.message);
        }
    }

    private createErrorData(title: string, message: string): void {
        this.data = new ErrorData(title, message);
    }
}
