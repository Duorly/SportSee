import { ErrorData } from '@/models/ErrorData';
import { UserSessions } from '@/models/user/Sessions';
import { UserSession } from '@/utils/models/UserSession';

export class UserSessionsFactory {
    data: UserSessions | ErrorData = new ErrorData('Erreur 400', 'Données non disponibles');

    constructor(data: UserSession, type: string) {
        if (type === 'api') {
            this.createApiUserSessions(data);
        }
    }

    private createApiUserSessions(data: UserSession): void {
        try {
            this.data = new UserSessions(data);
        } catch (err : any) {
            this.createErrorData('Erreur lors de la création des sessions utilisateur', err.message);
        }
    }

    private createErrorData(title: string, message: string): void {
        this.data = new ErrorData(title, message);
    }
}
