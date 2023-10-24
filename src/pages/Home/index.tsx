import { Header } from "@/components/Navigation/Header"
import { Sidebar } from "@/components/Navigation/Sidebar"
import { UserName } from "@/components/User/Name"
import { Loader } from "@/components/Utils/Loader";
import { useGetUserData } from "@/hook/useGetUserData";
import { ChartBar } from "@/components/Charts/Bar";
import { ChartLine } from "@/components/Charts/Line";
import "./style.scss"
import { ChartRadar } from "@/components/Charts/Radar";

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}