import { useRef, useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, } from 'recharts';
import { Skeleton } from '../../Utils/Skeleton';
import { useGetUserData } from '@/hook/useGetUserData';
import "./style.scss";

type ApiData = {
    sessionsData: any;
    loading: boolean;
};

export const ChartLine = () => {
    const averageDivRef = useRef<HTMLDivElement | null>(null);

    const [sessions, setSessions] = useState([]);

    const { sessionsData, loading }: ApiData = useGetUserData()

    useEffect(() => {
        if (sessionsData) {
            setSessions(sessionsData.sessions);
        }
    }, [sessionsData]);

    if (loading)
        return (
            <Skeleton />
        );

    const handleMouseMove = (e: any) => {
        if (e.isTooltipActive === true && averageDivRef.current) {
            let averageDiv = averageDivRef.current;
            let averageDivWidth = averageDiv.clientWidth;
            let coordinateXPercent = Math.round(
                (e.activeCoordinate.x / averageDivWidth) * 100
            );
            averageDiv.style.backgroundImage = `linear-gradient(
                  to right, 
                  #ff0000 ${coordinateXPercent}%, 
                  #d60000 ${coordinateXPercent}%
              )`;
        }
    };

    return (
        <div className='chartLine' ref={averageDivRef}>
            <h2>
                Durée moyenne des sessions
            </h2>

            <ResponsiveContainer width="100%" height="100%">

                <LineChart data={sessions} margin={{ bottom: 10 }} onMouseMove={handleMouseMove} >

                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"
                        strokeWidth={2.5} dot={false}
                        activeDot={{
                            stroke: "rgba(255, 255, 255, 0.3)",
                            strokeWidth: 12,
                            r: 5,
                        }}
                    />

                    <XAxis dataKey="sessionLength" />

                    <Tooltip cursor={false}
                        contentStyle={{ backgroundColor: "white" }}
                        wrapperStyle={{ outline: "none", fontWeight: 600, color: "black" }}
                        labelFormatter={value => `${value} min`}
                    />

                </LineChart>

            </ResponsiveContainer>

            <div className="legend">
                <p>L</p>
                <p>M</p>
                <p>M</p>
                <p>J</p>
                <p>V</p>
                <p>S</p>
                <p>D</p>
            </div>
        </div>
    );
};