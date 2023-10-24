import { Performance } from "../types/Performance"

export interface UserPerformance {
    data: {
        userId: string,
        kind: string,
        data: Performance[]
    }
}