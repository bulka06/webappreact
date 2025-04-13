import React from "react";
import "./Home.css";
import ZakladList from "./ZakladList/ZakladList";
import HomeButtons from "./HomeButtons/HomeButtons";
import CategoryList from "./CategoryList/CategoryList";

const Home = () => {
    return (
        <div className="home">
            <div className="home-background">
                <div className="home-content">
                    <h1>Доставка вашої улюбленої їжі</h1>
                </div>
            </div>
            <HomeButtons />
            <div className="home-list-wrapper">
                <ZakladList />
                <CategoryList /> {/* ось тут ми додаємо */}
            </div>
            
        </div>
    );
};

export default Home;
