import { Infos } from "@/utils/models/Infos";

export class UserInfos {
    private constructor_id: string;
    private constructor_firstName: string;
    private constructor_lastName: string;
    private constructor_age: number;
    private constructor_todayScore: number | undefined;
    private constructor_score: number;
    private constructor_calorieCount: number;
    private constructor_proteinCount: number;
    private constructor_carbohydrateCount: number;
    private constructor_lipidCount: number;

    constructor(user: Infos) {
        this.constructor_id = user.data.id;
        this.constructor_firstName = user.data.userInfos.firstName;
        this.constructor_lastName = user.data.userInfos.lastName;
        this.constructor_age = user.data.userInfos.age;
        this.constructor_todayScore = user.data.todayScore;
        this.constructor_score = user.data.score;
        this.constructor_calorieCount = user.data.keyData.calorieCount;
        this.constructor_proteinCount = user.data.keyData.proteinCount;
        this.constructor_carbohydrateCount = user.data.keyData.carbohydrateCount;
        this.constructor_lipidCount = user.data.keyData.lipidCount;
    }

    get id(): string {
        return this.constructor_id;
    }

    get firstName(): string {
        return this.constructor_firstName;
    }

    get lastName(): string {
        return this.constructor_lastName;
    }

    get age(): number {
        return this.constructor_age;
    }

    get todayScore(): number {
        if (this.constructor_todayScore) {
            return this.constructor_todayScore;
        }
        return this.constructor_score;
    }

    get calorieCount(): number {
        return this.constructor_calorieCount;
    }

    get proteinCount(): number {
        return this.constructor_proteinCount;
    }

    get carbohydrateCount(): number {
        return this.constructor_carbohydrateCount;
    }

    get lipidCount(): number {
        return this.constructor_lipidCount;
    }
}
