export interface Infos {
    data: {
        id: string,
        userInfos: {
            firstName: string,
            lastName: string,
            age: number,
        }
        todayScore: number
        score: number,
        keyData: {
            calorieCount: number
            proteinCount: number
            carbohydrateCount: number
            lipidCount: number
        }
    }
}