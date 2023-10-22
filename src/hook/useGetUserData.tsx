import { useEffect, useState } from 'react';
import {
    fetchActivitiesData,
    fetchSessionsData,
    fetchUserInfosData,
} from '@/services/getData'; 

export function useGetUserData() {
    const [activitiesData, setActivitiesData] = useState([]);
    const [sessionsData, setSessionsData] = useState([]);
    const [userInfosData, setUserInfosData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const [activities, sessions, userInfos] = await Promise.all([
                    fetchActivitiesData(),
                    fetchSessionsData(),
                    fetchUserInfosData(),
                ]);

                setActivitiesData(activities);
                setSessionsData(sessions);
                setUserInfosData(userInfos);

                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } catch (error : any) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { activitiesData, sessionsData, userInfosData, loading, error };
}