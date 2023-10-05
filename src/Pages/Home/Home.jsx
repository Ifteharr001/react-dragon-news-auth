import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./breakingNews";
import NewsCard from "./newsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Left side navbar */}
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news card section */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}>

                        </NewsCard>)
                    }
                </div>
                {/* right side navbar */}
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;