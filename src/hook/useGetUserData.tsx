import { useEffect, useState } from 'react';
import {
    fetchActivitiesData,
    fetchUserInfosData,
} from '@/services/getData'; 

export function useGetUserData() {
    const [activitiesData, setActivitiesData] = useState([]);
    const [userInfosData, setUserInfosData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const [activities, userInfos] = await Promise.all([
                    fetchActivitiesData(),
                    fetchUserInfosData(),
                ]);

                setActivitiesData(activities);
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

    return { activitiesData, userInfosData, loading, error };
}