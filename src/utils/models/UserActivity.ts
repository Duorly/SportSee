import { Activity } from "../types/Activity"

export interface UserActivity {
    data: {
        userId: string
        sessions: Activity[]
    }
}