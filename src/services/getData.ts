import { UserInfosFactory } from "@/factories/UserInfosFactory";
import { UserActivitiesFactory } from "@/factories/UserActivitiesFactory";
import { ErrorData } from "@/models/ErrorData";
import { UserSessionsFactory } from "@/factories/UserSessionsFactory";
import { UserPerformanceFactory } from "@/factories/UserPerformanceFactory";

const appMode = import.meta.env.VITE_APP_ENV;
const baseUrl = appMode === "local" ? import.meta.env.VITE_PUBLIC_URL + '/mock' : import.meta.env.VITE_API_URL;
const userId = import.meta.env.VITE_USER_ID;

async function getData(url: string, Factory: any, apiType: string) {
    let returnData;
    let isError = false;
    let error;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            const userData = new Factory(data, apiType);

            if (!(userData.data instanceof ErrorData)) {
                returnData = userData.data;
            } else {
                isError = true;
                error = userData.data;
            }
        } else {
            isError = true;
            error = new ErrorData('Erreur 404', 'La ressource demandée n\'a pas été trouvée');
        }
    } catch (error) {
        isError = true;
        throw new ErrorData('Erreur 400', 'Données non disponibles');
    } finally {
        if (isError) {
            throw error;
        }
    }

    return returnData;
}

function constructUrl(endpoint: string): string {
    return `${baseUrl}${appMode === "local" ? `/${endpoint}.json` : `/user/${userId}/${endpoint}`}`;
}

export async function fetchUserInfosData() {
    let endp = appMode === 'local' ? 'userInfos' : '';
    const url = constructUrl(endp);
    return getData(url, UserInfosFactory, "api");
}

export async function fetchActivitiesData() {
    const url = constructUrl("activity");
    return getData(url, UserActivitiesFactory, "api");
}

export async function fetchSessionsData() {
    const url = constructUrl("average-sessions");
    return getData(url, UserSessionsFactory, "api");
}

export async function fetchPerformanceData() {
    const url = constructUrl("performance");
    return getData(url, UserPerformanceFactory, "api");
}
