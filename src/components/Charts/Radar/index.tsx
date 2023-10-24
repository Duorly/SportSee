import { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { Skeleton } from '../../Utils/Skeleton'
import { Performance } from '@/utils/types/Performance';
import { useGetUserData } from '@/hook/useGetUserData';
import "./style.scss";

type ApiData = {
  performanceData: any;
  loading: boolean;
};

export const ChartRadar = () => {
  const [performance, setPerformance] = useState([]);

  const { performanceData, loading } : ApiData = useGetUserData()

  useEffect(() => {
    if (performanceData && performanceData.data) {
      const sortList = [
        'Intensité',
        'Vitesse',
        'Force',
        'Endurance',
        'Energie',
        'Cardio',
      ];
      const sortedPerf = performanceData.data.sort((a: Performance, b: Performance) => {
        return sortList.indexOf(a.kind) - sortList.indexOf(b.kind);
      });
      setPerformance(sortedPerf);
    }
  }, [performanceData]);

  if (loading)
    return (
      <Skeleton />
    );

  return (
    <>
      <div className='chartRadar'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="66%" data={performance}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" dy={4} tickSize={15} />
            <Radar name="performance" dataKey="value" fill="red" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};