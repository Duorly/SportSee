import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import "./style.scss";

interface ChartRadialProps { score: number }

export const ChartRadial = ({ score }: ChartRadialProps) => {
    const data = [
        { name: 'Score', value: score * 100 },
    ];

    return (
        <>
            <div className='chartRadial'>
                <div className="title">Score</div>

                <ResponsiveContainer width="100%" height="100%" id="spin">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            startAngle={70}
                            endAngle={430 * score + 70}
                            innerRadius={"60%"}
                            outerRadius={"70%"}
                            dataKey="value"
                            cornerRadius={10}
                        >

                            <Cell stroke="" fill="red" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="details">
                    <div className="percentage">{score * 100}%</div>
                    <div className="message">de votre</div>
                    <div className="message">objectif</div>
                </div>
            </div>
        </>

    );
};