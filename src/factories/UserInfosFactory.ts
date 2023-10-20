import { ErrorData } from '@/models/ErrorData';
import { UserInfos } from '@/models/user/Infos';
import { Infos } from "@/utils/models/Infos";

export class UserInfosFactory {
    data: any;

    constructor(data: Infos, type: string) {
        try {
            if (type === 'api') {
                this.data = new UserInfos(data);
            } else {
                throw new ErrorData('Erreur 400', 'Données non disponibles');
            }
        } catch (err) {
            this.data = err;
        }
    }
}
