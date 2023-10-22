import { UserSession } from '@/utils/models/UserSession';
import { FormatSessionDuration } from '../formater/SessionDuration';

export class UserSessions {
    private id: string;
    private sessions: FormatSessionDuration[];

    constructor(user: UserSession) {
        this.id = user.data.userId;
        this.sessions = user.data.sessions.map(session => new FormatSessionDuration(session));
    }

    getUserId(): string {
        return this.id;
    }

    getFormattedSessions(): { day: string, sessionLength: number }[] {
        return this.sessions.map(session => ({ day: session.getDay(), sessionLength: session.getSessionLength() }));
    }
}
