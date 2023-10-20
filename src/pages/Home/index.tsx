import { Header } from "@/components/Navigation/Header"
import { Sidebar } from "@/components/Navigation/Sidebar"
import { UserName } from "@/components/User/Name"
import { Loader } from "@/components/Utils/Loader";
import { useGetUserData } from "@/hook/useGetUserData";
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
            </div>
        </>
    )
}