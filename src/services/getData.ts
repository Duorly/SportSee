import { UserInfosFactory } from "@/factories/UserInfosFactory";
import { ErrorData } from "@/models/ErrorData";

const appMode = import.meta.env.VITE_APP_ENV;

const baseUrl = appMode === "local" ? import.meta.env.VITE_PUBLIC_URL + '/mock' : import.meta.env.VITE_API_URL;

const userId = import.meta.env.VITE_USER_ID;

async function getData(url: string, Factory: any, apiType: string) {
    let returnData;
    let isError = false;
    let error;
    let loading = true;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            isError = true;
            error = new ErrorData('Erreur 404', 'La ressource demandée n\'a pas été trouvée');
        } else {
            const data = await response.json();
            const userData = new Factory(data, apiType);

            if (!(userData.data instanceof ErrorData)) {
                returnData = userData.data;
            } else {
                isError = true;
                error = userData.data;
            }
        }
        loading = false;

        if (isError) {
            throw error;
        }

        return returnData;
    } catch (error) {
        isError = true;
        loading = false;
        throw new ErrorData('Erreur 400', 'Données non disponibles');
    }
}

export async function fetchUserInfosData() {
    const url = `${baseUrl}${appMode === "local" ? "/userInfos.json" : `/${userId}`}`;
    return getData(url, UserInfosFactory, "api");
}