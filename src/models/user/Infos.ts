import { Infos } from "@/utils/models/Infos";

export class UserInfos {
    private id: string;
    private firstName: string;
    private lastName: string;
    private age: number;
    private todayScore?: number;
    private score: number;
    private calorieCount: number;
    private proteinCount: number;
    private carbohydrateCount: number;
    private lipidCount: number;

    constructor(user: Infos) {
        const { data } = user;
        const { userInfos, todayScore, score, keyData } = data;

        this.id = data.id;
        this.firstName = userInfos.firstName;
        this.lastName = userInfos.lastName;
        this.age = userInfos.age;
        this.todayScore = todayScore;
        this.score = score;
        this.calorieCount = keyData.calorieCount;
        this.proteinCount = keyData.proteinCount;
        this.carbohydrateCount = keyData.carbohydrateCount;
        this.lipidCount = keyData.lipidCount;
    }

    get getId(): string {
        return this.id;
    }

    get getFirstName(): string {
        return this.firstName;
    }

    get getLastName(): string {
        return this.lastName;
    }

    get getAge(): number {
        return this.age;
    }

    get getTodayScore(): number {
        return this.todayScore ?? this.score;
    }

    get getCalorieCount(): number {
        return this.calorieCount;
    }

    get getProteinCount(): number {
        return this.proteinCount;
    }

    get getCarbohydrateCount(): number {
        return this.carbohydrateCount;
    }

    get getLipidCount(): number {
        return this.lipidCount;
    }
}
