import { Header } from "@/components/Navigation/Header"
import { Sidebar } from "@/components/Navigation/Sidebar"
import { UserName } from "@/components/User/Name"
import { Loader } from "@/components/Utils/Loader";
import { useGetUserData } from "@/hook/useGetUserData";
import { ChartBar } from "@/components/Charts/Bar";
import { ChartLine } from "@/components/Charts/Line";
import { ChartRadar } from "@/components/Charts/Radar";
import { ChartRadial } from "@/components/Charts/Radial";
import "./style.scss"

type ApiData = {
    userInfosData: any;
    loading: boolean;
};

export const Home = () => {
    const { userInfosData, loading }: ApiData = useGetUserData()

    if (loading)
        return (
            <Loader />
        );

    return (
        <>
            <Header />
            <Sidebar />

            <div className="container">
                <UserName name={userInfosData.firstName} />

                <div className="content">
                    <div className="left-content">
                        <ChartBar />

                        <div className='charts'>
                            <ChartLine />
                            <ChartRadar />
                            <ChartRadial score={userInfosData.todayScore} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}