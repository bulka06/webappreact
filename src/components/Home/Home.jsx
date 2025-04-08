import React from "react";
import "./Home.css";
import useTelegram from "../hooks/useTelegram";
import ZakladList from "../ZakladList/ZakladList";

const Home = () => {
    const { user } = useTelegram();

    return (
        <div className="home">
            <div className="home-background">
                <div className="home-content">
                    <h1>Доставка вашої улюбленої їжі</h1>
                </div>
            </div>

            <div className="home-list-wrapper">
                <ZakladList />
            </div>
        </div>
    );
};

export default Home;
