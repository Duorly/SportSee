import { ErrorData } from '@/models/ErrorData';
import { UserInfos } from '@/models/user/Infos';
import { Infos } from "@/utils/models/Infos";

export class UserInfosFactory {
    data: UserInfos | ErrorData = new ErrorData('Erreur 400', 'Données non disponibles');

    constructor(data: Infos, type: string) {
        if (type === 'api') {
            this.createApiUserInfos(data);
        }
    }

    private createApiUserInfos(data: Infos): void {
        try {
            this.data = new UserInfos(data);
        } catch (err: any) {
            this.createErrorData('Erreur lors de la création des informations utilisateur', err.message);
        }
    }

    private createErrorData(title: string, message: string): void {
        this.data = new ErrorData(title, message);
    }
}
