import { Duration } from '../types/Duration';

export interface UserSession {
    data: {
        userId: string;
        sessions: Duration[];
    };
}