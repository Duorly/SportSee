import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import { Skeleton } from '../../Utils/Skeleton';
import { useGetUserData } from '@/hook/useGetUserData';
import "./style.scss";

type ApiData = {
    activitiesData: any;
    loading: boolean;
};

export const ChartBar = () => {
    const [activities, setActivities] = useState([]);

    const { activitiesData, loading }: ApiData = useGetUserData()

    const formatXAxis = (tick: string) => {
        const date = new Date(tick);
        return date.getDate().toString();
    };

    useEffect(() => {
        if (activitiesData) {
            setActivities(activitiesData.sessions);
        }
    }, [activitiesData]);

    if (loading)
        return (
            <Skeleton />
        );

    return (
        <>
            <div className='chartBar'>
                <div className="head">
                    <div className="chartBar_text">Activité quotidienne</div>

                    <div className="description">
                        <div className="legend">Poids (kg)</div>
                        <div className="legend">Calories brûlées (kCal)</div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activities}>
                        <CartesianGrid strokeDasharray="2 2" horizontal={true}
                            vertical={false} />
                        <XAxis dataKey="day" tickFormatter={(tick) => formatXAxis(tick)} axisLine={false} tickLine={false} />
                        <YAxis orientation="right" axisLine={false} tickLine={false} />

                        <Tooltip
                            offset={40}
                            wrapperStyle={{ outline: "none", fontWeight: 600 }}
                            content={<CustomTooltip />}
                        />

                        <Bar dataKey="kilogram" name="kg" fill="black" radius={[10, 10, 0, 0]}
                            barSize={10} />
                        <Bar dataKey="calories" name="kCal" fill="red" radius={[10, 10, 0, 0]}
                            barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

const CustomTooltip = (data: any) => {
    try {
        let kg = data.payload[0]['value'];
        let kCal = data.payload[1]['value'];

        return (
            <div className="custom-tooltip">
                <p className="label">{`${kg}kg`}</p>
                <p className="label">{`${kCal}Kcal`}</p>
            </div>
        );
    }
    catch {
        return null;
    }
};