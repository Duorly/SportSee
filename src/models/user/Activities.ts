import { FormatSessionActivity } from '../formater/SessionActivity';
import { Activity as ActivityType } from '../../utils/types/Activity';
import { UserActivity } from '@/utils/models/UserActivity';

export class UserActivities {
    private userId: string;
    private sessions: ActivityType[];

    constructor(user: UserActivity) {
        this.userId = user.data.userId;
        this.sessions = user.data.sessions;
    }

    get id(): string {
        return this.userId;
    }

    get formattedSessions(): ActivityType[] {
        return this.sessions.map(session => new FormatSessionActivity(session));
    }
}
