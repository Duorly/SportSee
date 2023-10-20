import { useEffect, useState } from 'react';
import {
    fetchUserInfosData,
} from '@/services/getData';

export function useGetUserData() {
    const [userInfosData, setUserInfosData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const [userInfos] = await Promise.all([
                    fetchUserInfosData(),
                ]);

                setUserInfosData(userInfos);

                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { userInfosData, loading, error };
}